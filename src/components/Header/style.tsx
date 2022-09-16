import styled from "styled-components";

export const SHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 200px;
  background: var(--gray-700);

  div {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 12px;
  }

  img {
    margin-bottom: 2px;
  }

  h1 {
    font-weight: 900;
    line-height: 48px;
    font-size: 2.5rem;
    background: linear-gradient(
      to right,
      var(--blue) 45%,
      var(--purple-dark) 0
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
