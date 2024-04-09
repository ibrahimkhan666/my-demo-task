import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import styled from "styled-components";
import FrameComponent2 from "./frame-component2";

const ContainerIcon = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  position: absolute;
  left: 14px;
  top: 17px;
  transform: scale(1.287);
`;
const WrapperContainer = styled.div`
  height: 279px;
  width: 1348px;
  position: absolute;
  margin: 0 !important;
  top: -215px;
  right: -389px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
`;
const ContainerChild = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  border-radius: var(--br-xl);
  background-color: var(--white);
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 !important;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  box-shadow: var(--drop-shadow);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const AspectRatioKeeperAddition = styled.img`
  height: 271px;
  width: 100%;
  margin: 0 !important;
  position: absolute;
  right: 0px;
  bottom: -111px;
  left: 0px;
  max-width: 100%;
  overflow: hidden;
  object-fit: contain;
`;
const Image1 = styled.div`
  align-self: stretch;
  height: 160px;
  border-radius: var(--br-lg);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  background-image: url("/image1@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  z-index: 1;
`;
const Text1 = styled.div`
  position: relative;
  line-height: 24px;
  font-weight: 500;
  white-space: nowrap;
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
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs-5) 0px;
  gap: var(--gap-9xs);
  z-index: 1;
`;
const Text3 = styled.div`
  position: relative;
  display: inline-block;
  min-width: 108px;
`;
const Texttitle1 = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs-5) 0px;
  gap: var(--gap-9xs);
  z-index: 1;
  font-size: var(--h5-regular-size);
  color: var(--muted700);
`;
const TexttitleParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-12xs);
`;
const AspectRatioKeeperAddition1 = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`;
const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: var(--br-81xl);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  background-image: url("/avatar2@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  z-index: 1;
`;
const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px 0px;
`;
const Span = styled.span`
  line-height: 24px;
`;
const Owner = styled.span`
  font-weight: 500;
`;
const JohnDoe = styled.span``;
const Text4 = styled.div`
  position: relative;
  display: inline-block;
  min-width: 124px;
`;
const Texttitle2 = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) 0px;
  gap: var(--gap-9xs);
  z-index: 1;
`;
const Avatar1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
  font-size: var(--h5-regular-size);
`;
const FrameParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const ContainerParent = styled.div`
  width: 313px;
  margin: 0 !important;
  position: absolute;
  bottom: -143px;
  left: -43px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl) var(--padding-2xl) var(--padding-lgi);
  box-sizing: border-box;
  gap: var(--gap-xs);
  font-size: var(--font-size-xl);
`;
const Image2 = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 !important;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: var(--br-lg);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  background-image: url("/image2@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  z-index: 1;
`;
const Default = styled.div`
  width: 71px;
  position: relative;
  font-size: var(--body-regular-size);
  line-height: 20px;
  font-weight: 500;
  font-family: var(--h5-regular);
  color: var(--white);
  text-align: center;
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
const Tag = styled.button`
  cursor: pointer;
  border: 1px solid var(--primary);
  padding: var(--padding-7xs) var(--padding-5xs);
  background-color: var(--primary);
  width: 90px;
  border-radius: var(--br-11xl);
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-10xs);
  white-space: nowrap;
  z-index: 2;
  &:hover {
    background-color: var(--color-mediumslateblue-100);
    border: 1px solid var(--color-mediumslateblue-100);
    box-sizing: border-box;
  }
`;
const ImageHolder = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: var(--padding-sm) var(--padding-mini) var(--padding-95xl);
  position: relative;
`;
const Texttitle3 = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs-5) 0px;
  gap: var(--gap-9xs);
  z-index: 1;
`;
const Avatar2 = styled.div`
  width: 32px;
  height: 32px;
  border-radius: var(--br-81xl);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  background-image: url("/avatar3@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  z-index: 1;
`;
const Avatar3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
  color: var(--black);
`;
const ContainerGroup = styled.div`
  width: 313px;
  margin: 0 !important;
  position: absolute;
  right: -43px;
  bottom: -143px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl) var(--padding-2xl) var(--padding-lgi);
  box-sizing: border-box;
  gap: var(--gap-28xl);
  color: var(--muted700);
`;
const Text5 = styled.div`
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 32px;
`;
const Texttitle4 = styled.div`
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const AddonLeft = styled.div`
  position: relative;
  line-height: 24px;
`;
const Wrapper = styled.div`
  height: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const InputAddonLeft = styled.div`
  align-self: stretch;
  border-radius: var(--br-11xs) 0px 0px var(--br-11xs);
  background-color: var(--neutral-2);
  border-top: 1px solid var(--neutral-5);
  border-bottom: 1px solid var(--neutral-5);
  border-left: 1px solid var(--neutral-5);
  overflow: hidden;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-2xs);
`;
const InputPrefixIcon = styled.img`
  height: 14px;
  width: 14px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  display: none;
`;
const Placeholder = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  height: 19px;
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-family: var(--h5-regular);
  font-size: var(--h5-regular-size);
  color: var(--neutral400);
  min-width: 250px;
  max-width: 100%;
`;
const InputPrefixParent = styled.div`
  flex: 1;
  border-radius: var(--br-11xs);
  background-color: var(--white);
  border: 1px solid var(--neutral-5);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-2xs-5) var(--padding-2xs);
  gap: var(--gap-9xs);
  max-width: 100%;
`;
const IconWrapper = styled.img`
  height: 14px;
  width: 14px;
  position: relative;
  object-fit: cover;
`;
const InputAddonRight = styled.div`
  height: 40px;
  width: 38px;
  border-radius: 0px var(--br-11xs) var(--br-11xs) 0px;
  background-color: var(--neutral-2);
  border-top: 1px solid var(--neutral-5);
  border-right: 1px solid var(--neutral-5);
  border-bottom: 1px solid var(--neutral-5);
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-4xs) var(--padding-2xs);
`;
const Input = styled.div`
  align-self: stretch;
  border-radius: var(--br-7xs);
  background-color: var(--white);
  box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--neutral-5);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
  text-align: center;
  color: var(--character-primary-85);
  font-family: var(--body-regular);
`;
const TexttitleContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-8xs);
  box-sizing: border-box;
  gap: var(--gap-mini);
  max-width: 100%;
`;
const Namescanbegeneratedaccordingly = styled.div`
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 101px;
`;
const Texttitle5 = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const InboxIcon = styled.img`
  height: 48px;
  width: 48px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Namescanbegeneratedaccordingly1 = styled.div`
  align-self: stretch;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;
const ClickOrDrag = styled.div`
  align-self: stretch;
  position: relative;
`;
const SupportForA = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--body-regular-size);
  color: var(--neutral400);
`;
const TextWrapper = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;
const UploadDrag = styled.div`
  align-self: stretch;
  border-radius: var(--br-7xs);
  background-color: var(--white);
  border: 1px dashed var(--neutral-5);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-45xl) var(--padding-9xl);
  gap: var(--gap-xl);
  text-align: center;
  @media screen and (max-width: 800px) {
    padding-left: var(--padding-13xl);
    padding-right: var(--padding-13xl);
    box-sizing: border-box;
  }
`;
const Content = styled.div`
  flex: 1;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl) var(--padding-4xl) var(--padding-13xl)
    var(--padding-5xl);
  box-sizing: border-box;
  gap: var(--gap-mini);
  max-width: 100%;
  z-index: 5;
  @media screen and (max-width: 450px) {
    padding-top: var(--padding-xl);
    padding-bottom: var(--padding-2xl);
    box-sizing: border-box;
  }
`;
const Inputlabel1 = styled(InputLabel)``;
const AddCheckIn = styled(MenuItem)``;
const Select1 = styled(Select)``;
const Formhelpertext1 = styled(FormHelperText)``;
const Header = styled(FormControl)`
  height: 51px;
  width: 100%;
  margin: 0 !important;
  position: absolute;
  top: -50px;
  right: 0px;
  left: 0px;
  font-family: var(--h5-regular);
  font-weight: 500;
  font-size: var(--h5-regular-size);
  color: var(--black);
  z-index: 6;
`;
const FirstBarsChildRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  max-width: 100%;
  text-align: left;
  font-size: var(--h5-regular-size);
  color: var(--black);
  font-family: var(--h5-regular);
`;

const FirstBarsChild = () => {
  return (
    <FirstBarsChildRoot>
      <WrapperContainer>
        <ContainerIcon alt="" src="/container@2x.png" />
      </WrapperContainer>
      <FrameComponent2
        propAlignSelf="unset"
        propPosition="absolute"
        propWidth="588px"
        propMargin="0 !important"
        propTop="-215px"
        propLeft="-388px"
      />
      <ContainerParent>
        <Container>
          <ContainerChild />
        </Container>
        <Image1>
          <AspectRatioKeeperAddition
            alt=""
            src="/aspect-ratio-keeper--additionally-45-rotated-auto-layout-1@2x.png"
          />
        </Image1>
        <FrameParent>
          <TexttitleParent>
            <Texttitle>
              <Text1>CheckIn Name</Text1>
              <Texttext>
                <Text2>Text line</Text2>
              </Texttext>
            </Texttitle>
            <Texttitle1>
              <Text3>12th Nov, 2022</Text3>
              <Texttext>
                <Text2>Text line</Text2>
              </Texttext>
            </Texttitle1>
          </TexttitleParent>
          <Avatar1>
            <AvatarWrapper>
              <Avatar>
                <AspectRatioKeeperAddition1
                  loading="lazy"
                  alt=""
                  src="/aspect-ratio-keeper--additionally-45-rotated-auto-layout-2@2x.png"
                />
              </Avatar>
            </AvatarWrapper>
            <Texttitle2>
              <Text4>
                <Owner>
                  Owner:
                  <Span>{` `}</Span>
                </Owner>
                <JohnDoe>John Doe</JohnDoe>
              </Text4>
              <Texttext>
                <Text2>Text line</Text2>
              </Texttext>
            </Texttitle2>
          </Avatar1>
        </FrameParent>
      </ContainerParent>
      <ContainerGroup>
        <Container>
          <ContainerChild />
        </Container>
        <ImageHolder>
          <Image2>
            <AspectRatioKeeperAddition
              alt=""
              src="/aspect-ratio-keeper--additionally-45-rotated-auto-layout-1@2x.png"
            />
          </Image2>
          <Tag>
            <Default>Checked In</Default>
            <CloseIcon alt="" src="/close.svg" />
          </Tag>
        </ImageHolder>
        <FrameParent>
          <Texttitle3>
            <Text3>12th Nov, 2022</Text3>
            <Texttext>
              <Text2>Text line</Text2>
            </Texttext>
          </Texttitle3>
          <Avatar3>
            <AvatarWrapper>
              <Avatar2>
                <AspectRatioKeeperAddition1
                  loading="lazy"
                  alt=""
                  src="/aspect-ratio-keeper--additionally-45-rotated-auto-layout-2@2x.png"
                />
              </Avatar2>
            </AvatarWrapper>
            <Texttitle2>
              <Text4>
                <Owner>
                  Owner:
                  <Span>{` `}</Span>
                </Owner>
                <JohnDoe>John Doe</JohnDoe>
              </Text4>
              <Texttext>
                <Text2>Text line</Text2>
              </Texttext>
            </Texttitle2>
          </Avatar3>
        </FrameParent>
      </ContainerGroup>
      <Content>
        <TexttitleContainer>
          <Texttitle4>
            <Text5>Title</Text5>
          </Texttitle4>
          <Input>
            <InputAddonLeft>
              <Wrapper>
                <AddonLeft>https://</AddonLeft>
              </Wrapper>
            </InputAddonLeft>
            <InputPrefixParent>
              <InputPrefixIcon alt="" src="/inputprefix@2x.png" />
              <Placeholder placeholder="Enter title" type="text" />
              <InputPrefixIcon alt="" src="/inputsuffix@2x.png" />
            </InputPrefixParent>
            <InputAddonRight>
              <IconWrapper alt="" src="/iconwrapper@2x.png" />
            </InputAddonRight>
          </Input>
        </TexttitleContainer>
        <Texttitle5>
          <Namescanbegeneratedaccordingly>
            Upload Image
          </Namescanbegeneratedaccordingly>
        </Texttitle5>
        <UploadDrag>
          <Namescanbegeneratedaccordingly1>
            <InboxIcon loading="lazy" alt="" src="/inbox.svg" />
          </Namescanbegeneratedaccordingly1>
          <TextWrapper>
            <ClickOrDrag>Click or drag file to this area to upload</ClickOrDrag>
            <SupportForA>
              Support for a single or bulk upload. Strictly prohibit from
              uploading company data or other band files
            </SupportForA>
          </TextWrapper>
        </UploadDrag>
      </Content>
      <Header
        variant="standard"
        sx={{
          borderTopWidth: "1px",
          borderRightWidth: "1px",
          borderBottomWidth: "1px",
          borderLeftWidth: "1px",
          backgroundColor: "#f8f8f8",
          borderRadius: "20px 20px 0px 0px",
          width: "100%",
          height: "51px",
          m: 0,
          p: 0,
          "& .MuiInputBase-root": {
            m: 0,
            p: 0,
            minHeight: "51px",
            justifyContent: "center",
            display: "inline-flex",
          },
          "& .MuiInputLabel-root": {
            m: 0,
            p: 0,
            minHeight: "51px",
            display: "inline-flex",
          },
          "& .MuiMenuItem-root": {
            m: 0,
            p: 0,
            height: "51px",
            display: "inline-flex",
          },
          "& .MuiSelect-select": {
            m: 0,
            p: 0,
            height: "51px",
            alignItems: "center",
            display: "inline-flex",
          },
          "& .MuiInput-input": { m: 0, p: 0 },
          "& .MuiInputBase-input": {
            color: "#000",
            fontSize: 16,
            fontWeight: "Medium",
            fontFamily: "Roboto Flex",
            textAlign: "left",
            p: "0 !important",
            marginLeft: "20.5px",
          },
        }}
      >
        <Inputlabel1 color="secondary" />
        <Select1
          color="secondary"
          disableUnderline
          displayEmpty
          IconComponent={() => (
            <img
              width="16px"
              height="16px"
              src="/close.svg"
              style={{ marginRight: "20.5px" }}
            />
          )}
        >
          <AddCheckIn>Add Check In</AddCheckIn>
        </Select1>
        <Formhelpertext1 />
      </Header>
    </FirstBarsChildRoot>
  );
};

export default FirstBarsChild;
