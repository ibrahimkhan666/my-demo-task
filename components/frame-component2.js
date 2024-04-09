import { Button } from "@mui/material";
import styled from "styled-components";

const Text1 = styled.div`
  align-self: stretch;
  width: 150px;
  position: relative;
  line-height: 24px;
  font-weight: 500;
  display: none;
  align-items: center;
  @media screen and (max-width: 1000px) {
    font-size: var(--font-size-10xl);
    line-height: 19px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-3xl);
    line-height: 14px;
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
`;
const Texttitle = styled.div`
  width: 124px;
  overflow: hidden;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  z-index: 0;
`;
const FrameChild = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: var(--br-xl) 0px 0px var(--br-xl);
  background: linear-gradient(90deg, #000, rgba(0, 0, 0, 0));
  z-index: 2;
`;
const Text3 = styled.h1`
  margin-top: -4px;
  margin: 0;
  height: 42px;
  width: 272px;
  position: relative;
  font-size: inherit;
  font-weight: 600;
  font-family: inherit;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1000px) {
    font-size: var(--font-size-10xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-3xl);
  }
`;
const Texttext1 = styled.div`
  overflow: hidden;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: var(--body-regular-size);
  color: var(--character-primary-85);
  font-family: var(--body-regular);
`;
const Texttitle1 = styled.div`
  height: 34px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  z-index: 3;
`;
const Text4 = styled.div`
  position: relative;
`;
const Texttitle2 = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 3;
  font-size: var(--h5-regular-size);
`;
const TexttitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mid);
  max-width: 100%;
  color: var(--white);
  font-family: var(--h5-regular);
`;
const Button1 = styled(Button)`
  width: 166px;
  height: 54px;
  z-index: 3;
`;
const TexttitleParentRoot = styled.div`align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-40xl) var(--padding-15xl) var(--padding-39xl);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-19xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--h1-semibold-size);
  color: var(--character-primary-85);
  font-family: var(--body-regular);
  @media screen and (max-width: 725px) {
  gap: 19px 38px;
  
  }
  align-self: ${(p) => p.propAlignSelf}
  position: ${(p) => p.propPosition}
  width: ${(p) => p.propWidth}
  margin: ${(p) => p.propMargin}
  top: ${(p) => p.propTop}
  left: ${(p) => p.propLeft}
`;

const FrameComponent2 = ({
  propAlignSelf,
  propPosition,
  propWidth,
  propMargin,
  propTop,
  propLeft,
}) => {
  return (
    <TexttitleParentRoot
      propAlignSelf={propAlignSelf}
      propPosition={propPosition}
      propWidth={propWidth}
      propMargin={propMargin}
      propTop={propTop}
      propLeft={propLeft}
    >
      <Texttitle>
        <Text1>CheckIns</Text1>
        <Texttext>
          <Text2>Text line</Text2>
        </Texttext>
      </Texttitle>
      <FrameChild />
      <TexttitleGroup>
        <Texttitle1>
          <Text3>Hi! 👋 James Doe</Text3>
          <Texttext1>
            <Text2>Text line</Text2>
          </Texttext1>
        </Texttitle1>
        <Texttitle2>
          <Text4>
            Lorem ipsus dolor sit amen, something important to say here
          </Text4>
        </Texttitle2>
      </TexttitleGroup>
      <Button1
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "16",
          background: "#7b5aff",
          borderRadius: "999px",
          "&:hover": { background: "#7b5aff" },
          width: 166,
          height: 54,
        }}
      >
        Add Check In
      </Button1>
    </TexttitleParentRoot>
  );
};

export default FrameComponent2;
