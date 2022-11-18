import styled from "styled-components";

export const WrapperButton = styled.div`
  .default-button {
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

  .icon-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border: 0;
    outline: 0;
    position: absolute;
    right: 16px;
    top: 16px;
    border-radius: 4px;
    cursor: pointer;
    background: transparent;

    &:hover {
      background: var(--gray-400);

      svg {
        path {
          stroke: var(--danger);
        }
        line {
          stroke: var(--danger);
        }
      }
    }
  }

  .is-block {
    width: 100%;
  }
`;
