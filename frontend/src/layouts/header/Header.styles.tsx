import { styled } from "@mui/system";

export const Wrapper = styled("div")`
  width: 100%;
  top: 0;
  position: absolute;
  background: #f4f4f4;
  padding: 10px 0 10px 0;
 
`;

export const WrapperLinks = styled("div")`
    a {
    color: black;
  }
  display: grid;
  grid-template-columns: auto 100px 100px 100px;
  align-items:center;
  padding: 0 20px 0 100px;
  font-size:16px;
`;
