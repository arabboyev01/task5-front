import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  max-width: 400px;
  margin-left: 2rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  label {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  input,
  select {
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;