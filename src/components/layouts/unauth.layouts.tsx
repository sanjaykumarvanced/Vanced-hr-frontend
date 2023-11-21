import { Navigate} from "react-router-dom";
import { ROUTES } from "../consts/routes.consts";
import { LoginPage } from "../forms/auth/login-page";

const UnauthLayout = () => {
  return (
    <>
      <Navigate to={ROUTES.LOGIN_PAGE} replace />
      <LoginPage />
    </>
  );
};

export default UnauthLayout;
