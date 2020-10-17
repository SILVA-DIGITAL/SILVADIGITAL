import styled from 'styled-components';
import { Form, Row } from 'react-bootstrap';

export const StyledRow = styled(Row)`
  margin-top: 7rem;
`;

export const LogoWrapperDiv = styled.div`
  width: var(--formWidth);
  display: flex;
  justify-content: center;

  svg {
    width: 60%;
    margin-bottom: 3rem;
  }
`;

export const StyledForm = styled(Form)`
  --formWidth: 45rem;

  width: var(--formWidth);
  padding: 1rem 2rem 2rem;
  color: ${({ theme }) => theme.palette.textColor};
  background: white;
  box-shadow: 0px 0px 55px -10px rgba(0, 0, 0, 0.35);

  label {
    display: inline-block;
  }

  .form-group {
    margin-bottom: 0.5rem;

    .form-label {
      font-family: ;
      text-transform: uppercase;
      margin: 0;
      color: ${({ theme }) => theme.palette.textGrey};
    }
  }

  .form-control {
    border-radius: 0;
  }

  .form-check {
    display: inline-block;
    margin-left: 0.5rem;
  }

  .forgot-password {
    display: block;
    margin-top: 2rem;
    text-align: center;
    font-size: 1.2rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.75rem;
    margin: 1rem auto auto;
    width: 100%;
    padding: 0;
    font-size: 1.9rem;
    border: 0;
    border-radius: 0;
    background: ${({ theme }) => theme.palette.secondaryBlue};

    &:hover {
      background: lighten(${({ theme }) => theme.palette.secondaryBlue}, 25%);
    }

    &:disabled {
      background: #007bff7a !important;
    }

    .spinner-border {
      font-size: 1rem !important;
    }
  }
`;

export const StyledFormHeader = styled.div`
  background: ${({ theme }) => theme.palette.darkGrey};
  height: 2.9rem;
  width: var(--formWidth);
  text-transform: uppercase;
  color: white;
  padding: 0.6rem 1rem;
  font-weight: bold;
  font-size: 1.2rem;
  position: relative;
  text-align: left;
`;

export const ErrorMessageP = styled.p`
  color: red;
  width: 100%;
  text-align: center;
  margin: 16px 0 0;
`;
