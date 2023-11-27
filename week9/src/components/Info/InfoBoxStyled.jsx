import styled from 'styled-components';

export const StyledInput = styled.input`
  border: 1px solid black;
  padding: 10px 15px;
  outline: none;
  box-shadow: none;
  border-radius: 8px;
  width: 65vh;
  height: 8vh;
  font-size: 20px;
  display: block;
`;

export const InfoForm = styled.form`
  margin-left: 30px;
  font-size: 30px;
`;

export const InfoTitle = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const WarningMsg = styled.div`
  font-weight: bold;
  color: red;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const SubmitBtn = styled.button`
  background-color: rgba(3, 38, 65, 1);
  color: white;
  font-size: 22px;
  width: 60vh;
  height: 8vh;
  border-radius: 35px;
  border: none;
  outline: none;
  box-shadow: none;
  cursor: pointer;
`;

export const NotCorrectBtn = styled.button`
  background-color: #00000016;
  color: white;
  font-size: 22px;
  width: 60vh;
  height: 8vh;
  border-radius: 35px;
  border: none;
  outline: none;
  box-shadow: none;
  cursor: pointer;
`;
