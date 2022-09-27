import styled from "styled-components";

export const WrapperList = styled.div`
  width: calc(100% - 1rem);
  max-width: 736px;
  height: 300px;
  margin: 64px auto 0;
`;

export const HeaderList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;

  div {
    span {
      font-weight: 700;
      font-size: 0.875rem;
      line-height: 17px;
    }

    .created {
      color: var(--blue);
    }

    .done {
      color: var(--purple);
    }

    .counter {
      font-size: 12px;
      border-radius: 8px;
      padding: 2px 8px;
      margin-left: 8px;
      background: var(--gray-400);
    }
  }
`;

export const ContentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
