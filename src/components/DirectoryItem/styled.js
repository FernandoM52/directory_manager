import styled from "styled-components";

export const Directory = styled.li`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 150px;
  border-radius: 7px;
  padding: 0.5rem;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 20px;
  text-overflow: ellipsis;
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: #dfe3e7;
  }

  h2, p {
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 600;
      span {
        color: #303134;
        font-weight: 400;
      }
    }

  svg {
    width: 20px;
    height: 20px;
    position: absolute;
    left: 87%;
    top: 80%;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  >div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;