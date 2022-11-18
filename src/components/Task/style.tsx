import styled from "styled-components";

export const WrapperTask = styled.div`
  width: 100%;
  max-width: 736px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: stretch;
  position: relative;
  border-radius: 8px;
  padding: 16px 52px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  border: 1px solid var(--gray-400);
  background: var(--gray-500);

  input[type="checkbox"] {
    top: 16px;
    left: 16px;
  }

  label {
    width: 100%;
    font-size: 0.875rem;
    line-height: 19.6px;
  }

  .label-checked {
    text-decoration: line-through;
    color: var(--gray-300);
  }
`;
