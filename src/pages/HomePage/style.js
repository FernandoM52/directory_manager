import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #202020;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  span {
    color: #fff;
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
