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

const RegisterRoute = () => {
  const theme = useTheme();
  const [error, setError] = useState(false);
  const { loading, postRequest } = useApi();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      setError(false);
      try {
        const res = await postRequest("/auth/register", { ...values });
        console.log("register data ==>", res);
        if (res?.data) {
          navigate("/login");
        } else {
          setError("An error occurred");
        }
      } catch (error) {
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
        <Title>Create new account</Title>
        {error && <Error>{error}</Error>}
        <form onSubmit={formik.handleSubmit}>
          <Content>
            <Input
              name="name"
              id="name"
              label="Name"
              placeholder="Enter your name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && formik.errors.name}
            />
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
              Create account
            </Button>
          </Content>
        </form>
      </Card>

      <SecondaryAction to="/login">
        Already have an account? Login now.
      </SecondaryAction>
    </Wrapper>
  );
};

export default RegisterRoute;
