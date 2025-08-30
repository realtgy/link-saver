import logoSrc from "./logo.png";
import { Image } from "./styles";

const Logo = ({ maxWidth = "40px" }) => {
  return <Image src={logoSrc} alt="Logo" $maxWidth={maxWidth} />;
};

export default Logo;
