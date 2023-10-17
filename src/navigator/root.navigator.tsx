import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { ROUTES } from '../components/consts/routes.consts';
import { LoginForm } from '../components/forms/auth/login-with-email';
import { LoginPage } from '../components/forms/auth/login-page';
import { RegisterForm } from '../components/forms/auth/register-page';
import { DashboardPage } from '../pages/dashboard/dashboard-page';
import { AuthLayout } from '../components/layouts/auth.layout';

import { AboutMePage } from '../pages/about-me';
import { InboxPage } from '../pages/inbox';
import { MyTeamPage } from '../pages/my-team';
import { MyFinancesPage } from '../pages/my-finances';
import { OrgPage } from '../pages/Org';
import { useSelector } from 'react-redux';
import { selectAuthMe, selectIsLoggedIn } from '../components/selectors';
import { useState, useEffect } from 'react';
import UnauthLayout from '../components/layouts/unauth.layouts';

export const RootNavigator = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const authMe = useSelector(selectAuthMe);
  const navigate = useNavigate();
  console.log(isLoggedIn, 'isLoggedIn', authMe, 'authMe');
  useEffect(() => {
    if (isLoggedIn && !authMe) {
      navigate(ROUTES.HOME, { replace: true });
    }
  }, [isLoggedIn, authMe, navigate]);
  return (
    <>
      <Routes>
        <Route element={isLoggedIn ? <AuthLayout /> : <UnauthLayout />}>
          <Route path={ROUTES.HOME} element={<DashboardPage />} />
          <Route path={ROUTES.ME} element={<AboutMePage />} />
          <Route path={ROUTES.INBOX} element={<InboxPage />} />
          <Route path={ROUTES.MY_TEAM} element={<MyTeamPage />} />
          <Route path={ROUTES.MY_FINANCES} element={<MyFinancesPage />} />
          <Route path={ROUTES.ORG} element={<OrgPage />} />
          <Route
            path={ROUTES.LOGIN_PAGE}
            element={!isLoggedIn ? <LoginPage /> : <Navigate to={ROUTES.HOME} replace={true} />}
          >
            <Route path={ROUTES.LOGIN} element={<LoginForm />} />
            <Route path={ROUTES.REGISTER} element={<RegisterForm />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
