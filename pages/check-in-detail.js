import Header from "../components/header";
import styled from "styled-components";
import LogicalOperator from "../components/logical-operator";
import FrameComponent3 from "../components/frame-component3";
import ProgressIndicatorSet from "../components/progress-indicator-set";
import Namescanbegeneratedaccordingly from "../components/namescanbegeneratedaccordingly";

const Text1 = styled.div`
  position: relative;
  line-height: 24px;
  font-weight: 500;
  @media screen and (max-width: 450px) {
    font-size: var(--h5-regular-size);
  }
`;
const Text2 = styled.div`
  position: relative;
  line-height: 22px;
`;
const Texttext = styled.div`
  overflow: hidden;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: var(--body-regular-size);
  color: var(--character-primary-85);
  font-family: var(--body-regular);
`;
const Texttitle = styled.div`
  height: 34px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  z-index: 1;
`;
const Texttitle1 = styled.div`
  height: 34px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  z-index: 2;
`;
const CheckInDetailChild = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: var(--opacity25);
  z-index: 4;
`;
const LineIcon = styled.img`
  align-self: stretch;
  height: 1px;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
`;
const Divider = styled.div`
  width: 572px;
  height: 0px;
  margin: 0 !important;
  position: absolute;
  bottom: 243px;
  left: calc(50% - 286px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  z-index: 5;
`;
const ProgressIndicatorSetWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 454px;
  min-height: 540px;
  max-width: 100%;
  @media screen and (max-width: 1125px) {
    min-height: auto;
  }
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
`;
const FrameParent = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 11.5px;
  max-width: 100%;
  @media screen and (max-width: 1125px) {
    flex-wrap: wrap;
  }
`;
const CheckInDetailRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xl) 42px var(--padding-181xl);
  box-sizing: border-box;
  gap: 194px;
  letter-spacing: normal;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--black);
  font-family: var(--h5-regular);
  @media screen and (max-width: 750px) {
    gap: 97px 194px;
    padding-left: var(--padding-2xl);
    padding-right: var(--padding-2xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: 48px 194px;
  }
`;

const CheckInDetail = () => {
  return (
    <CheckInDetailRoot>
      <Header
        headerAlignSelf="stretch"
        headerFlex="unset"
        buttonPadding="var(--padding-12xs) 6.7px 0px 0px"
        infoCircleIconPadding="var(--padding-4xs) var(--padding-10xs) 0px 0px"
        aspectRatioKeeperAdditionBackgroundImage="url('/avatar5@3x.png')"
      />
      <Texttitle>
        <Text1>CheckIn Name</Text1>
        <Texttext>
          <Text2>Text line</Text2>
        </Texttext>
      </Texttitle>
      <Texttitle1>
        <Text1>CheckIn Name</Text1>
        <Texttext>
          <Text2>Text line</Text2>
        </Texttext>
      </Texttitle1>
      <CheckInDetailChild />
      <Divider>
        <LineIcon alt="" src="/line.svg" />
      </Divider>
      <LogicalOperator />
      <FrameParent>
        <FrameComponent3 />
        <ProgressIndicatorSetWrapper>
          <ProgressIndicatorSet />
        </ProgressIndicatorSetWrapper>
        <Namescanbegeneratedaccordingly />
      </FrameParent>
    </CheckInDetailRoot>
  );
};

export default CheckInDetail;
