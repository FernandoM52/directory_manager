import styled from "styled-components";

export const Content = styled.header`
  display: flex;
  background-color: #303134;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  height: 12%;
  padding: 0 2px 5px 2px;
  z-index: 2;
  h1 {
    padding-left: 4%;
    color: #ffffff;
    font-size: 24px;
    cursor: pointer;
  }
`;

export const Logout = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-right: 4%;
  font-size: 24px;
  color: #ffffff;
  cursor: pointer;
`;
