import { BankInformation } from "../../pages/admin/employee-details/bank-information";
import { Education } from "../../pages/admin/employee-details/education";
import { EmergencyContact } from "../../pages/admin/employee-details/emergency-contact";
import { Experience } from "../../pages/admin/employee-details/experience";
import { PersonalInfo } from "../../pages/admin/employee-details/personal-info";

export const TodaysLeavesTabs = [
  { label: "All", value: "ALL" },
  { label: "Short Leave", value: "SHORT_LEAVE" },
  { label: "Half Day Leave", value: "HALF_DAY_LEAVE" },
  { label: "Full Day Leave", value: "FULL_DAY_LEAVE" },
];

export const SocialTabs = [
  { label: "Post", value: "Post" },
  { label: "Announcement", value: "Announcement" },
  { label: "Poll", value: "Poll" },
  { label: "Praise", value: "Praise" },
];

export const AnnouncementTabs = [
  { label: "New Joinee ", value: "NewJoinee" },
  { label: "Birthday ", value: "Birthday" },
  { label: "Work Anniversary ", value: "Anniversary" },
];
export const AboutMeTabs = [
  { label: "Leave ", value: "Leave" },
  { label: "Attendance ", value: "Attendance" },
  { label: "Performance ", value: "Performance" },
];
export const MyLeaveTabs = [
  // { label: "Weekly Pattern ", value: "Weekly" },
  { label: "Yearly Pattern ", value: "Yearly" },
];

export const FinanceTabs = [
  { label: "Summary ", value: "Summary" },
  { label: "My Pay ", value: "My Pay" },
  { label: "Manage Tax ", value: "Manage Tax" },
];

export const MyPayTabs = [
  { label: "My Salary ", value: "My Salary" },
  { label: "Pay Slips ", value: "Pay Slips" },
  { label: "Income Tax ", value: "Income Tax" },
];

export const Roles = [
  { key: "admin", label: "Admin" },
  { key: "manager", label: "Manager" },
  { key: "employee", label: "Employee" },
  { key: "hr", label: "Human Resources" },
];

export const leaveOptions = [
  { label: "Short Leave", value: "SHORT_LEAVE" },
  { label: "Half Day Leave", value: "HALF_DAY_LEAVE" },
  { label: "Full Day Leave", value: "FULL_DAY_LEAVE" },
];

export const durationsOptions = [
  { label: "First Half of Day", value: "FIRST_HALF_OF_DAY" },
  { label: "Second Half of Day", value: "SECOND_HALF_OF_DAY" },
];

export const EmployeeDetailTabs = [
  {
    label: "Personal Information ",
    value: "personal_information",
    tabContent: <PersonalInfo />,
  },
  {
    label: "Emergency Contact ",
    value: "emergency_contact",
    tabContent: <EmergencyContact />,
  },
  {
    label: "Bank Information ",
    value: "bank_information",
    tabContent: <BankInformation />,
  },
  { label: "Education ", value: "education", tabContent: <Education /> },
  { label: "Experience ", value: "experience", tabContent: <Experience /> },
  { label: "Documents ", value: "documents", tabContent: <></> },
  { label: "Projects ", value: "projects", tabContent: <></> },
];
