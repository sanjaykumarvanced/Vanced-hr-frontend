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
    permissions: ["employee", "manager", "hr", "teamLeader"],
  },
  {
    icon: <UserIcon />,
    title: "Me",
    route: ROUTES.ME,
    permissions: ["employee", "manager", "hr", "teamLeader"],
  },
  {
    icon: <InboxIconSvg />,
    title: "Inbox",
    route: ROUTES.INBOX,
    permissions: ["employee", "manager", "hr", "teamLeader"],
  },
  {
    icon: <TeamIconSvg />,
    title: "My Team",
    route: ROUTES.MY_TEAM,
    permissions: ["employee", "manager", "hr", "teamLeader"],
  },
  {
    icon: <FinanceIconSvg />,
    title: "My Finances",
    route: ROUTES.MY_FINANCES,
    permissions: ["employee", "manager", "hr", "teamLeader"],
  },
  {
    icon: <OrgIconSvg />,
    title: "Org",
    route: ROUTES.ORG,
    permissions: ["employee", "manager", "hr", "teamLeader"],
  },
  {
    icon: <ProfileTabIcon />,
    title: "Profile",
    route: ROUTES.PROFILE,
    permissions: ["employee", "manager", "hr", "teamLeader"],
  },
  {
    icon: <AccountSettingsTabIcon />,
    title: "Account Settings",
    route: ROUTES.ACCOUNTS_SETTING,
    permissions: ["employee", "manager", "hr", "teamLeader"],
  },
  {
    icon: <AccountSettingsTabIcon />,
    title: "Approved Leaves",
    route: ROUTES.APPROVED_LEAVES,
    permissions: ["manager", "hr", "teamLeader"],
  },
  {
    icon: <HomeIconSvg />,
    title: "Admin Dashboard",
    route: ROUTES.HOME,
    permissions: ["admin"],
  },
  {
    icon: <UserIcon />,
    title: "All Employee",
    route: ROUTES.ALL_EMPLOYEE,
    permissions: ["admin"],
  },
  {
    icon: <InboxIconSvg />,
    title: "Attendance",
    route: ROUTES.ATTACHMENT,
    permissions: ["admin"],
  },
  {
    icon: <TeamIconSvg />,
    title: "Leaves",
    route: ROUTES.LEAVES,
    permissions: ["admin"],
  },
  {
    icon: <FinanceIconSvg />,
    title: "Leaves Setting",
    route: ROUTES.LEAVES_SETTING,
    permissions: ["admin"],
  },
  {
    icon: <OrgIconSvg />,
    title: "Performance",
    route: ROUTES.PERFORMANCE,
    permissions: ["admin"],
  },
  {
    icon: <ProfileTabIcon />,
    title: "Team Leaders (TL)",
    route: ROUTES.TEAM_LEADERS,
    permissions: ["admin"],
  },
  {
    icon: <AccountSettingsTabIcon />,
    title: "Shift & Schedule",
    route: ROUTES.SHIFT_SCHEDULE,
    permissions: ["admin"],
  },

  {
    icon: <AccountSettingsTabIcon />,
    title: "Clients",
    route: ROUTES.Clients,
    permissions: ["admin"],
  },
  {
    icon: <FinanceIconSvg />,
    title: "Projects",
    route: ROUTES.PROJECTS,
    permissions: ["admin"],
  },
  {
    icon: <OrgIconSvg />,
    title: "Employee Salary",
    route: ROUTES.EMPLOYEE_SALARY,
    permissions: ["admin"],
  },
  {
    icon: <ProfileTabIcon />,
    title: "New Employees",
    route: ROUTES.NEW_EMPLOYEES,
    permissions: ["admin"],
  },
  {
    icon: <AccountSettingsTabIcon />,
    title: "Promotion",
    route: ROUTES.PROMOTION,
    permissions: ["admin"],
  },
  {
    icon: <AccountSettingsTabIcon />,
    title: "Resignation",
    route: ROUTES.RESIGNATION,
    permissions: ["admin"],
  },
  {
    icon: <AccountSettingsTabIcon />,
    title: "Termination",
    route: ROUTES.TERMINATION,
    permissions: ["admin"],
  },
  {
    icon: <ProfileTabIcon />,
    title: "Profile",
    route: ROUTES.PROFILE,
    permissions: ["admin"],
  },
  {
    icon: <AccountSettingsTabIcon />,
    title: "Account Settings",
    route: ROUTES.ACCOUNTS_SETTING,
    permissions: ["admin"],
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
