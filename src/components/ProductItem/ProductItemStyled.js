import styled from "styled-components";

export const OneProduct = styled.div`
  width: 300px;
  height: auto;
  flex-direction: column;
  justify-content: flex-start;
  display: flex;
  background-color: rgb(236 246 255 / 92%);
  border-radius: 12px;
  border: 1px solid #001c6b;
`;

export const Image = styled.img`
  width: 100%;
  height: 250px;
  margin-bottom: 10px;
  border-radius: 12px;
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 24px;
  margin-bottom: 5px;
`;

export const Info = styled.p`
  margin-bottom: 5px;
`;

export const InfoCont = styled.div`
  padding: 10px;
`;

export const ButtonDel = styled.button`
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
  margin-left: 15px;
  margin-bottom: 10px;
  text-align: center;
`;
export const Button = styled.button`
  margin-left: 10px;
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
