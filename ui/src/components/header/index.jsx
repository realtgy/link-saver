import { Content, Button, Wrapper } from "./styles";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { actions } from "../../constants/actions";
import { localStorageKeys } from "../../constants/local-storage.js";
import { useAppContext } from "../../hooks/useContext";
import Logo from "../logo";

const Header = () => {
  const { dispatch } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(localStorageKeys.AUTH_TOKEN);
    dispatch({
      type: actions.UPDATE_USER,
      payload: { details: null, token: null },
    });
    toast.success("You are now logged out.");
    navigate("/login");
  };

  return (
    <Wrapper>
      <Content>
        <Logo />
        <Button onClick={handleLogout}>Logout</Button>
      </Content>
    </Wrapper>
  );
};

export default Header;
