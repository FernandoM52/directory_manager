import styled from "styled-components";

export const FormDiv = styled.div`
  background-color: #202020;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 12%;
  position: fixed;
  top: 12%;
  z-index: 1;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 2.5rem;
`;

export const DirectoryInput = styled.input`
  width: 15%;
  padding: 10px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  font-size: 20px;
  line-height: 25px;
  pointer-events: ${(props) => (props.disabled ? "none" : "all")};
  background-color: ${(props) => (props.disabled ? "#F2F2F2" : "#ffffff")};
  color: ${(props) => (props.disabled ? "#afafaf" : "#666666")};
  &::placeholder {
    color: #dbdbdb;
  }

  @media (max-width: 950px) {
    width: 25%;
    font-size: 12px;
    line-height: 12px;
  }

  @media (max-width: 600px) {
    width: 25%;
    font-size: 12px;
    line-height: 12px;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: #202020;
  gap: 0.75rem;
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
  @media (max-width: 950px) {
    width: 30%;
    font-size: 15px;
    svg {
      width: 15px;
    }
  }

  @media (max-width: 600px) {
    width: 27%;
    font-size: 10px;
    svg {
      width: 10px;
    }
  }
`;