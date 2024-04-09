import { useCallback } from "react";
import { Button } from "@mui/material";
import FrameComponent4 from "../components/frame-component4";
import styled from "styled-components";
import FrameComponent3 from "../components/frame-component3";
import FirstBarsChild from "../components/first-bars-child";
import { useRouter } from "next/router";
import Namescanbegeneratedaccordingly from "../components/namescanbegeneratedaccordingly";

const Default = styled.div`
  position: relative;
  line-height: 20px;
  font-weight: 500;
  display: inline-block;
  min-width: 71px;
`;
const CloseIcon = styled.img`
  height: 10px;
  width: 10px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
const Tag = styled.div`
  width: 90px;
  height: 32px;
  border-radius: var(--br-11xl);
  background-color: var(--primary);
  border: 1px solid var(--primary);
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-12xs) var(--padding-5xs);
  gap: var(--gap-10xs);
  white-space: nowrap;
  z-index: 1;
`;
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
  z-index: 2;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--black);
`;
const AddCheckinChild = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
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
  align-self: stretch;
  height: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 7;
`;
const Button1 = styled(Button)`
  align-self: stretch;
  flex: 1;
`;
const WrapperIcon = styled.img`
  width: 14px;
  height: 14px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const IconWrapper = styled.div`
  height: 14px;
  background-color: var(--hitbox);
  overflow: hidden;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Text3 = styled.div`
  width: 29px;
  position: relative;
  font-size: var(--h5-regular-size);
  font-weight: 500;
  font-family: var(--h5-regular);
  color: var(--white);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 29px;
`;
const Button2 = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-6xs-5) var(--padding-mini);
  background-color: var(--primary);
  border-radius: var(--br-11xl);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Namescanbegeneratedaccordingly = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Namescanbegeneratedaccordingly1 = styled.div`
  width: 174px;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-base);
  box-sizing: border-box;
`;
const Footer = styled.div`
  width: 100%;
  height: 64px;
  margin: 0 !important;
  position: absolute;
  right: 0px;
  bottom: 79px;
  left: 0px;
  border-radius: 0px 0px var(--br-xl) var(--br-xl);
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-base);
  box-sizing: border-box;
  gap: 16px;
  max-width: 100%;
  z-index: 6;
`;
const FirstBarsChildParent = styled.div`
  width: 572px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  min-height: 494px;
  max-width: 100%;
`;
const FrameParent = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 75px;
  max-width: 100%;
  @media screen and (max-width: 1350px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 800px) {
    gap: 75px 37px;
  }
  @media screen and (max-width: 450px) {
    gap: 75px 19px;
  }
`;
const AddCheckinRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xl) 44px var(--padding-181xl);
  box-sizing: border-box;
  gap: 240px;
  letter-spacing: normal;
  text-align: center;
  font-size: var(--body-regular-size);
  color: var(--white);
  font-family: var(--h5-regular);
  @media screen and (max-width: 800px) {
    gap: 120px 240px;
    padding-left: var(--padding-3xl);
    padding-right: var(--padding-3xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: 60px 240px;
  }
`;

const AddCheckin = () => {
  const router = useRouter();

  const onButton1Click = useCallback(() => {
    router.push("/check-in-detail");
  }, [router]);

  return (
    <AddCheckinRoot>
      <FrameComponent4 />
      <Tag>
        <Default>Checked In</Default>
        <CloseIcon alt="" src="/close.svg" />
      </Tag>
      <Texttitle>
        <Text1>CheckIn Name</Text1>
        <Texttext>
          <Text2>Text line</Text2>
        </Texttext>
      </Texttitle>
      <AddCheckinChild />
      <FrameParent>
        <FrameComponent3 />
        <FirstBarsChildParent>
          <FirstBarsChild />
          <Footer>
            <Divider>
              <LineIcon alt="" src="/line.svg" />
            </Divider>
            <Namescanbegeneratedaccordingly1>
              <Namescanbegeneratedaccordingly>
                <Button1
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#000",
                    fontSize: "14",
                    background: "#fff",
                    borderRadius: "30px",
                    "&:hover": { background: "#fff" },
                  }}
                >
                  Cancel
                </Button1>
                <Button2 onClick={onButton1Click}>
                  <IconWrapper>
                    <WrapperIcon alt="" src="/wrapper-8@2x.png" />
                  </IconWrapper>
                  <Text3>Add</Text3>
                </Button2>
              </Namescanbegeneratedaccordingly>
            </Namescanbegeneratedaccordingly1>
          </Footer>
        </FirstBarsChildParent>
        <Namescanbegeneratedaccordingly />
      </FrameParent>
    </AddCheckinRoot>
  );
};

export default AddCheckin;
