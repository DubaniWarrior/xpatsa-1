import styled from "styled-components";

import { FormGroup } from "reactstrap";

export const FormWarp = styled(FormGroup)`
  font-family: source-sans-pro, sans-serif;
  font-weight: 400;
  font-style: normal;
  input, textarea
  {
    border-radius:0px;
    margin-top: -18px;
    height: 50px;
  }
  input:focus, textarea:focus {
    box-shadow: 0px 0px 0px #000;
  }
  label
  {
    margin-left: 10px;
    margin-right: 10px;
    background: #fff;
    padding: 0px 5px;
    font-size: 12px;
    color: #6c757d;
  }
`;
