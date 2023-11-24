
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../selectors";

export const IsLoggedRole = (value:any) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userInfo = useSelector((state: any) => state.authentication.user);
  const isUserRole = isLoggedIn && (userInfo[0].role === value);
  return isUserRole
};

// Change string in camel case  format
export const toCamelCaseFormat = (value:any) => {
    return  value.toLowerCase().split('_').map((word:any, index:any) => index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  }
