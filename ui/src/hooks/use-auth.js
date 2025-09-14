import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "./use-api";
import { useAppContext } from "./useContext";

export const useAuth = ({ onUnauth = "/login" } = {}) => {
  //   const { getRequest } = useApi();
  //   const { state, dispatch } = useAppContext();
  //   const navigate = useNavigate();
  //   const [checking, setChecking] = useState(true);
  //   useEffect(() => {
  //     const checkAuth = async () => {
  //       if (!state.user?.token) {
  //         setChecking(false);
  //         navigate(onUnauth);
  //         return;
  //       }
  //       try {
  //         const resp = await getRequest("auth/me");
  //         if (resp?.data) {
  //           const { user } = resp.data;
  //           dispatch({
  //             type: "UPDATE_USER",
  //             payload: { details: user, token: state.user.token },
  //           });
  //           setChecking(false);
  //         } else {
  //           setChecking(false);
  //           navigate(onUnauth);
  //         }
  //       } catch (error) {
  //         console.error("Error checking auth:", error);
  //         setChecking(false);
  //         navigate(onUnauth);
  //       }
  //     };
  //     checkAuth();
  //   }, []); // eslint-disable-line react-hooks/exhaustive-deps
};
