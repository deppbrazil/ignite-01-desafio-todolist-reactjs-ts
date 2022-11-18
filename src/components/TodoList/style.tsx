import styled from "styled-components";

export const WrapperTodoList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentTodoList = styled.div`
  width: 100%;
  max-width: 736px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin: 64px auto 0;

  @media screen and (max-width: calc(736px + 1rem)) {
    width: calc(100% - 1rem);
  }

  .header-list {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

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
  }

  .content-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;

    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    span {
      font-weight: 400;
      color: var(--gray-300);
    }
  }

  .list-empty {
    padding: 64px 24px;
    border-radius: 16px;
    border-top: 1px solid var(--gray-400);

    div {
      margin-top: 16px;
    }
  }
`;
