import { Wrapper } from "./styles";
import Spinner from "../../components/spinner";
import { Link, useParams } from "react-router-dom";
import { useApi } from "../../hooks/use-api";
import Success from "../../components/sucess";
import Error from "../../components/error";
import { useTheme } from "styled-components";
import { useState, useEffect } from "react";
import Card from "../../components/card";
const VerifyRoute = () => {
  const { token } = useParams();
  const { putRequest } = useApi();
  const theme = useTheme();
  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const resp = await putRequest(`auth/verify/${token}`);
        setStatus(resp?.data?.isVerified ? "success" : "error");
        setMessage(resp?.data?.message || "");
      } catch (error) {
        const errMsg = error?.response?.data?.error || "An error occurred";
        setStatus("error");
        setMessage(errMsg);
      }
    };
    verifyToken();
  }, [token]);

  if (status === "success") {
    return (
      <Wrapper>
        <Card maxWidth={theme.sizes.md}>
          <Success>
            Successfully verified! You can now{" "}
            <Link to="/login" style={{ color: theme.colors.primary }}>
              login
            </Link>
            .
          </Success>
        </Card>
      </Wrapper>
    );
  }

  if (status === "error") {
    return (
      <Wrapper>
        <Card maxWidth={theme.sizes.md}>
          <Error>{message || "Verification failed. Please try again."}</Error>
        </Card>
      </Wrapper>
    );
  }

  return (
    <div>
      <Wrapper>
        <Spinner></Spinner>
      </Wrapper>
    </div>
  );
};

export default VerifyRoute;
