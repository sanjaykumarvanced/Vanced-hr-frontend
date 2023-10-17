import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../consts/routes.consts";

const UnauthLayout = () => {
  return (
    <>
      <Navigate to={ROUTES.LOGIN_PAGE} replace />
      <Outlet />
    </>
  );
};

export default UnauthLayout;
