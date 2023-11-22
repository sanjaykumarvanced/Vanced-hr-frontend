import { ReactNode } from "react";
import {
  OrgIconSvg,
  TeamIconSvg,
  FinanceIconSvg,
  HomeIconSvg,
  InboxIconSvg,
  UserIcon,
  ProfileTabIcon,
  AccountSettingsTabIcon,
} from "../svgs";
import { ROUTES } from "../components/consts/routes.consts";

export interface IMenuList {
  icon?: ReactNode;
  title?: string;
  route?: string;
}

export const sidebarMenuConfig = [
  {
    icon: <HomeIconSvg />,
    title: "Home",
    route: ROUTES.HOME,
  },
  {
    icon: <UserIcon />,
    title: "Me",
    route: ROUTES.ME,
  },
  {
    icon: <InboxIconSvg />,
    title: "Inbox",
    route: ROUTES.INBOX,
  },
  {
    icon: <TeamIconSvg />,
    title: "My Team",
    route: ROUTES.MY_TEAM,
  },
  {
    icon: <FinanceIconSvg />,
    title: "My Finances",
    route: ROUTES.MY_FINANCES,
  },
  {
    icon: <OrgIconSvg />,
    title: "Org",
    route: ROUTES.ORG,
  },
  {
    icon: <ProfileTabIcon />,
    title: "Profile",
    route: ROUTES.PROFILE,
  },
  {
    icon: <AccountSettingsTabIcon />,
    title: "Account Settings",
    route: ROUTES.ACCOUNTS_SETTING,
  },
  {
    icon: <AccountSettingsTabIcon />,
    title: "Approved Leaves",
    route: ROUTES.APPROVED_LEAVES,
  },
];
export const sidebarMenuButtonConfig = [
  {
    icon: <HomeIconSvg />,
    title: "",
    route: ROUTES.HOME,
  },
  {
    icon: <UserIcon />,
    title: "",
    route: ROUTES.ME,
  },
  {
    icon: <InboxIconSvg />,
    title: "",
    route: ROUTES.INBOX,
  },
  {
    icon: <TeamIconSvg />,
    title: "",
    route: ROUTES.MY_TEAM,
  },
  {
    icon: <FinanceIconSvg />,
    title: "",
    route: ROUTES.MY_FINANCES,
  },
  {
    icon: <OrgIconSvg />,
    title: "",
    route: ROUTES.ORG,
  },

  {
    icon: <ProfileTabIcon />,
    title: "",
    route: ROUTES.PROFILE,
  },
  {
    icon: <AccountSettingsTabIcon />,
    title: "",
    route: ROUTES.ACCOUNTS_SETTING,
  },

  {
    icon: <AccountSettingsTabIcon />,
    title: "",
    route: ROUTES.APPROVED_LEAVES,
  },
];
export const sidebarAdminMenuConfig = [
  {
    icon: <HomeIconSvg />,
    title: "Admin Dashboard",
    route: ROUTES.HOME,
  },
  {
    icon: <UserIcon />,
    title: "All Employee",
    route: ROUTES.ALL_EMPLOYEE,
  },
  {
    icon: <InboxIconSvg />,
    title: "Attendance",
    route: ROUTES.ATTACHMENT,
  },
  {
    icon: <TeamIconSvg />,
    title: "Leaves",
    route: ROUTES.LEAVES,
  },
  {
    icon: <FinanceIconSvg />,
    title: "Leaves Setting",
    route: ROUTES.LEAVES_SETTING,
  },
  {
    icon: <OrgIconSvg />,
    title: "Performance",
    route: ROUTES.PERFORMANCE,
  },
  {
    icon: <ProfileTabIcon />,
    title: "Team Leaders (TL)",
    route: ROUTES.TEAM_LEADERS,
  },
  {
    icon: <AccountSettingsTabIcon />,
    title: "Shift & Schedule",
    route: ROUTES.SHIFT_SCHEDULE,
  },

  {
    icon: <AccountSettingsTabIcon />,
    title: "Clients",
    route: ROUTES.Clients,
  },
  {
    icon: <FinanceIconSvg />,
    title: "Projects",
    route: ROUTES.PROJECTS,
  },
  {
    icon: <OrgIconSvg />,
    title: "Employee Salary",
    route: ROUTES.EMPLOYEE_SALARY,
  },
  {
    icon: <ProfileTabIcon />,
    title: "New Employees",
    route: ROUTES.NEW_EMPLOYEES,
  },
  {
    icon: <AccountSettingsTabIcon />,
    title: "Promotion",
    route: ROUTES.PROMOTION,
  },
  {
    icon: <AccountSettingsTabIcon />,
    title: "Resignation",
    route: ROUTES.RESIGNATION,
  },
  {
    icon: <AccountSettingsTabIcon />,
    title: "Termination",
    route: ROUTES.TERMINATION,
  },  
  {
    icon: <ProfileTabIcon />,
    title: "Profile",
    route: ROUTES.PROFILE,
  },
  {
    icon: <AccountSettingsTabIcon />,
    title: "Account Settings",
    route: ROUTES.ACCOUNTS_SETTING,
  },
];
