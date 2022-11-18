import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  max-width: 736px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: -27px auto 0 auto;
  gap: 8px;

  @media screen and (max-width: calc(736px + 1rem)) {
    width: calc(100% - 1rem);
  }
`;
