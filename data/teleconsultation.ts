export interface TimeSlot {
  time: string;
  display: string;
}

export interface DaySchedule {
  morning: TimeSlot[];
  afternoon: TimeSlot[];
  evening?: TimeSlot[];
}

export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 = Sunday, 1 = Monday, etc.

// Time slot schedule for each day of the week
export const SCHEDULE_BY_DAY: Record<DayOfWeek, DaySchedule> = {
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
};

/**
 * Get available time slots for a specific day of the week
 * @param dayOfWeek - 0 (Sunday) to 6 (Saturday)
 * @returns Array of TimeSlot objects organized by shift
 */
export function getTimeSlotsByDay(dayOfWeek: DayOfWeek) {
  const schedule = SCHEDULE_BY_DAY[dayOfWeek];
  if (!schedule) {
    return { morning: [], afternoon: [], evening: [] };
  }
  return schedule;
}

/**
 * Get all available time slots flattened for a specific day
 * @param dayOfWeek - 0 (Sunday) to 6 (Saturday)
 * @returns Flattened array of TimeSlot objects
 */
export function getAllTimeSlotsByDay(dayOfWeek: DayOfWeek): TimeSlot[] {
  const schedule = getTimeSlotsByDay(dayOfWeek);
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
