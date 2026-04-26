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

export const getAllHospitals = (): Hospital[] => [USDC];

export const getDayName = (day: DayOfWeek): string =>
  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day];

export const getTimeSlotsByHospitalAndDay = (hospitalId: string, day: DayOfWeek): TimeSlot[] => {
  const hospital = getAllHospitals().find((h) => h.id === hospitalId);
  if (!hospital) return [];
  const schedule = hospital.schedule[day];
  return [...schedule.morning, ...schedule.afternoon, ...(schedule.evening ?? [])];
};

// U Smile Dental Clinic - Main Clinic in Sarlahi
export const USDC: Hospital = {
  id: 'usdc',
  name: 'U Smile Dental Clinic',
  address: 'Lalbandi-6, Sarlahi, Nepal',
  phone: '046-540977 / +977-9854077977',
  schedule: {
    // Sunday
    0: {
      morning: [
        { time: '09:00 AM', display: '09:00 AM - 09:15 AM' },
        { time: '09:15 AM', display: '09:15 AM - 09:30 AM' },
        { time: '09:30 AM', display: '09:30 AM - 09:45 AM' },
        { time: '09:45 AM', display: '09:45 AM - 10:00 AM' },
        { time: '10:00 AM', display: '10:00 AM - 10:15 AM' },
        { time: '10:15 AM', display: '10:15 AM - 10:30 AM' },
        { time: '10:30 AM', display: '10:30 AM - 10:45 AM' },
        { time: '10:45 AM', display: '10:45 AM - 11:00 AM' },
        { time: '11:00 AM', display: '11:00 AM - 11:15 AM' },
        { time: '11:15 AM', display: '11:15 AM - 11:30 AM' },
        { time: '11:30 AM', display: '11:30 AM - 11:45 AM' },
        { time: '11:45 AM', display: '11:45 AM - 12:00 PM' },
      ],
      afternoon: [
        { time: '02:00 PM', display: '02:00 PM - 02:15 PM' },
        { time: '02:15 PM', display: '02:15 PM - 02:30 PM' },
        { time: '02:30 PM', display: '02:30 PM - 02:45 PM' },
        { time: '02:45 PM', display: '02:45 PM - 03:00 PM' },
        { time: '03:00 PM', display: '03:00 PM - 03:15 PM' },
        { time: '03:15 PM', display: '03:15 PM - 03:30 PM' },
        { time: '03:30 PM', display: '03:30 PM - 03:45 PM' },
        { time: '03:45 PM', display: '03:45 PM - 04:00 PM' },
        { time: '04:00 PM', display: '04:00 PM - 04:15 PM' },
        { time: '04:15 PM', display: '04:15 PM - 04:30 PM' },
        { time: '04:30 PM', display: '04:30 PM - 04:45 PM' },
        { time: '04:45 PM', display: '04:45 PM - 05:00 PM' },
        { time: '05:00 PM', display: '05:00 PM - 05:15 PM' },
        { time: '05:15 PM', display: '05:15 PM - 05:30 PM' },
        { time: '05:30 PM', display: '05:30 PM - 05:45 PM' },
        { time: '05:45 PM', display: '05:45 PM - 06:00 PM' },
      ],
    },
    // Monday
    1: {
      morning: [
        { time: '09:00 AM', display: '09:00 AM - 09:15 AM' },
        { time: '09:15 AM', display: '09:15 AM - 09:30 AM' },
        { time: '09:30 AM', display: '09:30 AM - 09:45 AM' },
        { time: '09:45 AM', display: '09:45 AM - 10:00 AM' },
        { time: '10:00 AM', display: '10:00 AM - 10:15 AM' },
        { time: '10:15 AM', display: '10:15 AM - 10:30 AM' },
        { time: '10:30 AM', display: '10:30 AM - 10:45 AM' },
        { time: '10:45 AM', display: '10:45 AM - 11:00 AM' },
        { time: '11:00 AM', display: '11:00 AM - 11:15 AM' },
        { time: '11:15 AM', display: '11:15 AM - 11:30 AM' },
        { time: '11:30 AM', display: '11:30 AM - 11:45 AM' },
        { time: '11:45 AM', display: '11:45 AM - 12:00 PM' },
      ],
      afternoon: [
        { time: '02:00 PM', display: '02:00 PM - 02:15 PM' },
        { time: '02:15 PM', display: '02:15 PM - 02:30 PM' },
        { time: '02:30 PM', display: '02:30 PM - 02:45 PM' },
        { time: '02:45 PM', display: '02:45 PM - 03:00 PM' },
        { time: '03:00 PM', display: '03:00 PM - 03:15 PM' },
        { time: '03:15 PM', display: '03:15 PM - 03:30 PM' },
        { time: '03:30 PM', display: '03:30 PM - 03:45 PM' },
        { time: '03:45 PM', display: '03:45 PM - 04:00 PM' },
        { time: '04:00 PM', display: '04:00 PM - 04:15 PM' },
        { time: '04:15 PM', display: '04:15 PM - 04:30 PM' },
        { time: '04:30 PM', display: '04:30 PM - 04:45 PM' },
        { time: '04:45 PM', display: '04:45 PM - 05:00 PM' },
        { time: '05:00 PM', display: '05:00 PM - 05:15 PM' },
        { time: '05:15 PM', display: '05:15 PM - 05:30 PM' },
        { time: '05:30 PM', display: '05:30 PM - 05:45 PM' },
        { time: '05:45 PM', display: '05:45 PM - 06:00 PM' },
      ],
    },
    // Tuesday
    2: {
      morning: [
        { time: '09:00 AM', display: '09:00 AM - 09:15 AM' },
        { time: '09:15 AM', display: '09:15 AM - 09:30 AM' },
        { time: '09:30 AM', display: '09:30 AM - 09:45 AM' },
        { time: '09:45 AM', display: '09:45 AM - 10:00 AM' },
        { time: '10:00 AM', display: '10:00 AM - 10:15 AM' },
        { time: '10:15 AM', display: '10:15 AM - 10:30 AM' },
        { time: '10:30 AM', display: '10:30 AM - 10:45 AM' },
        { time: '10:45 AM', display: '10:45 AM - 11:00 AM' },
        { time: '11:00 AM', display: '11:00 AM - 11:15 AM' },
        { time: '11:15 AM', display: '11:15 AM - 11:30 AM' },
        { time: '11:30 AM', display: '11:30 AM - 11:45 AM' },
        { time: '11:45 AM', display: '11:45 AM - 12:00 PM' },
      ],
      afternoon: [
        { time: '02:00 PM', display: '02:00 PM - 02:15 PM' },
        { time: '02:15 PM', display: '02:15 PM - 02:30 PM' },
        { time: '02:30 PM', display: '02:30 PM - 02:45 PM' },
        { time: '02:45 PM', display: '02:45 PM - 03:00 PM' },
        { time: '03:00 PM', display: '03:00 PM - 03:15 PM' },
        { time: '03:15 PM', display: '03:15 PM - 03:30 PM' },
        { time: '03:30 PM', display: '03:30 PM - 03:45 PM' },
        { time: '03:45 PM', display: '03:45 PM - 04:00 PM' },
        { time: '04:00 PM', display: '04:00 PM - 04:15 PM' },
        { time: '04:15 PM', display: '04:15 PM - 04:30 PM' },
        { time: '04:30 PM', display: '04:30 PM - 04:45 PM' },
        { time: '04:45 PM', display: '04:45 PM - 05:00 PM' },
        { time: '05:00 PM', display: '05:00 PM - 05:15 PM' },
        { time: '05:15 PM', display: '05:15 PM - 05:30 PM' },
        { time: '05:30 PM', display: '05:30 PM - 05:45 PM' },
        { time: '05:45 PM', display: '05:45 PM - 06:00 PM' },
      ],
    },
    // Wednesday
    3: {
      morning: [
        { time: '09:00 AM', display: '09:00 AM - 09:15 AM' },
        { time: '09:15 AM', display: '09:15 AM - 09:30 AM' },
        { time: '09:30 AM', display: '09:30 AM - 09:45 AM' },
        { time: '09:45 AM', display: '09:45 AM - 10:00 AM' },
        { time: '10:00 AM', display: '10:00 AM - 10:15 AM' },
        { time: '10:15 AM', display: '10:15 AM - 10:30 AM' },
        { time: '10:30 AM', display: '10:30 AM - 10:45 AM' },
        { time: '10:45 AM', display: '10:45 AM - 11:00 AM' },
        { time: '11:00 AM', display: '11:00 AM - 11:15 AM' },
        { time: '11:15 AM', display: '11:15 AM - 11:30 AM' },
        { time: '11:30 AM', display: '11:30 AM - 11:45 AM' },
        { time: '11:45 AM', display: '11:45 AM - 12:00 PM' },
      ],
      afternoon: [
        { time: '02:00 PM', display: '02:00 PM - 02:15 PM' },
        { time: '02:15 PM', display: '02:15 PM - 02:30 PM' },
        { time: '02:30 PM', display: '02:30 PM - 02:45 PM' },
        { time: '02:45 PM', display: '02:45 PM - 03:00 PM' },
        { time: '03:00 PM', display: '03:00 PM - 03:15 PM' },
        { time: '03:15 PM', display: '03:15 PM - 03:30 PM' },
        { time: '03:30 PM', display: '03:30 PM - 03:45 PM' },
        { time: '03:45 PM', display: '03:45 PM - 04:00 PM' },
        { time: '04:00 PM', display: '04:00 PM - 04:15 PM' },
        { time: '04:15 PM', display: '04:15 PM - 04:30 PM' },
        { time: '04:30 PM', display: '04:30 PM - 04:45 PM' },
        { time: '04:45 PM', display: '04:45 PM - 05:00 PM' },
        { time: '05:00 PM', display: '05:00 PM - 05:15 PM' },
        { time: '05:15 PM', display: '05:15 PM - 05:30 PM' },
        { time: '05:30 PM', display: '05:30 PM - 05:45 PM' },
        { time: '05:45 PM', display: '05:45 PM - 06:00 PM' },
      ],
    },
    // Thursday
    4: {
      morning: [
        { time: '09:00 AM', display: '09:00 AM - 09:15 AM' },
        { time: '09:15 AM', display: '09:15 AM - 09:30 AM' },
        { time: '09:30 AM', display: '09:30 AM - 09:45 AM' },
        { time: '09:45 AM', display: '09:45 AM - 10:00 AM' },
        { time: '10:00 AM', display: '10:00 AM - 10:15 AM' },
        { time: '10:15 AM', display: '10:15 AM - 10:30 AM' },
        { time: '10:30 AM', display: '10:30 AM - 10:45 AM' },
        { time: '10:45 AM', display: '10:45 AM - 11:00 AM' },
        { time: '11:00 AM', display: '11:00 AM - 11:15 AM' },
        { time: '11:15 AM', display: '11:15 AM - 11:30 AM' },
        { time: '11:30 AM', display: '11:30 AM - 11:45 AM' },
        { time: '11:45 AM', display: '11:45 AM - 12:00 PM' },
      ],
      afternoon: [
        { time: '02:00 PM', display: '02:00 PM - 02:15 PM' },
        { time: '02:15 PM', display: '02:15 PM - 02:30 PM' },
        { time: '02:30 PM', display: '02:30 PM - 02:45 PM' },
        { time: '02:45 PM', display: '02:45 PM - 03:00 PM' },
        { time: '03:00 PM', display: '03:00 PM - 03:15 PM' },
        { time: '03:15 PM', display: '03:15 PM - 03:30 PM' },
        { time: '03:30 PM', display: '03:30 PM - 03:45 PM' },
        { time: '03:45 PM', display: '03:45 PM - 04:00 PM' },
        { time: '04:00 PM', display: '04:00 PM - 04:15 PM' },
        { time: '04:15 PM', display: '04:15 PM - 04:30 PM' },
        { time: '04:30 PM', display: '04:30 PM - 04:45 PM' },
        { time: '04:45 PM', display: '04:45 PM - 05:00 PM' },
        { time: '05:00 PM', display: '05:00 PM - 05:15 PM' },
        { time: '05:15 PM', display: '05:15 PM - 05:30 PM' },
        { time: '05:30 PM', display: '05:30 PM - 05:45 PM' },
        { time: '05:45 PM', display: '05:45 PM - 06:00 PM' },
      ],
    },
    // Friday
    5: {
      morning: [
        { time: '09:00 AM', display: '09:00 AM - 09:15 AM' },
        { time: '09:15 AM', display: '09:15 AM - 09:30 AM' },
        { time: '09:30 AM', display: '09:30 AM - 09:45 AM' },
        { time: '09:45 AM', display: '09:45 AM - 10:00 AM' },
        { time: '10:00 AM', display: '10:00 AM - 10:15 AM' },
        { time: '10:15 AM', display: '10:15 AM - 10:30 AM' },
        { time: '10:30 AM', display: '10:30 AM - 10:45 AM' },
        { time: '10:45 AM', display: '10:45 AM - 11:00 AM' },
        { time: '11:00 AM', display: '11:00 AM - 11:15 AM' },
        { time: '11:15 AM', display: '11:15 AM - 11:30 AM' },
        { time: '11:30 AM', display: '11:30 AM - 11:45 AM' },
        { time: '11:45 AM', display: '11:45 AM - 12:00 PM' },
      ],
      afternoon: [
        { time: '02:00 PM', display: '02:00 PM - 02:15 PM' },
        { time: '02:15 PM', display: '02:15 PM - 02:30 PM' },
        { time: '02:30 PM', display: '02:30 PM - 02:45 PM' },
        { time: '02:45 PM', display: '02:45 PM - 03:00 PM' },
        { time: '03:00 PM', display: '03:00 PM - 03:15 PM' },
        { time: '03:15 PM', display: '03:15 PM - 03:30 PM' },
        { time: '03:30 PM', display: '03:30 PM - 03:45 PM' },
        { time: '03:45 PM', display: '03:45 PM - 04:00 PM' },
        { time: '04:00 PM', display: '04:00 PM - 04:15 PM' },
        { time: '04:15 PM', display: '04:15 PM - 04:30 PM' },
        { time: '04:30 PM', display: '04:30 PM - 04:45 PM' },
        { time: '04:45 PM', display: '04:45 PM - 05:00 PM' },
        { time: '05:00 PM', display: '05:00 PM - 05:15 PM' },
        { time: '05:15 PM', display: '05:15 PM - 05:30 PM' },
        { time: '05:30 PM', display: '05:30 PM - 05:45 PM' },
        { time: '05:45 PM', display: '05:45 PM - 06:00 PM' },
      ],
    },
    // Saturday (Closed)
    6: {
      morning: [],
      afternoon: [],
    },
  },
};
