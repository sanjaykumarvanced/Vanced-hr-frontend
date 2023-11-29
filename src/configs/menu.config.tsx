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
    isActive: true
  },
  {
    icon: <UserIcon />,
    title: "Me",
    route: ROUTES.ME,
    permissions: ["employee", "manager", "hr", "teamLeader"],
    isActive: true
  },
  {
    icon: <AccountSettingsTabIcon />,
    title: "Requested Leaves",
    route: ROUTES.REQUESTED_LEAVES,
    permissions: ["manager", "hr", "teamLeader"],
    isActive: true
  },
  {
    icon: <TeamIconSvg />,
    title: "My Team",
    route: ROUTES.MY_TEAM,
    permissions: ["employee", "manager", "hr", "teamLeader"],
    isActive: true
  },
  {
    icon: <HomeIconSvg />,
    title: "Admin Dashboard",
    route: ROUTES.HOME,
    permissions: ["admin"],
    isActive: true
  },
  {
    icon: <UserIcon />,
    title: "All Employee",
    route: ROUTES.ALL_EMPLOYEE,
    permissions: ["admin"],
    isActive: true
  },
  {
    icon: <TeamIconSvg />,
    title: "Leaves",
    route: ROUTES.LEAVES,
    permissions: ["admin"],
    isActive: true
  },
  {
    icon: <InboxIconSvg />,
    title: "Attendance",
    route: ROUTES.ATTACHMENT,
    permissions: ["admin"],
    isActive: true
  },
  {
    icon: <FinanceIconSvg />,
    title: "Leaves Setting",
    route: ROUTES.LEAVES_SETTING,
    permissions: ["admin"],
    isActive: false
  },
  {
    icon: <OrgIconSvg />,
    title: "Performance",
    route: ROUTES.PERFORMANCE,
    permissions: ["admin"],
    isActive: true
  },
  {
    icon: <ProfileTabIcon />,
    title: "Team Leaders (TL)",
    route: ROUTES.TEAM_LEADERS,
    permissions: ["admin"],
    isActive: true
  },
  {
    icon: <OrgIconSvg />,
    title: "Projects",
    route: ROUTES.PROJECTS,
    permissions: ["employee", "admin", "teamLeader"],
    isActive: true
  },
  {
    icon: <AccountSettingsTabIcon />,
    title: "Clients",
    route: ROUTES.Clients,
    permissions: ["admin"],
    isActive: true
  },
  {
    icon: <OrgIconSvg />,
    title: "Employee Salary",
    route: ROUTES.EMPLOYEE_SALARY,
    permissions: ["admin"],
    isActive: false
  },
  {
    icon: <ProfileTabIcon />,
    title: "New Employees",
    route: ROUTES.NEW_EMPLOYEES,
    permissions: ["admin"],
    isActive: true
  },
  {
    icon: <AccountSettingsTabIcon />,
    title: "Shift & Schedule",
    route: ROUTES.SHIFT_SCHEDULE,
    permissions: ["admin"],
    isActive: false
  },
  {
    icon: <AccountSettingsTabIcon />,
    title: "Promotion",
    route: ROUTES.PROMOTION,
    permissions: ["admin"],
    isActive: false
  },
  {
    icon: <AccountSettingsTabIcon />,
    title: "Resignation",
    route: ROUTES.RESIGNATION,
    permissions: ["admin"],
    isActive: false
  },
  {
    icon: <AccountSettingsTabIcon />,
    title: "Termination",
    route: ROUTES.TERMINATION,
    permissions: ["admin"],
    isActive: false
  },
  {
    icon: <ProfileTabIcon />,
    title: "Profile",
    route: ROUTES.PROFILE,
    permissions: ["admin"],
    isActive: true
  },
  {
    icon: <AccountSettingsTabIcon />,
    title: "Account Settings",
    route: ROUTES.ACCOUNTS_SETTING,
    permissions: ["admin"],
    isActive: true
  },
  {
    icon: <FinanceIconSvg />,
    title: "My Finances",
    route: ROUTES.MY_FINANCES,
    permissions: ["employee", "manager", "hr", "teamLeader"],
    isActive: true
  },
  {
    icon: <ProfileTabIcon />,
    title: "Profile",
    route: ROUTES.PROFILE,
    permissions: ["employee", "manager", "hr", "teamLeader"],
    isActive: true
  },
  {
    icon: <AccountSettingsTabIcon />,
    title: "Account Settings",
    route: ROUTES.ACCOUNTS_SETTING,
    permissions: ["employee", "manager", "hr", "teamLeader"],
    isActive: true
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
    route: ROUTES.PROJECTS,
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
    route: ROUTES.REQUESTED_LEAVES,
  },
];
