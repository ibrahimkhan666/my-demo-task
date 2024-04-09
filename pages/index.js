import Header from "../components/header";
import styled from "styled-components";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";

const ContainerIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  left: 14px;
  top: 17px;
  transform: scale(1.287);
`;
const WrapperContainer = styled.div`
  width: 1348px;
  height: 279px;
  position: absolute;
  margin: 0 !important;
  top: 115px;
  left: calc(50% - 674px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
const FrameParent = styled.section`
  align-self: stretch;
  display: grid;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
  grid-template-columns: repeat(4, minmax(235px, 1fr));
  @media screen and (max-width: 1050px) {
    justify-content: center;
    grid-template-columns: repeat(2, minmax(235px, 407px));
  }
  @media screen and (max-width: 725px) {
    gap: 32px 16px;
    grid-template-columns: minmax(235px, 1fr);
  }
`;
const AllCheckinsRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xl) 46px var(--padding-181xl);
  box-sizing: border-box;
  gap: var(--gap-6xl);
  letter-spacing: normal;
  @media screen and (max-width: 725px) {
    padding-left: var(--padding-4xl);
    padding-right: var(--padding-4xl);
    box-sizing: border-box;
  }
`;

const AllCheckins = () => {
  return (
    <AllCheckinsRoot>
      <Header />
      <WrapperContainer>
        <ContainerIcon alt="" src="/container@2x.png" />
      </WrapperContainer>
      <FrameComponent1 />
      <FrameParent>
        <FrameComponent />
        <FrameComponent
          propBackgroundImage="url('/image1@3x.png')"
          propBackgroundImage1="url('/avatar2@3x.png')"
        />
        <FrameComponent
          propBackgroundImage="url('/image2@3x.png')"
          propBackgroundImage1="url('/avatar3@3x.png')"
        />
        <FrameComponent
          propBackgroundImage="url('/image3@3x.png')"
          propBackgroundImage1="url('/avatar4@3x.png')"
        />
      </FrameParent>
    </AllCheckinsRoot>
  );
};

export default AllCheckins;
