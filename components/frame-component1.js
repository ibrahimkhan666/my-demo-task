import FrameComponent2 from "./frame-component2";
import styled from "styled-components";

const Text1 = styled.h2`
  margin: 0;
  height: 35px;
  position: relative;
  font-size: inherit;
  font-weight: 500;
  font-family: inherit;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1000px) {
    font-size: var(--font-size-5xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
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
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  font-size: var(--h2-medium-size);
  color: var(--black);
  font-family: var(--h5-regular);
`;
const FrameGroup = styled.div`
  width: 588px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-28xl);
  max-width: calc(100% - 44px);
  @media screen and (max-width: 725px) {
    gap: 23px 47px;
  }
`;
const BarsIcon = styled.img`
  width: 24px;
  height: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const BarsWrapper = styled.div`
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-base);
  box-sizing: border-box;
`;
const FrameParentRoot = styled.section`
  width: 1336px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--gap-xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--h1-semibold-size);
  color: var(--character-primary-85);
  font-family: var(--body-regular);
`;

const FrameComponent1 = () => {
  return (
    <FrameParentRoot>
      <FrameGroup>
        <FrameComponent2 />
        <Texttitle>
          <Text1>Added CheckIns</Text1>
          <Texttext>
            <Text2>Text line</Text2>
          </Texttext>
        </Texttitle>
      </FrameGroup>
      <BarsWrapper>
        <BarsIcon loading="lazy" alt="" src="/bars.svg" />
      </BarsWrapper>
    </FrameParentRoot>
  );
};

export default FrameComponent1;
