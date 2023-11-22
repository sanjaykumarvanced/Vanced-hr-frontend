import { useFormik } from "formik";

import * as Yup from "yup";
import { useAuthLoginMutation } from "../../../store/api/auth";
import { authenticationSlice } from "../../../store/slices/auth.slice";
import { useDispatch } from "react-redux";

export const useLoginWithEmailHook = ({ next }: { next: () => void }) => {
  const [mutate] = useAuthLoginMutation();
  const rememberMe = window.localStorage.getItem("email") || "";
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
            admin: [
              {
                id: response.user._id,
                firstName: response.user.firstName,
                lastName: response.user.lastName,
                role: response.user.role,
              },
            ],
          })
        );
        console.log(response);
      }
      next();
    },
  });

  return formManager;
};
