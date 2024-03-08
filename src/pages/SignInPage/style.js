import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  h1{
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 300px;
  height: 45px;
  margin-bottom: 6px;
  padding: 10px;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  
  font-size: 20px;
  line-height: 25px;

  pointer-events: ${(props) => props.disabled ? "none" : "all"};
  
  background-color: ${(props) => props.disabled ? "#F2F2F2" : "#FFFFFF"};
  color: ${(props) => props.disabled ? "#AFAFAF" : "#666666"};

  &::placeholder{
    color: #DBDBDB;
  }
`;

export const Button = styled.button`
  width: 300px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4.5px;
  
  cursor: pointer;
  pointer-events: ${(props) => props.disabled ? "none" : "all"};
  opacity: ${(props) => props.disabled ? 0.7 : 1};
  
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  
  background: #5b5959;
  color: #FFFFFF;
`;
