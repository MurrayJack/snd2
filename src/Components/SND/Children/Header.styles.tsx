import styled from "styled-components";

export const HeaderDiv = styled.div`
  /* Grey/Grey 10 */
  background-color: #f6f8fa;
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
  box-sizing: border-box;
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
  font-size: 1em;
  background: transparent;
  height: 39px;
  text-indent: 16px;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;

export const SearchHeaderWrapper = styled.div`
  box-sizing: border-box;
  background-color: white;
  display: grid;
  grid-template-columns: auto 30px 30px;
  border-radius: 6px 6px 0 0;
  border: 1px solid #edf2f5;
  border-bottom: 0;
  box-sizing: border-box;
`;

export const FolderHeaderWrapper = styled.div`
  box-sizing: border-box;
  background-color: white;
  height: 40px;
  display: grid;
  grid-template-columns: 30px auto 30px;
  border-radius: 6px 6px 0 0;
  border: 1px solid #edf2f5;
  border-bottom: 0;
  box-sizing: border-box;
`;
