import styled from "styled-components";

export const Content = styled.div`
  background-color: #202020;
  display: flex;
  width: 100%;
  min-height: 100vh;
  padding: 4%;
  padding-top: 17%;
  @media (max-width: 1366px) {
    padding-top: 25%;
  }
  @media (max-width: 865px) {
    padding-top: 30%;
  }
  @media (max-width: 700px) {
    padding-top: 40%;
  }
  @media (max-width: 510px) {
    padding-top: 50%;
  }
  @media (max-width: 410px) {
    padding-top: 70%;
  }
`;

export const CurrentDirectory = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  width: 50%;
  > p {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
  }
`;

export const DirectoryEditForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  input {
    width: 220px;
  }
  input {
    @media (max-width: 500px) {
      width: 150px;
    }
    @media (max-width: 350px) {
      width: 100px;
    }
  }
`;

export const EditButton = styled.button`
  background-color: #fff;
  color: #202020;
  width: 220px;
  border-radius: 6.25rem;
  border-width: 0;
  padding: 1.125rem 1.25rem 1.125rem 1rem;
  pointer-events: ${(props) => (props.disabled ? "none" : "all")};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #e0e4ed;
  }
  @media (max-width: 500px) {
    width: 150px;
  }
  @media (max-width: 350px) {
    width: 100px;
  }
`;

export const SubdirectoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  gap: 10px;
  > p {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
  }
`;

export const Subdirectories = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;
