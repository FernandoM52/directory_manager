import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #202020;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  padding-top: 10%;
  @media (max-width: 1366px) {
    padding-top: 20%;
  }
  @media (max-width: 865px) {
    padding-top: 30%;
  }
  @media (max-width: 621px) {
    padding-top: 35%;
  }
  @media (max-width: 510px) {
    padding-top: 50%;
  }
  @media (max-width: 410px) {
    padding-top: 70%;
  }
  span {
    color: #ffffff;
  }
`;

export const Directories = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
  padding: 4%;
`;
