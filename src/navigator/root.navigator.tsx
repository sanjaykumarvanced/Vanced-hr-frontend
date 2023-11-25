import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { ROUTES } from "../components/consts/routes.consts";
import { LoginForm } from "../components/forms/auth/login-with-email";
import { LoginPage } from "../components/forms/auth/login-page";
import { RegisterForm } from "../components/forms/auth/register-page";
import { AuthLayout } from "../components/layouts/auth.layout";

import { AboutMePage } from "../pages/about-me";
import { InboxPage } from "../pages/inbox";
import { MyTeamPage } from "../pages/my-team";
import { MyFinancesPage } from "../pages/my-finances";
import { Projects } from "../pages/projects";
import { useSelector } from "react-redux";
import { selectAuthMe, selectIsLoggedIn } from "../components/selectors";
import { useEffect } from "react";
import UnauthLayout from "../components/layouts/unauth.layouts";
import { QuickAccessPage } from "../pages/quick-access/quick-access-page";
import { ApprovedLeaves } from "../table/approved-leaves";
import { AdminDashboard } from "../pages/admin-dashboard/admin-dashboard";
import { useGetEmployeeListQuery } from "../components/apis/employeeListApi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const RootNavigator = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const authMe = useSelector(selectAuthMe);
  const navigate = useNavigate();
  const userInfo = useSelector((state: any) => state.authentication.user);
  const userRole = isLoggedIn && authMe && userInfo[0].role === "employee";
  const loggedUserId = isLoggedIn && authMe && userInfo[0].id;
  const { data } = useGetEmployeeListQuery(undefined, { skip: userRole });
  const employee: any =
    data && data?.find((elm: any) => elm._id === loggedUserId);
  const loggedRole =
    isLoggedIn && (authMe && employee ? employee.role : userInfo[0].role);
  useEffect(() => {
    if (isLoggedIn && !authMe) {
      navigate(ROUTES.HOME, { replace: true });
    }
  }, [isLoggedIn, authMe, navigate]);
  return (
    <>
      <Routes>
        <Route element={isLoggedIn ? <AuthLayout /> : <UnauthLayout />}>
          <Route
            path={ROUTES.HOME}
            element={
              isLoggedIn &&
              (authMe && loggedRole === "employee" ? (
                <QuickAccessPage />
              ) : (
                <AdminDashboard />
              ))
            }
          />

          <Route path={ROUTES.ME} element={<AboutMePage />} />
          <Route path={ROUTES.INBOX} element={<InboxPage />} />
          <Route path={ROUTES.MY_TEAM} element={<MyTeamPage />} />
          <Route path={ROUTES.MY_FINANCES} element={<MyFinancesPage />} />
          <Route path={ROUTES.PROJECTS} element={<Projects />} />
          <Route path={ROUTES.PROFILE} element={<></>} />
          <Route path={ROUTES.ACCOUNTS_SETTING} element={<></>} />
          <Route path={ROUTES.REQUESTED_LEAVES} element={<ApprovedLeaves />} />

          <Route path={ROUTES.ALL_EMPLOYEE} element={<></>} />
          <Route path={ROUTES.ATTACHMENT} element={<></>} />
          <Route path={ROUTES.LEAVES} element={<></>} />
          <Route path={ROUTES.LEAVES_SETTING} element={<></>} />
          <Route path={ROUTES.PERFORMANCE} element={<></>} />
          <Route path={ROUTES.TEAM_LEADERS} element={<></>} />
          <Route path={ROUTES.SHIFT_SCHEDULE} element={<></>} />
          <Route path={ROUTES.Clients} element={<></>} />
          <Route path={ROUTES.EMPLOYEE_SALARY} element={<></>} />
          <Route path={ROUTES.NEW_EMPLOYEES} element={<></>} />
          <Route path={ROUTES.PROMOTION} element={<></>} />
          <Route path={ROUTES.RESIGNATION} element={<></>} />
          <Route path={ROUTES.TERMINATION} element={<></>} />
          <Route
            path={ROUTES.LOGIN_PAGE}
            element={
              !isLoggedIn ? (
                <LoginPage />
              ) : (
                <Navigate to={ROUTES.HOME} replace={true} />
              )
            }
          >
            <Route path={ROUTES.LOGIN} element={<LoginForm />} />
            <Route path={ROUTES.REGISTER} element={<RegisterForm />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer position="bottom-right" theme="colored" />
    </>
  );
};
