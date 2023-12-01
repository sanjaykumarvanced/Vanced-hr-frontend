import {
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
} from "date-fns";

const today = new Date();
const thisWeekStart = startOfWeek(today);
const thisWeekEnd = endOfWeek(today);
const thisMonthStart = startOfMonth(today);
const thisMonthEnd = endOfMonth(today);
const thisYearStart = startOfYear(today);
const thisYearEnd = endOfYear(today);

export const selectRange = [
  {
    label: "Today",
    value: JSON.stringify({ startDate: today, endDate: today }),
  },
  {
    label: "Week",
    value: JSON.stringify({ startDate: thisWeekStart, endDate: thisWeekEnd }),
  },
  {
    label: "Month",
    value: JSON.stringify({ startDate: thisMonthStart, endDate: thisMonthEnd }),
  },
  {
    label: "Year",
    value: JSON.stringify({ startDate: thisYearStart, endDate: thisYearEnd }),
  },
];
