import { useTheme } from "styled-components";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import Button from "../../components/button";
import Card from "../../components/card";
import Input from "../../components/input";
import Logo from "../../components/logo";
import Error from "../../components/error";

import { Wrapper, Content, SecondaryAction } from "./styles";
import { LogoWrapper, Title } from "./styles";
import { useApi } from "../../hooks/use-api";

import { useAppContext } from "../../hooks/useContext";
import { actions } from "../../constants/actions";
import { toast } from "react-toastify";
const LoginRoute = () => {
  const theme = useTheme();
  const [error, setError] = useState(false);
  const { loading, postRequest } = useApi();
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useAppContext();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      setError(false);
      try {
        const resp = await postRequest("auth/login", { ...values });
        if (resp?.data) {
          const { user, token } = resp.data;
          toast.success("Login successful!");
          dispatch({
            type: actions.UPDATE_USER,
            payload: { details: user, token },
          });
          navigate("/");
        } else {
          setError("An error occurred");
        }
      } catch (error) {
        console.log("login error ==>", error);
        const errMsg = error?.response?.data?.error ?? "An error occurred";
        setError(errMsg);
      }
    },
  });

  return (
    <Wrapper>
      <Card maxWidth={theme.sizes.md}>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Title>Login</Title>
        {error && <Error>{error}</Error>}
        <form onSubmit={formik.handleSubmit}>
          <Content>
            <Input
              name="email"
              type="email"
              id="email"
              label="Email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && formik.errors.email}
            />
            <Input
              name="password"
              type="password"
              id="password"
              label="Password"
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && formik.errors.password}
            />
            <Button type="submit" isLoading={loading}>
              Login
            </Button>
          </Content>
        </form>
      </Card>

      <SecondaryAction to="/register">
        Don&apos;t have an account? Register now.
      </SecondaryAction>
    </Wrapper>
  );
};

export default LoginRoute;
