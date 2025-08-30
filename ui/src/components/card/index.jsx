import { Wrapper } from "./styles";

const Card = ({
  children,
  maxWidth = false,
  noPaddig = false,
  fullHeight = false,
}) => {
  return (
    <Wrapper $maxWidth={maxWidth} $noPaddig={noPaddig} $fullHeight={fullHeight}>
      {children}
    </Wrapper>
  );
};

export default Card;
