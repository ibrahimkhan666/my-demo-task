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
  top: -166px;
  right: -325px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
`;
const Inputlabel1 = styled(InputLabel)``;
const Detail = styled(MenuItem)``;
const Select1 = styled(Select)``;
const Formhelpertext1 = styled(FormHelperText)``;
const Header = styled(FormControl)`
  height: 64px;
  flex: 1;
  font-family: var(--h5-regular);
  font-weight: 500;
  font-size: var(--h5-regular-size);
  color: var(--black);
  max-width: 100%;
  z-index: 6;
`;
const LogicalOperatorRoot = styled.div`
  width: 699px;
  margin: 0 !important;
  position: absolute;
  top: 281px;
  left: 370px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;

const LogicalOperator = () => {
  return (
    <LogicalOperatorRoot>
      <WrapperContainer>
        <ContainerIcon alt="" src="/container@2x.png" />
      </WrapperContainer>
      <FrameComponent2
        propAlignSelf="unset"
        propPosition="absolute"
        propWidth="588px"
        propMargin="0 !important"
        propTop="-166px"
        propLeft="-324px"
      />
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
          height: "64px",
          m: 0,
          p: 0,
          "& .MuiInputBase-root": {
            m: 0,
            p: 0,
            minHeight: "64px",
            justifyContent: "center",
            display: "inline-flex",
          },
          "& .MuiInputLabel-root": {
            m: 0,
            p: 0,
            minHeight: "64px",
            display: "inline-flex",
          },
          "& .MuiMenuItem-root": {
            m: 0,
            p: 0,
            height: "64px",
            display: "inline-flex",
          },
          "& .MuiSelect-select": {
            m: 0,
            p: 0,
            height: "64px",
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
            marginLeft: "27.5px",
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
              style={{ marginRight: "27.5px" }}
            />
          )}
        >
          <Detail>Detail</Detail>
        </Select1>
        <Formhelpertext1 />
      </Header>
    </LogicalOperatorRoot>
  );
};

export default LogicalOperator;
