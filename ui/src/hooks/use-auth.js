import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "./use-api";
import { useAppContext } from "./useContext";
import { actions } from "../constants/actions";
export const useAuth = ({ onUnauth = false, onAuth = false } = {}) => {
  const { getRequest } = useApi();
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);
  const userDetails = state.user?.details;
  useEffect(() => {
    const getUser = async () => {
      try {
        const resp = await getRequest("auth");
        if (resp?.data?.user) {
          dispatch({
            type: actions.UPDATE_USER,
            payload: { details: resp.data.user, token: state.token },
          });
          if (resp?.data?.user?.isVerified === false) {
            navigate("/unverified");
            return;
          }
          if (onAuth) {
            navigate(onAuth);
          }
        } else {
          dispatch({
            type: "UPDATE_USER",
            payload: { details: null, token: null },
          });
          if (onUnauth) {
            navigate(onUnauth);
          }
        }
      } catch (error) {
        console.log("Auth error ==>", error);
        dispatch({
          type: actions.UPDATE_USER,
          payload: { details: null, token: null },
        });
        if (onUnauth) {
          navigate(onUnauth);
        }
      } finally {
        setChecking(false);
      }
    };

    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};
