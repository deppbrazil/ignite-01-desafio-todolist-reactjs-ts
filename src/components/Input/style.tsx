import styled from "styled-components";

export const SWrapperInput = styled.div`
  width: 100%;

  .input-block {
    width: 100%;
  }

  input[type="text"] {
    height: 54px;
    padding: 16px;
    border-radius: 8px;
    color: var(--gray-300);
    border: 1px solid var(--gray-700);
    background: var(--gray-500);

    &:focus {
      color: var(--gray-100);
      border: 1px solid var(--purple-dark);
    }
  }

  .wrapper-item {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: stretch;
    position: relative;
    border-radius: 8px;
    padding: 16px 52px;
    border: 1px solid var(--gray-400);
    background: var(--gray-500);

    label {
      font-size: 0.875rem;
      line-height: 19.6px;
    }

    .label-checked {
      text-decoration: line-through;
      color: var(--gray-300);
    }

    button {
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
  }

  input[type="checkbox"] {
    cursor: pointer;
    position: absolute;
    width: 0;
    height: 0;
    top: 16px;
    left: 16px;
  }

  input[type="checkbox"]:before {
    content: "";
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 2rem;
    border: 2px solid var(--blue);
    background-color: transparent;
  }

  input[type="checkbox"]:checked:before {
    content: "";
    display: block;
    width: 1rem;
    height: 1rem;
    border: 2px solid var(--purple-dark);
    background-color: var(--purple-dark);
  }

  input[type="checkbox"]:checked:after {
    content: "";
    width: 4px;
    height: 8px;
    position: absolute;
    border: solid white;
    border-width: 0 1px 1px 0;
    transform: rotate(45deg);
    top: 4px;
    left: 7.8px;
  }
`;
