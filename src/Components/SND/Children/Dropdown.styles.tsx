import styled from "styled-components";

export const DropdownWrapperDiv = styled.div`
  background: white;

  > ul {
    width: 100%;
    padding: 0;
    margin: 0;

    > li {
      padding: 0 16px;
      height: 40px;
      display: grid;
      align-items: center;
    }
  }
`;
