import Header from "./header";
import styled from "styled-components";

const HeaderWrapperRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-9xs) 0px var(--padding-12xs);
  box-sizing: border-box;
  max-width: 100%;
`;

const FrameComponent4 = () => {
  return (
    <HeaderWrapperRoot>
      <Header
        headerAlignSelf="unset"
        headerFlex="1"
        buttonPadding="var(--padding-12xs) var(--padding-6xs) 0px 0px"
        infoCircleIconPadding="var(--padding-4xs) var(--padding-10xs-8) 0px 0px"
        aspectRatioKeeperAdditionBackgroundImage="url('/avatar@3x.png')"
      />
    </HeaderWrapperRoot>
  );
};

export default FrameComponent4;
