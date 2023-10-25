import { useFormik } from "formik";

import * as Yup from "yup";
import { useAuthLoginMutation } from "../../../store/api/auth";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../consts/routes.consts";
import { authenticationSlice } from "../../../store/slices/auth.slice";
import { useDispatch } from "react-redux";

export const useLoginWithEmailHook = ({ next }: { next: () => void }) => {
  // debugger;
  const [mutate] = useAuthLoginMutation();
  const rememberMe = window.localStorage.getItem("email") || "";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formManager = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: !!rememberMe,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email")
        .required("Email field is required"),
      password: Yup.string().required("Password field is required"),
    }),
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: async (values) => {
      if (values.remember) {
        window.localStorage.setItem("email", values.email || "");
      } else {
        window.localStorage.removeItem("email");
      }

      const response = await mutate(values)
        .unwrap()
        .catch(() => {
          formManager.setStatus({
            incorrectCredentials: "Incorrect email or password",
          });
        });
      if (response) {
        dispatch(
          authenticationSlice.actions.setCredentials({
            accessToken: response.token,
            user: values.email,
            id: response.user._id,
          })
        );
        console.log("Login successful:", response);
      }
      next();
    },
  });

  return formManager;
};
