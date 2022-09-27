import styled from "styled-components";

export const SWrapperButton = styled.div`
  width: 100%;
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    height: 52px;
    font-weight: 700;
    font-size: 0.875rem;
    padding: 16px;
    outline: 0;
    border: 1px solid transparent;
    cursor: pointer;
    border-radius: 8px;
    color: var(--gray-100);
    background: var(--blue-dark);

    &:hover {
      background: var(--blue);
    }

    &:focus {
      box-shadow: 0 0 0 1px var(--blue-dark);
    }
  }

  .button-block {
    width: 100%;
  }
`;
