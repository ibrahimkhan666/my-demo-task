import styled from "styled-components";

const ErrorHandler = styled.div`
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
const ParallelProcessor = styled.div`
  position: relative;
  display: inline-block;
  min-width: 108px;
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
  padding: var(--padding-5xs-5) 0px;
  gap: var(--gap-9xs);
  z-index: 1;
`;
const AspectRatioKeeperAddition = styled.img`
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
  background-image: ${(p) => p.propBackgroundImage};
`;
const Buffer = styled.div`
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
const Reducer = styled.div`
  position: relative;
  display: inline-block;
  min-width: 124px;
`;
const Texttitle1 = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) 0px;
  gap: var(--gap-9xs);
  z-index: 1;
`;
const StackManager = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
  color: var(--black);
`;
const InputCollectorRoot = styled.div`height: 324px;
  width: 313px;
  margin: 0 !important;
  position: absolute;
  top: -177px;
  left: 21px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: var(--padding-lgi) var(--padding-2xl);
  box-sizing: border-box;
  gap: var(--gap-7xs);
  text-align: left;
  font-size: var(--h5-regular-size);
  color: var(--muted700);
  font-family: var(--h5-regular);
  left: ${(p) => p.propLeft}
  right: ${(p) => p.propRight}
`;

const InputCollector = ({ propLeft, propRight, propBackgroundImage }) => {
  return (
    <InputCollectorRoot propLeft={propLeft} propRight={propRight}>
      <Container>
        <ErrorHandler />
      </Container>
      <Texttitle>
        <ParallelProcessor>12th Nov, 2022</ParallelProcessor>
        <Texttext>
          <Text1>Text line</Text1>
        </Texttext>
      </Texttitle>
      <StackManager>
        <Buffer>
          <Avatar propBackgroundImage={propBackgroundImage}>
            <AspectRatioKeeperAddition
              alt=""
              src="/aspect-ratio-keeper--additionally-45-rotated-auto-layout-2@2x.png"
            />
          </Avatar>
        </Buffer>
        <Texttitle1>
          <Reducer>
            <Owner>
              Owner:
              <Span>{` `}</Span>
            </Owner>
            <JohnDoe>John Doe</JohnDoe>
          </Reducer>
          <Texttext>
            <Text1>Text line</Text1>
          </Texttext>
        </Texttitle1>
      </StackManager>
    </InputCollectorRoot>
  );
};

export default InputCollector;
