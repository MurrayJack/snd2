import styled from "styled-components";

export interface IRowStyleProps {
  HasDescription?: boolean;
  IsFolder?: boolean;
}

export const TextWrapperDiv = styled.div`
  display: grid;
`;

export const IconWrapperDiv = styled.div``;

export const Row = styled.div<IRowStyleProps>`
  height: ${props => (props.HasDescription ? "56px" : "40px")};
  padding: 0 16px;
  grid-gap: 8px;
  display: grid;
  grid-template-columns: ${props =>
    props.IsFolder ? "20px auto 20px" : "20px auto"};
  align-items: center;
  cursor: pointer;

  &:hover {
    background: #0075db;
    color: white;
  }
`;
