export interface TimeSlot {
  time: string;
  display: string;
}

export interface HospitalSchedule {
  morning: TimeSlot[];
  afternoon: TimeSlot[];
  evening?: TimeSlot[];
}

export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 = Sunday, 1 = Monday, etc.

export interface Hospital {
  id: string;
  name: string;
  address: string;
  phone: string;
  schedule: Record<DayOfWeek, HospitalSchedule>;
}

// National Gastro Liver Center (NGLC) - Same as Teleconsultation
export const NGLC: Hospital = {
  id: 'nglc',
  name: 'National Gastro Liver Center (NGLC)',
  address: 'Location: National Gastro Liver Center, Kathmandu',
  phone: 'Contact for details',
  schedule: {
    // Sunday
    0: {
      morning: [
        { time: '08:00 AM', display: '08:00 AM - 08:10 AM' },
        { time: '08:10 AM', display: '08:10 AM - 08:20 AM' },
        { time: '08:20 AM', display: '08:20 AM - 08:30 AM' },
        { time: '08:30 AM', display: '08:30 AM - 08:40 AM' },
        { time: '08:40 AM', display: '08:40 AM - 08:50 AM' },
        { time: '08:50 AM', display: '08:50 AM - 09:00 AM' },
        { time: '09:00 AM', display: '09:00 AM - 09:10 AM' },
        { time: '09:10 AM', display: '09:10 AM - 09:20 AM' },
        { time: '09:20 AM', display: '09:20 AM - 09:30 AM' },
        { time: '09:30 AM', display: '09:30 AM - 09:40 AM' },
        { time: '09:40 AM', display: '09:40 AM - 09:50 AM' },
      ],
      afternoon: [
        { time: '03:00 PM', display: '03:00 PM - 03:10 PM' },
        { time: '03:10 PM', display: '03:10 PM - 03:20 PM' },
        { time: '03:20 PM', display: '03:20 PM - 03:30 PM' },
        { time: '03:30 PM', display: '03:30 PM - 03:40 PM' },
        { time: '03:40 PM', display: '03:40 PM - 03:50 PM' },
        { time: '03:50 PM', display: '03:50 PM - 04:00 PM' },
        { time: '04:00 PM', display: '04:00 PM - 04:10 PM' },
        { time: '04:10 PM', display: '04:10 PM - 04:20 PM' },
        { time: '04:20 PM', display: '04:20 PM - 04:30 PM' },
        { time: '04:30 PM', display: '04:30 PM - 04:40 PM' },
        { time: '04:40 PM', display: '04:40 PM - 04:50 PM' },
        { time: '04:50 PM', display: '04:50 PM - 05:00 PM' },
        { time: '05:00 PM', display: '05:00 PM - 05:10 PM' },
        { time: '05:10 PM', display: '05:10 PM - 05:20 PM' },
        { time: '05:20 PM', display: '05:20 PM - 05:30 PM' },
        { time: '05:30 PM', display: '05:30 PM - 05:40 PM' },
        { time: '05:40 PM', display: '05:40 PM - 05:50 PM' },
        { time: '05:50 PM', display: '05:50 PM - 06:00 PM' },
      ],
      evening: [
        { time: '06:00 PM', display: '06:00 PM - 06:10 PM' },
        { time: '06:10 PM', display: '06:10 PM - 06:20 PM' },
        { time: '06:20 PM', display: '06:20 PM - 06:30 PM' },
        { time: '06:30 PM', display: '06:30 PM - 06:40 PM' },
        { time: '06:40 PM', display: '06:40 PM - 06:50 PM' },
        { time: '06:50 PM', display: '06:50 PM - 07:00 PM' },
      ],
    },
    // Monday
    1: {
      morning: [
        { time: '08:00 AM', display: '08:00 AM - 08:10 AM' },
        { time: '08:10 AM', display: '08:10 AM - 08:20 AM' },
        { time: '08:20 AM', display: '08:20 AM - 08:30 AM' },
        { time: '08:30 AM', display: '08:30 AM - 08:40 AM' },
        { time: '08:40 AM', display: '08:40 AM - 08:50 AM' },
        { time: '08:50 AM', display: '08:50 AM - 09:00 AM' },
        { time: '09:00 AM', display: '09:00 AM - 09:10 AM' },
        { time: '09:10 AM', display: '09:10 AM - 09:20 AM' },
        { time: '09:20 AM', display: '09:20 AM - 09:30 AM' },
        { time: '09:30 AM', display: '09:30 AM - 09:40 AM' },
        { time: '09:40 AM', display: '09:40 AM - 09:50 AM' },
        { time: '09:50 AM', display: '09:50 AM - 10:00 AM' },
      ],
      afternoon: [
        { time: '03:00 PM', display: '03:00 PM - 03:10 PM' },
        { time: '03:10 PM', display: '03:10 PM - 03:20 PM' },
        { time: '03:20 PM', display: '03:20 PM - 03:30 PM' },
        { time: '03:30 PM', display: '03:30 PM - 03:40 PM' },
        { time: '03:40 PM', display: '03:40 PM - 03:50 PM' },
        { time: '03:50 PM', display: '03:50 PM - 04:00 PM' },
        { time: '04:00 PM', display: '04:00 PM - 04:10 PM' },
        { time: '04:10 PM', display: '04:10 PM - 04:20 PM' },
        { time: '04:20 PM', display: '04:20 PM - 04:30 PM' },
        { time: '04:30 PM', display: '04:30 PM - 04:40 PM' },
        { time: '04:40 PM', display: '04:40 PM - 04:50 PM' },
        { time: '04:50 PM', display: '04:50 PM - 05:00 PM' },
        { time: '05:00 PM', display: '05:00 PM - 05:10 PM' },
        { time: '05:10 PM', display: '05:10 PM - 05:20 PM' },
        { time: '05:20 PM', display: '05:20 PM - 05:30 PM' },
        { time: '05:30 PM', display: '05:30 PM - 05:40 PM' },
        { time: '05:40 PM', display: '05:40 PM - 05:50 PM' },
        { time: '05:50 PM', display: '05:50 PM - 06:00 PM' },
      ],
      evening: [
        { time: '06:00 PM', display: '06:00 PM - 06:10 PM' },
        { time: '06:10 PM', display: '06:10 PM - 06:20 PM' },
        { time: '06:20 PM', display: '06:20 PM - 06:30 PM' },
        { time: '06:30 PM', display: '06:30 PM - 06:40 PM' },
        { time: '06:40 PM', display: '06:40 PM - 06:50 PM' },
        { time: '06:50 PM', display: '06:50 PM - 07:00 PM' },
      ],
    },
    // Tuesday
    2: {
      morning: [
        { time: '08:00 AM', display: '08:00 AM - 08:10 AM' },
        { time: '08:10 AM', display: '08:10 AM - 08:20 AM' },
        { time: '08:20 AM', display: '08:20 AM - 08:30 AM' },
        { time: '08:30 AM', display: '08:30 AM - 08:40 AM' },
        { time: '08:40 AM', display: '08:40 AM - 08:50 AM' },
        { time: '08:50 AM', display: '08:50 AM - 09:00 AM' },
        { time: '09:00 AM', display: '09:00 AM - 09:10 AM' },
        { time: '09:10 AM', display: '09:10 AM - 09:20 AM' },
        { time: '09:20 AM', display: '09:20 AM - 09:30 AM' },
        { time: '09:30 AM', display: '09:30 AM - 09:40 AM' },
        { time: '09:40 AM', display: '09:40 AM - 09:50 AM' },
      ],
      afternoon: [
        { time: '02:30 PM', display: '02:30 PM - 02:40 PM' },
        { time: '02:40 PM', display: '02:40 PM - 02:50 PM' },
        { time: '02:50 PM', display: '02:50 PM - 03:00 PM' },
        { time: '03:00 PM', display: '03:00 PM - 03:10 PM' },
        { time: '03:10 PM', display: '03:10 PM - 03:20 PM' },
        { time: '03:20 PM', display: '03:20 PM - 03:30 PM' },
        { time: '03:30 PM', display: '03:30 PM - 03:40 PM' },
        { time: '03:40 PM', display: '03:40 PM - 03:50 PM' },
        { time: '03:50 PM', display: '03:50 PM - 04:00 PM' },
        { time: '04:00 PM', display: '04:00 PM - 04:10 PM' },
        { time: '04:10 PM', display: '04:10 PM - 04:20 PM' },
        { time: '04:20 PM', display: '04:20 PM - 04:30 PM' },
        { time: '04:30 PM', display: '04:30 PM - 04:40 PM' },
        { time: '04:40 PM', display: '04:40 PM - 04:50 PM' },
        { time: '04:50 PM', display: '04:50 PM - 05:00 PM' },
        { time: '05:00 PM', display: '05:00 PM - 05:10 PM' },
        { time: '05:10 PM', display: '05:10 PM - 05:20 PM' },
        { time: '05:20 PM', display: '05:20 PM - 05:30 PM' },
        { time: '05:30 PM', display: '05:30 PM - 05:40 PM' },
        { time: '05:40 PM', display: '05:40 PM - 05:50 PM' },
        { time: '05:50 PM', display: '05:50 PM - 06:00 PM' },
      ],
      evening: [
        { time: '06:00 PM', display: '06:00 PM - 06:10 PM' },
        { time: '06:10 PM', display: '06:10 PM - 06:20 PM' },
        { time: '06:20 PM', display: '06:20 PM - 06:30 PM' },
        { time: '06:30 PM', display: '06:30 PM - 06:40 PM' },
        { time: '06:40 PM', display: '06:40 PM - 06:50 PM' },
        { time: '06:50 PM', display: '06:50 PM - 07:00 PM' },
      ],
    },
    // Wednesday
    3: {
      morning: [
        { time: '08:10 AM', display: '08:10 AM - 08:20 AM' },
        { time: '08:20 AM', display: '08:20 AM - 08:30 AM' },
        { time: '08:30 AM', display: '08:30 AM - 08:40 AM' },
        { time: '08:40 AM', display: '08:40 AM - 08:50 AM' },
        { time: '08:50 AM', display: '08:50 AM - 09:00 AM' },
        { time: '09:00 AM', display: '09:00 AM - 09:10 AM' },
        { time: '09:10 AM', display: '09:10 AM - 09:20 AM' },
        { time: '09:20 AM', display: '09:20 AM - 09:30 AM' },
        { time: '09:30 AM', display: '09:30 AM - 09:40 AM' },
        { time: '09:40 AM', display: '09:40 AM - 09:50 AM' },
      ],
      afternoon: [
        { time: '02:30 PM', display: '02:30 PM - 02:40 PM' },
        { time: '02:40 PM', display: '02:40 PM - 02:50 PM' },
        { time: '02:50 PM', display: '02:50 PM - 03:00 PM' },
        { time: '03:00 PM', display: '03:00 PM - 03:10 PM' },
        { time: '03:10 PM', display: '03:10 PM - 03:20 PM' },
        { time: '03:20 PM', display: '03:20 PM - 03:30 PM' },
        { time: '03:30 PM', display: '03:30 PM - 03:40 PM' },
        { time: '03:40 PM', display: '03:40 PM - 03:50 PM' },
        { time: '03:50 PM', display: '03:50 PM - 04:00 PM' },
        { time: '04:00 PM', display: '04:00 PM - 04:10 PM' },
        { time: '04:10 PM', display: '04:10 PM - 04:20 PM' },
        { time: '04:20 PM', display: '04:20 PM - 04:30 PM' },
        { time: '04:30 PM', display: '04:30 PM - 04:40 PM' },
        { time: '04:40 PM', display: '04:40 PM - 04:50 PM' },
        { time: '04:50 PM', display: '04:50 PM - 05:00 PM' },
        { time: '05:00 PM', display: '05:00 PM - 05:10 PM' },
        { time: '05:10 PM', display: '05:10 PM - 05:20 PM' },
        { time: '05:20 PM', display: '05:20 PM - 05:30 PM' },
        { time: '05:30 PM', display: '05:30 PM - 05:40 PM' },
        { time: '05:40 PM', display: '05:40 PM - 05:50 PM' },
        { time: '05:50 PM', display: '05:50 PM - 06:00 PM' },
      ],
      evening: [
        { time: '06:00 PM', display: '06:00 PM - 06:10 PM' },
        { time: '06:10 PM', display: '06:10 PM - 06:20 PM' },
        { time: '06:20 PM', display: '06:20 PM - 06:30 PM' },
        { time: '06:30 PM', display: '06:30 PM - 06:40 PM' },
        { time: '06:40 PM', display: '06:40 PM - 06:50 PM' },
        { time: '06:50 PM', display: '06:50 PM - 07:00 PM' },
      ],
    },
    // Thursday
    4: {
      morning: [
        { time: '08:00 AM', display: '08:00 AM - 08:10 AM' },
        { time: '08:10 AM', display: '08:10 AM - 08:20 AM' },
        { time: '08:20 AM', display: '08:20 AM - 08:30 AM' },
        { time: '08:30 AM', display: '08:30 AM - 08:40 AM' },
        { time: '08:40 AM', display: '08:40 AM - 08:50 AM' },
        { time: '08:50 AM', display: '08:50 AM - 09:00 AM' },
        { time: '09:00 AM', display: '09:00 AM - 09:10 AM' },
        { time: '09:10 AM', display: '09:10 AM - 09:20 AM' },
        { time: '09:20 AM', display: '09:20 AM - 09:30 AM' },
        { time: '09:30 AM', display: '09:30 AM - 09:40 AM' },
        { time: '09:40 AM', display: '09:40 AM - 09:50 AM' },
      ],
      afternoon: [
        { time: '02:30 PM', display: '02:30 PM - 02:40 PM' },
        { time: '02:40 PM', display: '02:40 PM - 02:50 PM' },
        { time: '02:50 PM', display: '02:50 PM - 03:00 PM' },
        { time: '03:00 PM', display: '03:00 PM - 03:10 PM' },
        { time: '03:10 PM', display: '03:10 PM - 03:20 PM' },
        { time: '03:20 PM', display: '03:20 PM - 03:30 PM' },
        { time: '03:30 PM', display: '03:30 PM - 03:40 PM' },
        { time: '03:40 PM', display: '03:40 PM - 03:50 PM' },
        { time: '03:50 PM', display: '03:50 PM - 04:00 PM' },
        { time: '04:00 PM', display: '04:00 PM - 04:10 PM' },
        { time: '04:10 PM', display: '04:10 PM - 04:20 PM' },
        { time: '04:20 PM', display: '04:20 PM - 04:30 PM' },
        { time: '04:30 PM', display: '04:30 PM - 04:40 PM' },
        { time: '04:40 PM', display: '04:40 PM - 04:50 PM' },
        { time: '04:50 PM', display: '04:50 PM - 05:00 PM' },
        { time: '05:00 PM', display: '05:00 PM - 05:10 PM' },
        { time: '05:10 PM', display: '05:10 PM - 05:20 PM' },
        { time: '05:20 PM', display: '05:20 PM - 05:30 PM' },
        { time: '05:30 PM', display: '05:30 PM - 05:40 PM' },
        { time: '05:40 PM', display: '05:40 PM - 05:50 PM' },
        { time: '05:50 PM', display: '05:50 PM - 06:00 PM' },
      ],
      evening: [
        { time: '06:00 PM', display: '06:00 PM - 06:10 PM' },
        { time: '06:10 PM', display: '06:10 PM - 06:20 PM' },
        { time: '06:20 PM', display: '06:20 PM - 06:30 PM' },
        { time: '06:30 PM', display: '06:30 PM - 06:40 PM' },
        { time: '06:40 PM', display: '06:40 PM - 06:50 PM' },
        { time: '06:50 PM', display: '06:50 PM - 07:00 PM' },
      ],
    },
    // Friday
    5: {
      morning: [
        { time: '08:00 AM', display: '08:00 AM - 08:10 AM' },
        { time: '08:10 AM', display: '08:10 AM - 08:20 AM' },
        { time: '08:20 AM', display: '08:20 AM - 08:30 AM' },
        { time: '08:30 AM', display: '08:30 AM - 08:40 AM' },
        { time: '08:40 AM', display: '08:40 AM - 08:50 AM' },
        { time: '08:50 AM', display: '08:50 AM - 09:00 AM' },
        { time: '09:00 AM', display: '09:00 AM - 09:10 AM' },
        { time: '09:10 AM', display: '09:10 AM - 09:20 AM' },
        { time: '09:20 AM', display: '09:20 AM - 09:30 AM' },
        { time: '09:30 AM', display: '09:30 AM - 09:40 AM' },
        { time: '09:40 AM', display: '09:40 AM - 09:50 AM' },
      ],
      afternoon: [
        { time: '02:30 PM', display: '02:30 PM - 02:40 PM' },
        { time: '02:40 PM', display: '02:40 PM - 02:50 PM' },
        { time: '02:50 PM', display: '02:50 PM - 03:00 PM' },
        { time: '03:00 PM', display: '03:00 PM - 03:10 PM' },
        { time: '03:10 PM', display: '03:10 PM - 03:20 PM' },
        { time: '03:20 PM', display: '03:20 PM - 03:30 PM' },
        { time: '03:30 PM', display: '03:30 PM - 03:40 PM' },
        { time: '03:40 PM', display: '03:40 PM - 03:50 PM' },
        { time: '03:50 PM', display: '03:50 PM - 04:00 PM' },
        { time: '04:00 PM', display: '04:00 PM - 04:10 PM' },
        { time: '04:10 PM', display: '04:10 PM - 04:20 PM' },
        { time: '04:20 PM', display: '04:20 PM - 04:30 PM' },
        { time: '04:30 PM', display: '04:30 PM - 04:40 PM' },
        { time: '04:40 PM', display: '04:40 PM - 04:50 PM' },
        { time: '04:50 PM', display: '04:50 PM - 05:00 PM' },
        { time: '05:00 PM', display: '05:00 PM - 05:10 PM' },
        { time: '05:10 PM', display: '05:10 PM - 05:20 PM' },
        { time: '05:20 PM', display: '05:20 PM - 05:30 PM' },
        { time: '05:30 PM', display: '05:30 PM - 05:40 PM' },
        { time: '05:40 PM', display: '05:40 PM - 05:50 PM' },
        { time: '05:50 PM', display: '05:50 PM - 06:00 PM' },
      ],
      evening: [
        { time: '06:00 PM', display: '06:00 PM - 06:10 PM' },
        { time: '06:10 PM', display: '06:10 PM - 06:20 PM' },
        { time: '06:20 PM', display: '06:20 PM - 06:30 PM' },
        { time: '06:30 PM', display: '06:30 PM - 06:40 PM' },
        { time: '06:40 PM', display: '06:40 PM - 06:50 PM' },
        { time: '06:50 PM', display: '06:50 PM - 07:00 PM' },
      ],
    },
    // Saturday
    6: {
      morning: [
        { time: '08:00 AM', display: '08:00 AM - 08:10 AM' },
        { time: '08:10 AM', display: '08:10 AM - 08:20 AM' },
        { time: '08:20 AM', display: '08:20 AM - 08:30 AM' },
        { time: '08:30 AM', display: '08:30 AM - 08:40 AM' },
        { time: '08:40 AM', display: '08:40 AM - 08:50 AM' },
        { time: '08:50 AM', display: '08:50 AM - 09:00 AM' },
        { time: '09:00 AM', display: '09:00 AM - 09:10 AM' },
        { time: '09:10 AM', display: '09:10 AM - 09:20 AM' },
        { time: '09:20 AM', display: '09:20 AM - 09:30 AM' },
        { time: '09:30 AM', display: '09:30 AM - 09:40 AM' },
        { time: '09:40 AM', display: '09:40 AM - 09:50 AM' },
        { time: '09:50 AM', display: '09:50 AM - 10:00 AM' },
        { time: '10:00 AM', display: '10:00 AM - 10:10 AM' },
        { time: '10:10 AM', display: '10:10 AM - 10:20 AM' },
        { time: '10:20 AM', display: '10:20 AM - 10:30 AM' },
        { time: '10:30 AM', display: '10:30 AM - 10:40 AM' },
        { time: '10:40 AM', display: '10:40 AM - 10:50 AM' },
        { time: '10:50 AM', display: '10:50 AM - 11:00 AM' },
        { time: '11:00 AM', display: '11:00 AM - 11:10 AM' },
        { time: '11:10 AM', display: '11:10 AM - 11:20 AM' },
        { time: '11:20 AM', display: '11:20 AM - 11:30 AM' },
        { time: '11:30 AM', display: '11:30 AM - 11:40 AM' },
        { time: '11:40 AM', display: '11:40 AM - 11:50 AM' },
        { time: '11:50 AM', display: '11:50 AM - 12:00 PM' },
      ],
      afternoon: [],
    },
  },
};

// Norvic Hospital - Available during gaps between NGLC timings
export const NORVIC: Hospital = {
  id: 'norvic',
  name: 'Norvic Hospital',
  address: 'Location: Norvic Hospital, Kathmandu',
  phone: 'Contact for details',
  schedule: {
    // Sunday: 10:00 AM - 2:50 PM, 7:00 PM - 8:00 PM
    0: {
      morning: [
        { time: '10:00 AM', display: '10:00 AM - 10:10 AM' },
        { time: '10:10 AM', display: '10:10 AM - 10:20 AM' },
        { time: '10:20 AM', display: '10:20 AM - 10:30 AM' },
        { time: '10:30 AM', display: '10:30 AM - 10:40 AM' },
        { time: '10:40 AM', display: '10:40 AM - 10:50 AM' },
        { time: '10:50 AM', display: '10:50 AM - 11:00 AM' },
        { time: '11:00 AM', display: '11:00 AM - 11:10 AM' },
        { time: '11:10 AM', display: '11:10 AM - 11:20 AM' },
        { time: '11:20 AM', display: '11:20 AM - 11:30 AM' },
        { time: '11:30 AM', display: '11:30 AM - 11:40 AM' },
        { time: '11:40 AM', display: '11:40 AM - 11:50 AM' },
        { time: '11:50 AM', display: '11:50 AM - 12:00 PM' },
        { time: '12:00 PM', display: '12:00 PM - 12:10 PM' },
        { time: '12:10 PM', display: '12:10 PM - 12:20 PM' },
        { time: '12:20 PM', display: '12:20 PM - 12:30 PM' },
        { time: '12:30 PM', display: '12:30 PM - 12:40 PM' },
        { time: '12:40 PM', display: '12:40 PM - 12:50 PM' },
        { time: '12:50 PM', display: '12:50 PM - 01:00 PM' },
        { time: '01:00 PM', display: '01:00 PM - 01:10 PM' },
        { time: '01:10 PM', display: '01:10 PM - 01:20 PM' },
        { time: '01:20 PM', display: '01:20 PM - 01:30 PM' },
        { time: '01:30 PM', display: '01:30 PM - 01:40 PM' },
        { time: '01:40 PM', display: '01:40 PM - 01:50 PM' },
        { time: '01:50 PM', display: '01:50 PM - 02:00 PM' },
        { time: '02:00 PM', display: '02:00 PM - 02:10 PM' },
        { time: '02:10 PM', display: '02:10 PM - 02:20 PM' },
        { time: '02:20 PM', display: '02:20 PM - 02:30 PM' },
        { time: '02:30 PM', display: '02:30 PM - 02:40 PM' },
        { time: '02:40 PM', display: '02:40 PM - 02:50 PM' },
      ],
      afternoon: [],
      evening: [
        { time: '07:00 PM', display: '07:00 PM - 07:10 PM' },
        { time: '07:10 PM', display: '07:10 PM - 07:20 PM' },
        { time: '07:20 PM', display: '07:20 PM - 07:30 PM' },
        { time: '07:30 PM', display: '07:30 PM - 07:40 PM' },
        { time: '07:40 PM', display: '07:40 PM - 07:50 PM' },
        { time: '07:50 PM', display: '07:50 PM - 08:00 PM' },
      ],
    },
    // Monday: 10:10 AM - 2:50 PM, 7:00 PM - 8:00 PM
    1: {
      morning: [
        { time: '10:10 AM', display: '10:10 AM - 10:20 AM' },
        { time: '10:20 AM', display: '10:20 AM - 10:30 AM' },
        { time: '10:30 AM', display: '10:30 AM - 10:40 AM' },
        { time: '10:40 AM', display: '10:40 AM - 10:50 AM' },
        { time: '10:50 AM', display: '10:50 AM - 11:00 AM' },
        { time: '11:00 AM', display: '11:00 AM - 11:10 AM' },
        { time: '11:10 AM', display: '11:10 AM - 11:20 AM' },
        { time: '11:20 AM', display: '11:20 AM - 11:30 AM' },
        { time: '11:30 AM', display: '11:30 AM - 11:40 AM' },
        { time: '11:40 AM', display: '11:40 AM - 11:50 AM' },
        { time: '11:50 AM', display: '11:50 AM - 12:00 PM' },
        { time: '12:00 PM', display: '12:00 PM - 12:10 PM' },
        { time: '12:10 PM', display: '12:10 PM - 12:20 PM' },
        { time: '12:20 PM', display: '12:20 PM - 12:30 PM' },
        { time: '12:30 PM', display: '12:30 PM - 12:40 PM' },
        { time: '12:40 PM', display: '12:40 PM - 12:50 PM' },
        { time: '12:50 PM', display: '12:50 PM - 01:00 PM' },
        { time: '01:00 PM', display: '01:00 PM - 01:10 PM' },
        { time: '01:10 PM', display: '01:10 PM - 01:20 PM' },
        { time: '01:20 PM', display: '01:20 PM - 01:30 PM' },
        { time: '01:30 PM', display: '01:30 PM - 01:40 PM' },
        { time: '01:40 PM', display: '01:40 PM - 01:50 PM' },
        { time: '01:50 PM', display: '01:50 PM - 02:00 PM' },
        { time: '02:00 PM', display: '02:00 PM - 02:10 PM' },
        { time: '02:10 PM', display: '02:10 PM - 02:20 PM' },
        { time: '02:20 PM', display: '02:20 PM - 02:30 PM' },
        { time: '02:30 PM', display: '02:30 PM - 02:40 PM' },
        { time: '02:40 PM', display: '02:40 PM - 02:50 PM' },
      ],
      afternoon: [],
      evening: [
        { time: '07:00 PM', display: '07:00 PM - 07:10 PM' },
        { time: '07:10 PM', display: '07:10 PM - 07:20 PM' },
        { time: '07:20 PM', display: '07:20 PM - 07:30 PM' },
        { time: '07:30 PM', display: '07:30 PM - 07:40 PM' },
        { time: '07:40 PM', display: '07:40 PM - 07:50 PM' },
        { time: '07:50 PM', display: '07:50 PM - 08:00 PM' },
      ],
    },
    // Tuesday: 10:00 AM - 2:20 PM, 7:00 PM - 8:00 PM
    2: {
      morning: [
        { time: '10:00 AM', display: '10:00 AM - 10:10 AM' },
        { time: '10:10 AM', display: '10:10 AM - 10:20 AM' },
        { time: '10:20 AM', display: '10:20 AM - 10:30 AM' },
        { time: '10:30 AM', display: '10:30 AM - 10:40 AM' },
        { time: '10:40 AM', display: '10:40 AM - 10:50 AM' },
        { time: '10:50 AM', display: '10:50 AM - 11:00 AM' },
        { time: '11:00 AM', display: '11:00 AM - 11:10 AM' },
        { time: '11:10 AM', display: '11:10 AM - 11:20 AM' },
        { time: '11:20 AM', display: '11:20 AM - 11:30 AM' },
        { time: '11:30 AM', display: '11:30 AM - 11:40 AM' },
        { time: '11:40 AM', display: '11:40 AM - 11:50 AM' },
        { time: '11:50 AM', display: '11:50 AM - 12:00 PM' },
        { time: '12:00 PM', display: '12:00 PM - 12:10 PM' },
        { time: '12:10 PM', display: '12:10 PM - 12:20 PM' },
        { time: '12:20 PM', display: '12:20 PM - 12:30 PM' },
        { time: '12:30 PM', display: '12:30 PM - 12:40 PM' },
        { time: '12:40 PM', display: '12:40 PM - 12:50 PM' },
        { time: '12:50 PM', display: '12:50 PM - 01:00 PM' },
        { time: '01:00 PM', display: '01:00 PM - 01:10 PM' },
        { time: '01:10 PM', display: '01:10 PM - 01:20 PM' },
        { time: '01:20 PM', display: '01:20 PM - 01:30 PM' },
        { time: '01:30 PM', display: '01:30 PM - 01:40 PM' },
        { time: '01:40 PM', display: '01:40 PM - 01:50 PM' },
        { time: '01:50 PM', display: '01:50 PM - 02:00 PM' },
        { time: '02:00 PM', display: '02:00 PM - 02:10 PM' },
        { time: '02:10 PM', display: '02:10 PM - 02:20 PM' },
      ],
      afternoon: [],
      evening: [
        { time: '07:00 PM', display: '07:00 PM - 07:10 PM' },
        { time: '07:10 PM', display: '07:10 PM - 07:20 PM' },
        { time: '07:20 PM', display: '07:20 PM - 07:30 PM' },
        { time: '07:30 PM', display: '07:30 PM - 07:40 PM' },
        { time: '07:40 PM', display: '07:40 PM - 07:50 PM' },
        { time: '07:50 PM', display: '07:50 PM - 08:00 PM' },
      ],
    },
    // Wednesday: 10:00 AM - 2:20 PM, 7:00 PM - 8:00 PM
    3: {
      morning: [
        { time: '10:00 AM', display: '10:00 AM - 10:10 AM' },
        { time: '10:10 AM', display: '10:10 AM - 10:20 AM' },
        { time: '10:20 AM', display: '10:20 AM - 10:30 AM' },
        { time: '10:30 AM', display: '10:30 AM - 10:40 AM' },
        { time: '10:40 AM', display: '10:40 AM - 10:50 AM' },
        { time: '10:50 AM', display: '10:50 AM - 11:00 AM' },
        { time: '11:00 AM', display: '11:00 AM - 11:10 AM' },
        { time: '11:10 AM', display: '11:10 AM - 11:20 AM' },
        { time: '11:20 AM', display: '11:20 AM - 11:30 AM' },
        { time: '11:30 AM', display: '11:30 AM - 11:40 AM' },
        { time: '11:40 AM', display: '11:40 AM - 11:50 AM' },
        { time: '11:50 AM', display: '11:50 AM - 12:00 PM' },
        { time: '12:00 PM', display: '12:00 PM - 12:10 PM' },
        { time: '12:10 PM', display: '12:10 PM - 12:20 PM' },
        { time: '12:20 PM', display: '12:20 PM - 12:30 PM' },
        { time: '12:30 PM', display: '12:30 PM - 12:40 PM' },
        { time: '12:40 PM', display: '12:40 PM - 12:50 PM' },
        { time: '12:50 PM', display: '12:50 PM - 01:00 PM' },
        { time: '01:00 PM', display: '01:00 PM - 01:10 PM' },
        { time: '01:10 PM', display: '01:10 PM - 01:20 PM' },
        { time: '01:20 PM', display: '01:20 PM - 01:30 PM' },
        { time: '01:30 PM', display: '01:30 PM - 01:40 PM' },
        { time: '01:40 PM', display: '01:40 PM - 01:50 PM' },
        { time: '01:50 PM', display: '01:50 PM - 02:00 PM' },
        { time: '02:00 PM', display: '02:00 PM - 02:10 PM' },
        { time: '02:10 PM', display: '02:10 PM - 02:20 PM' },
      ],
      afternoon: [],
      evening: [
        { time: '07:00 PM', display: '07:00 PM - 07:10 PM' },
        { time: '07:10 PM', display: '07:10 PM - 07:20 PM' },
        { time: '07:20 PM', display: '07:20 PM - 07:30 PM' },
        { time: '07:30 PM', display: '07:30 PM - 07:40 PM' },
        { time: '07:40 PM', display: '07:40 PM - 07:50 PM' },
        { time: '07:50 PM', display: '07:50 PM - 08:00 PM' },
      ],
    },
    // Thursday: 10:00 AM - 2:20 PM, 7:00 PM - 8:00 PM
    4: {
      morning: [
        { time: '10:00 AM', display: '10:00 AM - 10:10 AM' },
        { time: '10:10 AM', display: '10:10 AM - 10:20 AM' },
        { time: '10:20 AM', display: '10:20 AM - 10:30 AM' },
        { time: '10:30 AM', display: '10:30 AM - 10:40 AM' },
        { time: '10:40 AM', display: '10:40 AM - 10:50 AM' },
        { time: '10:50 AM', display: '10:50 AM - 11:00 AM' },
        { time: '11:00 AM', display: '11:00 AM - 11:10 AM' },
        { time: '11:10 AM', display: '11:10 AM - 11:20 AM' },
        { time: '11:20 AM', display: '11:20 AM - 11:30 AM' },
        { time: '11:30 AM', display: '11:30 AM - 11:40 AM' },
        { time: '11:40 AM', display: '11:40 AM - 11:50 AM' },
        { time: '11:50 AM', display: '11:50 AM - 12:00 PM' },
        { time: '12:00 PM', display: '12:00 PM - 12:10 PM' },
        { time: '12:10 PM', display: '12:10 PM - 12:20 PM' },
        { time: '12:20 PM', display: '12:20 PM - 12:30 PM' },
        { time: '12:30 PM', display: '12:30 PM - 12:40 PM' },
        { time: '12:40 PM', display: '12:40 PM - 12:50 PM' },
        { time: '12:50 PM', display: '12:50 PM - 01:00 PM' },
        { time: '01:00 PM', display: '01:00 PM - 01:10 PM' },
        { time: '01:10 PM', display: '01:10 PM - 01:20 PM' },
        { time: '01:20 PM', display: '01:20 PM - 01:30 PM' },
        { time: '01:30 PM', display: '01:30 PM - 01:40 PM' },
        { time: '01:40 PM', display: '01:40 PM - 01:50 PM' },
        { time: '01:50 PM', display: '01:50 PM - 02:00 PM' },
        { time: '02:00 PM', display: '02:00 PM - 02:10 PM' },
        { time: '02:10 PM', display: '02:10 PM - 02:20 PM' },
      ],
      afternoon: [],
      evening: [
        { time: '07:00 PM', display: '07:00 PM - 07:10 PM' },
        { time: '07:10 PM', display: '07:10 PM - 07:20 PM' },
        { time: '07:20 PM', display: '07:20 PM - 07:30 PM' },
        { time: '07:30 PM', display: '07:30 PM - 07:40 PM' },
        { time: '07:40 PM', display: '07:40 PM - 07:50 PM' },
        { time: '07:50 PM', display: '07:50 PM - 08:00 PM' },
      ],
    },
    // Friday: 10:00 AM - 2:20 PM, 7:00 PM - 8:00 PM
    5: {
      morning: [
        { time: '10:00 AM', display: '10:00 AM - 10:10 AM' },
        { time: '10:10 AM', display: '10:10 AM - 10:20 AM' },
        { time: '10:20 AM', display: '10:20 AM - 10:30 AM' },
        { time: '10:30 AM', display: '10:30 AM - 10:40 AM' },
        { time: '10:40 AM', display: '10:40 AM - 10:50 AM' },
        { time: '10:50 AM', display: '10:50 AM - 11:00 AM' },
        { time: '11:00 AM', display: '11:00 AM - 11:10 AM' },
        { time: '11:10 AM', display: '11:10 AM - 11:20 AM' },
        { time: '11:20 AM', display: '11:20 AM - 11:30 AM' },
        { time: '11:30 AM', display: '11:30 AM - 11:40 AM' },
        { time: '11:40 AM', display: '11:40 AM - 11:50 AM' },
        { time: '11:50 AM', display: '11:50 AM - 12:00 PM' },
        { time: '12:00 PM', display: '12:00 PM - 12:10 PM' },
        { time: '12:10 PM', display: '12:10 PM - 12:20 PM' },
        { time: '12:20 PM', display: '12:20 PM - 12:30 PM' },
        { time: '12:30 PM', display: '12:30 PM - 12:40 PM' },
        { time: '12:40 PM', display: '12:40 PM - 12:50 PM' },
        { time: '12:50 PM', display: '12:50 PM - 01:00 PM' },
        { time: '01:00 PM', display: '01:00 PM - 01:10 PM' },
        { time: '01:10 PM', display: '01:10 PM - 01:20 PM' },
        { time: '01:20 PM', display: '01:20 PM - 01:30 PM' },
        { time: '01:30 PM', display: '01:30 PM - 01:40 PM' },
        { time: '01:40 PM', display: '01:40 PM - 01:50 PM' },
        { time: '01:50 PM', display: '01:50 PM - 02:00 PM' },
        { time: '02:00 PM', display: '02:00 PM - 02:10 PM' },
        { time: '02:10 PM', display: '02:10 PM - 02:20 PM' },
      ],
      afternoon: [],
      evening: [
        { time: '07:00 PM', display: '07:00 PM - 07:10 PM' },
        { time: '07:10 PM', display: '07:10 PM - 07:20 PM' },
        { time: '07:20 PM', display: '07:20 PM - 07:30 PM' },
        { time: '07:30 PM', display: '07:30 PM - 07:40 PM' },
        { time: '07:40 PM', display: '07:40 PM - 07:50 PM' },
        { time: '07:50 PM', display: '07:50 PM - 08:00 PM' },
      ],
    },
    // Saturday: Not available (NGLC operates full day)
    6: {
      morning: [],
      afternoon: [],
    },
  },
};

/**
 * Get all hospitals
 */
export function getAllHospitals(): Hospital[] {
  return [NGLC, NORVIC];
}

/**
 * Get hospital by ID
 */
export function getHospitalById(id: string): Hospital | undefined {
  return [NGLC, NORVIC].find((h) => h.id === id);
}

/**
 * Get available time slots for a specific hospital and day
 */
export function getTimeSlotsByHospitalAndDay(
  hospitalId: string,
  dayOfWeek: DayOfWeek,
): TimeSlot[] {
  const hospital = getHospitalById(hospitalId);
  if (!hospital) return [];

  const schedule = hospital.schedule[dayOfWeek];
  if (!schedule) return [];

  const allSlots = [...schedule.morning, ...schedule.afternoon];
  if (schedule.evening) {
    allSlots.push(...schedule.evening);
  }
  return allSlots;
}

/**
 * Get day name from day of week number
 */
export function getDayName(dayOfWeek: DayOfWeek): string {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[dayOfWeek];
}
