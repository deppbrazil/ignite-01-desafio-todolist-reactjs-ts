import styled from "styled-components";

export const WrapperInput = styled.div`
  width: 100%;

  .is-block {
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

  input[type="checkbox"] {
    cursor: pointer;
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    left: 0;
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
