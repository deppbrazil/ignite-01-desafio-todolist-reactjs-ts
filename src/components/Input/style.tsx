import styled from "styled-components";

export const SInput = styled.input`
  width: auto;
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
`;
