import styled from "styled-components";

export const HeaderDiv = styled.div`
  background: #f6f8fa;
  border-radius: 4px;
  height: 40px;
  padding: 0 16px;
  display: grid;
  align-items: center;
  grid-template-columns: auto 30px;
  font-family: Roboto;
  font-size: 14px !important;
  line-height: 1.3em;
  letter-spacing: 0.25px;
`;

export const HeaderButton = styled.button`
  background: transparent;
  border: none;
  width: 30px;
  height: 30px;
  display: grid;
  align-items: center;
  justify-items: center;
`;

export const HeaderInput = styled.input`
  border: 0;
  background: transparent;
`;
