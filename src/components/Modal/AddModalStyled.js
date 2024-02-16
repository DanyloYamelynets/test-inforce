import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 413px;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #d9f3ff;
  border-radius: 15px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 150px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  height: 20px;
  width: 270px;
  border: 1px solid black;
  border-radius: 6px;
  padding: 4px 6px;
  border-radius: 5px;
  &:hover,
  &:focus {
    border: 1px solid #324a98;
    transition: 250ms;
  }
`;

export const FileInput = styled.input`
  margin-top: 5px;
`;

export const Button = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  max-width: 150px;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid #005c84bd;
  background-color: #ddeefd;
  font-size: 15px;
  font-weight: 700;
  color: #01155b;
  transition: 250ms;
  &:hover,
  &:focus {
    background-color: #0051ab;
    color: white;
    transition: 250ms;
  }
`;
export const ButtonCancel = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid #710101ba;
  background-color: #fce3e3;
  font-size: 15px;
  font-weight: 700;
  color: #450000;
  transition: 250ms;
  &:hover,
  &:focus {
    background-color: #7c0000;
    color: white;
    transition: 250ms;
  }
  margin-left: 130px;
  text-align: center;
`;

export const BtnCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
