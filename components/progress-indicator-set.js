import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import styled from "styled-components";
import InputCollector from "./input-collector";
import { useRouter } from "next/router";

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
  margin: 0 !important;
  position: absolute;
  right: 56px;
  bottom: 174px;
  border-radius: var(--br-11xl);
  box-sizing: border-box;
  overflow: hidden;
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
const DatePickerField = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  border-radius: var(--br-xl);
  background-color: var(--white);
  max-width: 100%;
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
  max-width: 100%;
  z-index: 5;
`;
const TableCollection = styled.div`
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 79px;
`;
const Texttitle = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 6;
`;
const ImageGallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs-5) 0px 0px;
`;
const Text1 = styled.div`
  position: relative;
  line-height: 22px;
`;
const Wrapper = styled.div`
  height: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const InputAddonlabel = styled.div`
  height: 32px;
  border-radius: var(--br-11xs) 0px 0px var(--br-11xs);
  background-color: var(--neutral-2);
  border-top: 1px solid var(--neutral-5);
  border-bottom: 1px solid var(--neutral-5);
  border-left: 1px solid var(--neutral-5);
  box-sizing: border-box;
  overflow: hidden;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-xs);
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
const Input = styled.div`
  flex: 1;
  position: relative;
`;
const Input1 = styled.div`
  flex: 1;
  border-radius: var(--br-11xs);
  background-color: var(--white);
  border: 1px solid var(--neutral400);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) var(--padding-2xs);
  gap: var(--gap-9xs);
  text-align: left;
  color: var(--black);
  font-family: var(--h5-regular);
`;
const IconWrapper = styled.img`
  height: 14px;
  width: 14px;
  position: relative;
  object-fit: cover;
`;
const InputAddonicon = styled.div`
  height: 32px;
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
const Input2 = styled.div`
  width: 133px;
  border-radius: var(--br-11xs);
  background-color: var(--white);
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 6;
  text-align: center;
  font-size: var(--body-regular-size);
  color: var(--character-primary-85);
  font-family: var(--body-regular);
`;
const ImageGalleryParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
`;
const StarRating = styled.div`
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 51px;
`;
const RangeSeeker = styled.div`
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 122px;
  white-space: nowrap;
`;
const Text2 = styled.div`
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 93px;
`;
const ProgressCircle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-17xl-5);
`;
const Stepper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-24xl);
`;
const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-8xs);
`;
const Text3 = styled.div`
  height: 22px;
  position: relative;
  line-height: 22px;
  display: inline-block;
  white-space: nowrap;
`;
const InputAddonlabel1 = styled.div`
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
  padding: 0px var(--padding-xs);
`;
const Input3 = styled.div`
  position: relative;
  line-height: 22px;
  display: inline-block;
  min-width: 8px;
`;
const Input4 = styled.div`
  border-radius: var(--br-11xs);
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) var(--padding-xs);
  gap: var(--gap-9xs);
  text-align: left;
  color: var(--black);
`;
const Input5 = styled.div`
  border-radius: var(--br-11xs);
  background-color: var(--white);
  border: 1px solid var(--neutral400);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 6;
`;
const NumberInputField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-3xl);
`;
const Tag1 = styled.button`
  cursor: pointer;
  border: 1px solid var(--primary);
  padding: var(--padding-7xs) var(--padding-5xs);
  background-color: var(--primary);
  align-self: stretch;
  border-radius: var(--br-11xl);
  overflow: hidden;
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
const InfoMessage = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs) 0px 0px;
`;
const Input6 = styled.div`
  flex: 1;
  border-radius: var(--br-11xs);
  background-color: var(--white);
  border: 1px solid var(--neutral400);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) var(--padding-2xs);
  gap: var(--gap-9xs);
  text-align: left;
  color: var(--black);
`;
const Input7 = styled.div`
  width: 32px;
  border-radius: var(--br-11xs);
  background-color: var(--white);
  border: 1px solid var(--neutral-5);
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 6;
  margin-left: -48px;
`;
const AlertMessage = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-base) 0px 0px;
`;
const ModalDialog = styled.div`
  width: 100px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-8xs);
  box-sizing: border-box;
`;
const DatePicker = styled(TextField)`
  border: none;
  background-color: transparent;
  align-self: stretch;
  height: 24px;
  font-family: var(--body-regular);
  font-size: var(--body-regular-size);
  color: var(--color-gray-100);
  z-index: 6;
`;
const ModalDialogParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-2xl);
`;
const CalendarPickerRange = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-11xl);
  text-align: center;
  font-size: var(--body-regular-size);
  color: var(--character-primary-85);
  font-family: var(--body-regular);
`;
const PopoverTooltips = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
`;
const SelectMenu = styled.div`
  width: 256px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xl);
`;
const AspectRatioKeeperAddition = styled.img`
  width: 480px;
  height: 480px;
  margin: 0 !important;
  position: absolute;
  top: calc(50% - 240px);
  left: -224px;
  object-fit: contain;
`;
const Image1 = styled.div`
  height: 134px;
  width: 256px;
  border-radius: var(--br-lg);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  background-image: url("/image4@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  z-index: 6;
`;
const ColorPickerField = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 100%;
  gap: var(--gap-xl);
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`;
const TimePickerField = styled.div`
  width: 680px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-10xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const AspectRatioKeeperAddition1 = styled.img`
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
const Image2 = styled.div`
  height: 160px;
  width: 271px;
  margin: 0 !important;
  position: absolute;
  top: -153px;
  left: 42px;
  border-radius: var(--br-lg);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  background-image: url("/image1@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  z-index: 1;
`;
const Image3 = styled.div`
  height: 160px;
  width: 271px;
  margin: 0 !important;
  position: absolute;
  top: -153px;
  right: 41px;
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
const Button1 = styled(Button)`
  height: 32px;
  width: 75px;
`;
const WrapperIcon = styled.img`
  width: 14px;
  height: 14px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const IconWrapper1 = styled.div`
  height: 14px;
  background-color: var(--hitbox);
  overflow: hidden;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Text4 = styled.div`
  width: 20px;
  position: relative;
  font-size: var(--h5-regular-size);
  font-weight: 500;
  font-family: var(--h5-regular);
  color: var(--white);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
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
const Footer = styled.div`
  flex: 1;
  border-radius: 0px 0px var(--br-xl) var(--br-xl);
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: var(--padding-base);
  box-sizing: border-box;
  gap: var(--gap-5xs);
  max-width: 100%;
  z-index: 6;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const ConditionChecker = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  max-width: 100%;
  color: var(--muted700);
`;
const ProgressIndicatorSetRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-108xl) 0px var(--padding-10xs);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-43xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--h5-regular-size);
  color: var(--black);
  font-family: var(--h5-regular);
  @media screen and (max-width: 750px) {
    gap: 31px 62px;
  }
  @media screen and (max-width: 450px) {
    gap: 15px 62px;
    padding-top: var(--padding-64xl);
    padding-bottom: var(--padding-xl);
    box-sizing: border-box;
  }
`;

const ProgressIndicatorSet = () => {
  const router = useRouter();

  const onButton1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <ProgressIndicatorSetRoot>
      <Tag>
        <Default>Checked In</Default>
        <CloseIcon alt="" src="/close.svg" />
      </Tag>
      <Container>
        <DatePickerField />
      </Container>
      <TimePickerField>
        <ColorPickerField>
          <SelectMenu>
            <ImageGalleryParent>
              <ImageGallery>
                <Texttitle>
                  <TableCollection>Booking ID</TableCollection>
                </Texttitle>
              </ImageGallery>
              <Input2>
                <InputAddonlabel>
                  <Wrapper>
                    <Text1>http://</Text1>
                  </Wrapper>
                </InputAddonlabel>
                <Input1>
                  <InputPrefixIcon alt="" src="/inputprefix@2x.png" />
                  <Input>12345678</Input>
                  <InputPrefixIcon alt="" src="/inputsuffix@2x.png" />
                </Input1>
                <InputAddonicon>
                  <IconWrapper alt="" src="/iconwrapper@2x.png" />
                </InputAddonicon>
              </Input2>
            </ImageGalleryParent>
            <PopoverTooltips>
              <DropdownMenu>
                <Stepper>
                  <Texttitle>
                    <StarRating>Rooms</StarRating>
                  </Texttitle>
                  <ProgressCircle>
                    <Texttitle>
                      <RangeSeeker>Number of Guest</RangeSeeker>
                    </Texttitle>
                    <Texttitle>
                      <Text2>Booked Date</Text2>
                    </Texttitle>
                  </ProgressCircle>
                </Stepper>
              </DropdownMenu>
              <CalendarPickerRange>
                <NumberInputField>
                  <Input5>
                    <InputAddonlabel1>
                      <Wrapper>
                        <Text3>http://</Text3>
                      </Wrapper>
                    </InputAddonlabel1>
                    <Input4>
                      <InputPrefixIcon alt="" src="/inputprefix@2x.png" />
                      <Input3>4</Input3>
                      <InputPrefixIcon alt="" src="/inputsuffix@2x.png" />
                    </Input4>
                    <InputAddonicon>
                      <IconWrapper alt="" src="/iconwrapper@2x.png" />
                    </InputAddonicon>
                  </Input5>
                </NumberInputField>
                <ModalDialogParent>
                  <ModalDialog>
                    <AlertMessage>
                      <InfoMessage>
                        <Tag1>
                          <Default>Checked In</Default>
                          <CloseIcon alt="" src="/close.svg" />
                        </Tag1>
                      </InfoMessage>
                      <Input7>
                        <InputAddonlabel1>
                          <Wrapper>
                            <Text3>http://</Text3>
                          </Wrapper>
                        </InputAddonlabel1>
                        <Input6>
                          <InputPrefixIcon alt="" src="/inputprefix@2x.png" />
                          <Input3>4</Input3>
                          <InputPrefixIcon alt="" src="/inputsuffix@2x.png" />
                        </Input6>
                        <InputAddonicon>
                          <IconWrapper alt="" src="/iconwrapper@2x.png" />
                        </InputAddonicon>
                      </Input7>
                    </AlertMessage>
                  </ModalDialog>
                  <DatePicker
                    placeholder="12-03-20234"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <img width="12.5px" height="12.5px" src="/union.svg" />
                      ),
                    }}
                    sx={{
                      "& fieldset": { borderColor: "#b4b4b4" },
                      "& .MuiInputBase-root": {
                        height: "24px",
                        backgroundColor: "#fff",
                        paddingRight: "12px",
                        borderRadius: "2px",
                        fontSize: "14px",
                      },
                      "& .MuiInputBase-input": { color: "rgba(0, 0, 0, 0.4)" },
                    }}
                  />
                </ModalDialogParent>
              </CalendarPickerRange>
            </PopoverTooltips>
          </SelectMenu>
          <Image1>
            <AspectRatioKeeperAddition
              alt=""
              src="/aspect-ratio-keeper--additionally-45-rotated-auto-layout-3@2x.png"
            />
          </Image1>
        </ColorPickerField>
      </TimePickerField>
      <ConditionChecker>
        <Image2>
          <AspectRatioKeeperAddition1
            alt=""
            src="/aspect-ratio-keeper--additionally-45-rotated-auto-layout-1@2x.png"
          />
        </Image2>
        <InputCollector />
        <Image3>
          <AspectRatioKeeperAddition1
            alt=""
            src="/aspect-ratio-keeper--additionally-45-rotated-auto-layout-1@2x.png"
          />
        </Image3>
        <InputCollector
          propLeft="unset"
          propRight="20px"
          propBackgroundImage="url('/avatar3@3x.png')"
        />
        <Footer>
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
              width: 75,
              height: 32,
            }}
          >
            Cancel
          </Button1>
          <Button2 onClick={onButton1Click}>
            <IconWrapper1>
              <WrapperIcon alt="" src="/wrapper-8@2x.png" />
            </IconWrapper1>
            <Text4>Ok</Text4>
          </Button2>
        </Footer>
      </ConditionChecker>
    </ProgressIndicatorSetRoot>
  );
};

export default ProgressIndicatorSet;
