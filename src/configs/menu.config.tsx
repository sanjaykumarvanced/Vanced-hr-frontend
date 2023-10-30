import { ReactNode } from 'react';
import {
  OrgIconSvg,
  TeamIconSvg,

  FinanceIconSvg,
  HomeIconSvg,
  InboxIconSvg,
  UserIcon,
} from '../svgs';
import { ROUTES } from '../components/consts/routes.consts';


export interface IMenuList {
  icon?: ReactNode;
  title?: string;
  route?: string;
}

export const sidebarMenuConfig = [
  {
    icon: <HomeIconSvg />,
    title: 'Home',
    route: ROUTES.HOME,
  },
  {
    icon: <UserIcon />,
    title: 'Me',
    route: ROUTES.ME,
  },
  {
    icon: <InboxIconSvg />,
    title: 'Inbox',
    route: ROUTES.INBOX,
  },
  {
    icon: <TeamIconSvg />,
    title: 'My Team',
    route: ROUTES.MY_TEAM,
  },
  {
    icon: <FinanceIconSvg />,
    title: 'My Finances',
    route: ROUTES.MY_FINANCES,
  },
  {
    icon: <OrgIconSvg />,
    title: 'Org',
    route: ROUTES.ORG,
  }
];
export const sidebarMenuButtonConfig = [
  {
    icon: <HomeIconSvg />,
    title: '',
    route: ROUTES.HOME,
  },
  {
    icon: <UserIcon />,
    title: '',
    route: ROUTES.ME,
  },
  {
    icon: <InboxIconSvg />,
    title: '',
    route: ROUTES.INBOX,
  },
  {
    icon: <TeamIconSvg />,
    title: '',
    route: ROUTES.MY_TEAM,
  },
  {
    icon: <FinanceIconSvg />,
    title: '',
    route: ROUTES.MY_FINANCES,
  },
  {
    icon: <OrgIconSvg />,
    title: '',
    route: ROUTES.ORG,
  },
];
