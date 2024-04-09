import styled from "styled-components";

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
  background-image: url("/image@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  z-index: 1;
  background-image: ${(p) => p.propBackgroundImage};
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
const ImageParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: var(--padding-sm) var(--padding-mini) var(--padding-95xl);
  position: relative;
`;
const TagQuartetStacked = styled.div`
  position: relative;
  line-height: 24px;
  font-weight: 500;
  white-space: nowrap;
  @media screen and (max-width: 450px) {
    font-size: var(--h5-regular-size);
  }
`;
const Text1 = styled.div`
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
const Text2 = styled.div`
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
  background-image: url("/avatar1@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  z-index: 1;
  background-image: ${(p) => p.propBackgroundImage1};
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
const Text3 = styled.div`
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
const FrameGroup = styled.div`
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
const ContainerParentRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl) var(--padding-2xl) var(--padding-lgi);
  position: relative;
  gap: var(--gap-xs);
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--black);
  font-family: var(--h5-regular);
`;

const FrameComponent = ({ propBackgroundImage, propBackgroundImage1 }) => {
  return (
    <ContainerParentRoot>
      <Container>
        <ContainerChild />
      </Container>
      <ImageParent>
        <Image1 propBackgroundImage={propBackgroundImage}>
          <AspectRatioKeeperAddition
            alt=""
            src="/aspect-ratio-keeper--additionally-45-rotated-auto-layout-1@2x.png"
          />
        </Image1>
        <Tag>
          <Default>Checked In</Default>
          <CloseIcon alt="" src="/close.svg" />
        </Tag>
      </ImageParent>
      <FrameParent>
        <TexttitleParent>
          <Texttitle>
            <TagQuartetStacked>CheckIn Name</TagQuartetStacked>
            <Texttext>
              <Text1>Text line</Text1>
            </Texttext>
          </Texttitle>
          <Texttitle1>
            <Text2>12th Nov, 2022</Text2>
            <Texttext>
              <Text1>Text line</Text1>
            </Texttext>
          </Texttitle1>
        </TexttitleParent>
        <FrameGroup>
          <AvatarWrapper>
            <Avatar propBackgroundImage1={propBackgroundImage1}>
              <AspectRatioKeeperAddition1
                alt=""
                src="/aspect-ratio-keeper--additionally-45-rotated-auto-layout-2@2x.png"
              />
            </Avatar>
          </AvatarWrapper>
          <Texttitle2>
            <Text3>
              <Owner>
                Owner:
                <Span>{` `}</Span>
              </Owner>
              <JohnDoe>John Doe</JohnDoe>
            </Text3>
            <Texttext>
              <Text1>Text line</Text1>
            </Texttext>
          </Texttitle2>
        </FrameGroup>
      </FrameParent>
    </ContainerParentRoot>
  );
};

export default FrameComponent;
