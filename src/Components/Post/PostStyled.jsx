import styled from "styled-components";

export const PostStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fbfbfb;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 12px;
  width: 22.438rem;
  margin-top: 15px;

  .container-posts {
    h6 {
      margin-bottom: 20px;
      p {
        font-weight: 400;
        font-size: 18px;
      }
    }
  }
  h6 {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    flex: none;
    color: #6f6f6f;
    margin-top: 9px;
    margin-left: 10px;
  }

  .container-arrow {
    display: flex;
    width: 100%;
    margin-top: 23px;
    gap: 10px;
    div {
      display: flex;
      align-items: center;
      background: #fbfbfb;
      border: 1px solid #e0e0e0;
      border-radius: 28px;
      padding: 8px;
    }
    h6 {
      margin: 0 5px;
    }
  }
`;
