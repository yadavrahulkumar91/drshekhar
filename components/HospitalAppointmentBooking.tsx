'use client';

import { useState, useMemo } from 'react';
import { Calendar, Clock, Mail, User, Phone, Building2 } from 'lucide-react';
import { sendEmail, createAppointmentEmailBody, createDoctorEmailBody } from '@/lib/emailService';
import {
  getAllHospitals,
  getTimeSlotsByHospitalAndDay,
  getDayName,
  type TimeSlot,
  type DayOfWeek,
} from '@/data/appointment';
import { format } from 'date-fns';

const DOCTOR_EMAIL = 'yadavrahulkumar91@gmail.com';

interface FormData {
  hospitalId: string;
  fullName: string;
  email: string;
  phone: string;
  appointmentDate: string;
  appointmentTime: string;
}

export default function HospitalAppointmentBooking() {
  const [formData, setFormData] = useState<FormData>({
    hospitalId: '',
    fullName: '',
    email: '',
    phone: '',
    appointmentDate: '',
    appointmentTime: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const hospitals = useMemo(() => getAllHospitals(), []);

  // Get available time slots based on selected hospital and date
  const availableTimeSlots = useMemo(() => {
    if (!formData.hospitalId || !formData.appointmentDate) return [];
    const selectedDate = new Date(formData.appointmentDate);
    const dayOfWeek = selectedDate.getDay() as DayOfWeek;
    return getTimeSlotsByHospitalAndDay(formData.hospitalId, dayOfWeek);
  }, [formData.hospitalId, formData.appointmentDate]);

  // Get day name for display
  const selectedDayName = useMemo(() => {
    if (!formData.appointmentDate) return '';
    const selectedDate = new Date(formData.appointmentDate);
    const dayOfWeek = selectedDate.getDay() as DayOfWeek;
    return getDayName(dayOfWeek);
  }, [formData.appointmentDate]);

  // Get selected hospital details
  const selectedHospital = useMemo(() => {
    return hospitals.find((h) => h.id === formData.hospitalId);
  }, [formData.hospitalId, hospitals]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      // Reset dependent fields when hospital or date changes
      if (name === 'hospitalId' || name === 'appointmentDate') {
        updated.appointmentTime = '';
      }
      return updated;
    });
    setErrorMessage('');
  };

  const validateForm = (): boolean => {
    if (!formData.hospitalId) {
      setErrorMessage('Please select a hospital');
      return false;
    }
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name');
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage('Please enter your email address');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Please enter your phone number');
      return false;
    }
    if (!formData.appointmentDate) {
      setErrorMessage('Please select an appointment date');
      return false;
    }
    if (!formData.appointmentTime) {
      setErrorMessage('Please select an appointment time');
      return false;
    }

    // Ensure selected date is not in the past
    const selectedDate = new Date(formData.appointmentDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      setErrorMessage('Please select a future date');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Format the appointment date
      const selectedDate = new Date(formData.appointmentDate);
      const formattedDate = format(selectedDate, 'MMMM dd, yyyy');

      // Prepare email body for patient
      const emailBody = createAppointmentEmailBody(
        formData.fullName,
        formattedDate,
        formData.appointmentTime,
        formData.email,
        formData.phone,
        selectedHospital?.name,
        selectedHospital?.address,
      );

      // Send email to patient
      const patientEmailResult = await sendEmail({
        to: formData.email,
        subject: `Hospital Appointment Confirmation - ${selectedHospital?.name}`,
        html: emailBody,
      });

      if (!patientEmailResult.success) {
        throw new Error(patientEmailResult.error || 'Failed to send confirmation email');
      }

      // Send email to doctor
      const doctorEmailBody = createDoctorEmailBody(
        formData.fullName,
        formattedDate,
        formData.appointmentTime,
        formData.email,
        formData.phone,
        selectedHospital?.name,
        selectedHospital?.address,
      );

      const doctorEmailResult = await sendEmail({
        to: DOCTOR_EMAIL,
        subject: `New Hospital Appointment - ${selectedHospital?.name} - ${formData.fullName}`,
        html: `Appointment booked at ${selectedHospital?.name}. Please check the details below.\n\n${doctorEmailBody}`,
      });

      if (!doctorEmailResult.success) {
        console.error('Failed to send email to doctor:', doctorEmailResult.error);
        // Don't throw error here - patient email was sent successfully
      }

      // Reset form and show success message
      setFormData({
        hospitalId: '',
        fullName: '',
        email: '',
        phone: '',
        appointmentDate: '',
        appointmentTime: '',
      });

      setSuccessMessage(
        'Appointment booked successfully! A confirmation email has been sent to you.',
      );

      // Clear success message after 5 seconds
      setTimeout(() => setSuccessMessage(''), 5000);
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : 'Failed to book appointment. Please try again.',
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Hospital Selection */}
        <div>
          <label htmlFor="hospitalId" className="block text-sm font-semibold text-gray-900 dark:text-white mb-3">
            <div className="flex items-center space-x-2 mb-2">
              <Building2 size={18} className="text-emerald-600 dark:text-emerald-400" />
              <span>Select Hospital</span>
            </div>
          </label>
          <select
            id="hospitalId"
            name="hospitalId"
            value={formData.hospitalId}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-emerald-200 dark:border-emerald-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-400 transition cursor-pointer"
            disabled={isLoading}
          >
            <option value="">-- Select Hospital --</option>
            {hospitals.map((hospital) => (
              <option key={hospital.id} value={hospital.id}>
                {hospital.name}
              </option>
            ))}
          </select>
          {formData.hospitalId && selectedHospital && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              📍 {selectedHospital.address}
            </p>
          )}
        </div>

        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 dark:text-white mb-3">
            <div className="flex items-center space-x-2 mb-2">
              <User size={18} className="text-emerald-600 dark:text-emerald-400" />
              <span>Full Name</span>
            </div>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            className="w-full px-4 py-3 border border-emerald-200 dark:border-emerald-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-400 transition"
            disabled={isLoading}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-3">
            <div className="flex items-center space-x-2 mb-2">
              <Mail size={18} className="text-emerald-600 dark:text-emerald-400" />
              <span>Email Address</span>
            </div>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="your@email.com"
            className="w-full px-4 py-3 border border-emerald-200 dark:border-emerald-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-400 transition"
            disabled={isLoading}
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 dark:text-white mb-3">
            <div className="flex items-center space-x-2 mb-2">
              <Phone size={18} className="text-emerald-600 dark:text-emerald-400" />
              <span>Phone Number</span>
            </div>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+977 9800000000"
            className="w-full px-4 py-3 border border-emerald-200 dark:border-emerald-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-400 transition"
            disabled={isLoading}
          />
        </div>

        {/* Appointment Date */}
        <div>
          <label htmlFor="appointmentDate" className="block text-sm font-semibold text-gray-900 dark:text-white mb-3">
            <div className="flex items-center space-x-2 mb-2">
              <Calendar size={18} className="text-emerald-600 dark:text-emerald-400" />
              <span>Select Appointment Date</span>
            </div>
          </label>
          <input
            type="date"
            id="appointmentDate"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleInputChange}
            min={today}
            className="w-full px-4 py-3 border border-emerald-200 dark:border-emerald-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-400 transition cursor-pointer"
            disabled={isLoading || !formData.hospitalId}
          />
        </div>

        {/* Appointment Time */}
        <div>
          <label htmlFor="appointmentTime" className="block text-sm font-semibold text-gray-900 dark:text-white mb-3">
            <div className="flex items-center space-x-2 mb-2">
              <Clock size={18} className="text-emerald-600 dark:text-emerald-400" />
              <span>Select Appointment Time {selectedDayName && `(${selectedDayName})`}</span>
            </div>
          </label>
          <select
            id="appointmentTime"
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-emerald-200 dark:border-emerald-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-400 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading || !formData.appointmentDate || availableTimeSlots.length === 0}
          >
            <option value="">
              {!formData.appointmentDate
                ? '-- Select a date first --'
                : availableTimeSlots.length === 0
                  ? '-- No slots available --'
                  : '-- Select Time Slot --'}
            </option>
            {availableTimeSlots.map((slot: TimeSlot) => (
              <option key={slot.time} value={slot.display}>
                {slot.display}
              </option>
            ))}
          </select>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <p className="text-red-700 dark:text-red-300 text-sm">{errorMessage}</p>
          </div>
        )}

        {/* Success Message */}
        {successMessage && (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <p className="text-green-700 dark:text-green-300 text-sm">{successMessage}</p>
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 hover:from-emerald-700 hover:via-green-700 hover:to-teal-700 disabled:from-gray-400 disabled:via-gray-400 disabled:to-gray-400 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Booking Appointment...' : 'Book Appointment'}
          </button>
        </div>

        {/* Note */}
        <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700 rounded-lg p-4">
          <p className="text-emerald-800 dark:text-emerald-200 text-sm">
            <strong>Note:</strong> A confirmation email will be sent to the provided email address with appointment details and hospital location.
          </p>
        </div>
      </form>
    </div>
  );
}
