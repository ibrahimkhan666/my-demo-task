import styled from "styled-components";

const Label = styled.div`
  height: 32px;
  width: 32px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;
const Layoutblocksbase = styled.div`
  height: 33px;
  width: 33px;
  background-color: var(--primary);
  border: 1px dashed var(--white);
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const WrapperIcon = styled.img`
  width: 14px;
  height: 14px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const IconChangeSizeHere = styled.div`
  height: 14px;
  background-color: var(--hitbox);
  overflow: hidden;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  position: relative;
  line-height: 22px;
  font-weight: 500;
`;
const MenuItem1 = styled.div`
  height: 48px;
  overflow: hidden;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  gap: var(--gap-3xs);
`;
const MenuItem2 = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-xl);
  gap: var(--gap-61xl);
`;
const Title1 = styled.div`
  position: relative;
  line-height: 22px;
`;
const MenuItem3 = styled.div`
  height: 48px;
  overflow: hidden;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
`;
const Title2 = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 22px;
  display: flex;
  align-items: center;
`;
const MenuItem4 = styled.div`
  height: 48px;
  background-color: var(--white);
  overflow: hidden;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-smi) var(--padding-xl);
  box-sizing: border-box;
  white-space: nowrap;
`;
const MenuItem5 = styled.div`
  height: 48px;
  background-color: var(--white);
  overflow: hidden;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-smi) var(--padding-7xs) var(--padding-smi)
    var(--padding-xl);
  box-sizing: border-box;
  white-space: nowrap;
`;
const MenuItem6 = styled.div`
  height: 48px;
  background-color: var(--white);
  overflow: hidden;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-smi) var(--padding-smi) var(--padding-smi)
    var(--padding-xl);
  box-sizing: border-box;
  white-space: nowrap;
`;
const Menulegacy = styled.div`
  align-self: stretch;
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 100%;
`;
const Text1 = styled.div`
  height: 24px;
  position: relative;
  line-height: 24px;
  display: inline-block;
  white-space: nowrap;
`;
const Button1 = styled.div`
  height: 22px;
  border-radius: var(--br-11xs);
  border: 1px solid var(--review-green);
  box-sizing: border-box;
  overflow: hidden;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-6xs-4) var(--padding-10xs);
  gap: var(--gap-5xs);
  text-align: center;
  font-size: var(--h5-regular-size);
`;
const Button2 = styled.div`
  height: 24px;
  border-radius: var(--br-8xs);
  box-shadow: var(--drop-shadow-button-secondary);
  border: 1px solid var(--neutral-5);
  box-sizing: border-box;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-9xs) var(--padding-6xs);
  gap: var(--gap-3xs);
  text-align: center;
`;
const AvatarimageIcon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  object-fit: cover;
`;
const NeverSa = styled.div`
  align-self: stretch;
  width: 55px;
  position: relative;
  line-height: 64px;
  display: none;
  align-items: center;
`;
const User1 = styled.div`
  align-self: stretch;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 0px var(--padding-xs);
  gap: var(--gap-5xs);
  font-size: var(--font-size-smi);
  color: var(--color-gray-200);
  font-family: var(--body-regular);
`;
const Buttons = styled.div`
  height: 64px;
  width: 790px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-481xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--body-regular-size);
  color: var(--character-primary-85);
  font-family: var(--h5-regular1);
`;
const Header1 = styled.div`
  flex: 0.9886;
  border-radius: var(--br-11xl);
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-21xl);
  box-sizing: border-box;
  gap: var(--gap-3xs);
  max-width: 100%;
`;
const AvatarHolder = styled.div`
  height: 25.2px;
  flex: 1;
  position: relative;
  font-size: var(--h5-regular-size);
  font-weight: 500;
  font-family: var(--h5-regular);
  color: var(--white);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;
const Button3 = styled.button`
  cursor: pointer;
  border: 1px solid var(--primary);
  padding: var(--padding-5xs-4) var(--padding-xs) var(--padding-5xs-4)
    var(--padding-mini-1);
  background-color: var(--primary);
  align-self: stretch;
  border-radius: var(--br-980xl);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const ButtonWrapper = styled.div`
  width: 116.9px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) var(--padding-6xs) 0px 0px;
  box-sizing: border-box;
  padding: ${(p) => p.buttonPadding};
`;
const BellIcon = styled.img`
  width: 23.2px;
  height: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const BellWrapper = styled.div`
  height: 33px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs) 0px 0px;
  box-sizing: border-box;
`;
const InfocircleWrapper = styled.div`
  height: 33px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs) var(--padding-10xs-8) 0px 0px;
  box-sizing: border-box;
  padding: ${(p) => p.infoCircleIconPadding};
`;
const AspectRatioKeeperAddition = styled.img`
  width: 40.6px;
  height: 40.6px;
  object-fit: contain;
`;
const Ignore = styled.div`
  height: 0px;
  width: 0px;
  position: relative;
`;
const WidthChangeSizeHere = styled.div`
  width: 64px;
  height: 0px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-xl);
`;
const Avatar = styled.div`
  height: 42px;
  width: 40.6px;
  border-radius: var(--br-980xl);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  background-image: url("/avatar@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  background-image: ${(p) => p.aspectRatioKeeperAdditionBackgroundImage};
`;
const MenuIconantMenuSubmenuArr = styled.img`
  width: 9.4px;
  height: 9px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const MenuIconantMenuSubmenuArrWrapper = styled.div`
  height: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-base);
  box-sizing: border-box;
`;
const ImageAspectRatioKeeper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-3xs-1);
`;
const Header2 = styled.div`
  flex: 1;
  border-radius: var(--br-xl);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: var(--padding-2xs) var(--padding-13xl-7);
  box-sizing: border-box;
  gap: var(--gap-lg-4);
  max-width: 100%;
  z-index: 1;
  margin-left: -1348px;
`;
const HeaderRoot = styled.header`align-self: stretch;
  box-shadow: var(--header-shadow);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-3xs);
  color: var(--white);
  font-family: var(--body-regular);
  align-self: ${(p) => p.headerAlignSelf}
  flex: ${(p) => p.headerFlex}
`;

const Header = ({
  headerAlignSelf,
  headerFlex,
  buttonPadding,
  infoCircleIconPadding,
  aspectRatioKeeperAdditionBackgroundImage,
}) => {
  return (
    <HeaderRoot headerAlignSelf={headerAlignSelf} headerFlex={headerFlex}>
      <Header1>
        <Layoutblocksbase>
          <Label>Logo</Label>
        </Layoutblocksbase>
        <Buttons>
          <Menulegacy>
            <MenuItem1>
              <IconChangeSizeHere>
                <WrapperIcon alt="" src="/wrapper@2x.png" />
              </IconChangeSizeHere>
              <Title>nav-seleced</Title>
            </MenuItem1>
            <MenuItem2>
              <IconChangeSizeHere>
                <WrapperIcon alt="" src="/wrapper-1@2x.png" />
              </IconChangeSizeHere>
              <Title>Feedback</Title>
            </MenuItem2>
            <MenuItem1>
              <IconChangeSizeHere>
                <WrapperIcon alt="" src="/wrapper@2x.png" />
              </IconChangeSizeHere>
              <Title>Support</Title>
            </MenuItem1>
            <MenuItem3>
              <Title1>Settings</Title1>
            </MenuItem3>
            <MenuItem4>
              <Title2>Navigation Five</Title2>
            </MenuItem4>
            <MenuItem4>
              <Title2>Navigation Six</Title2>
            </MenuItem4>
            <MenuItem5>
              <Title2>Navigation Seven</Title2>
            </MenuItem5>
            <MenuItem6>
              <Title2>Navigation Eight</Title2>
            </MenuItem6>
          </Menulegacy>
          <Button1>
            <IconChangeSizeHere>
              <WrapperIcon alt="" src="/wrapper-3@2x.png" />
            </IconChangeSizeHere>
            <Text1>Log in</Text1>
          </Button1>
          <Button2>
            <IconChangeSizeHere>
              <WrapperIcon alt="" src="/wrapper-4@2x.png" />
            </IconChangeSizeHere>
            <Title1>Register</Title1>
          </Button2>
          <User1>
            <AvatarimageIcon alt="" src="/avatarimage@2x.png" />
            <NeverSa>Never_Sa</NeverSa>
          </User1>
        </Buttons>
      </Header1>
      <Header2>
        <ButtonWrapper buttonPadding={buttonPadding}>
          <Button3>
            <IconChangeSizeHere>
              <WrapperIcon alt="" src="/wrapper-5@2x.png" />
            </IconChangeSizeHere>
            <AvatarHolder>Feedback</AvatarHolder>
          </Button3>
        </ButtonWrapper>
        <BellWrapper>
          <BellIcon loading="lazy" alt="" src="/bell.svg" />
        </BellWrapper>
        <InfocircleWrapper infoCircleIconPadding={infoCircleIconPadding}>
          <BellIcon loading="lazy" alt="" src="/infocircle.svg" />
        </InfocircleWrapper>
        <ImageAspectRatioKeeper>
          <Avatar
            aspectRatioKeeperAdditionBackgroundImage={
              aspectRatioKeeperAdditionBackgroundImage
            }
          >
            <AspectRatioKeeperAddition
              loading="lazy"
              alt=""
              src="/aspect-ratio-keeper--additionally-45-rotated-auto-layout@2x.png"
            />
            <WidthChangeSizeHere>
              <Ignore />
              <Ignore />
            </WidthChangeSizeHere>
          </Avatar>
          <MenuIconantMenuSubmenuArrWrapper>
            <MenuIconantMenuSubmenuArr
              loading="lazy"
              alt=""
              src="/menuiconantmenusubmenuarrowdown@2x.png"
            />
          </MenuIconantMenuSubmenuArrWrapper>
        </ImageAspectRatioKeeper>
      </Header2>
    </HeaderRoot>
  );
};

export default Header;
