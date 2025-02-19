import styled from "styled-components";

export const BasedContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e7c495;
`;

export const Header = styled.div`
  font-size: 24px;
  font-family: "Open Sans", sans-serif;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.div`
  width: 21em;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Form = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  label {
    font-size: 15px;
  }
  input {
    margin-top: 6px;
    min-width: 18em;
    height: 37px;
    padding: 0px 10px;
    font-size: 16px;
    font-family: "Open Sans", sans-serif;
    background-color: #f3f3f3;
    border: 0;
    border-radius: 20px;
    margin-bottom: 31px;
    transition: all 250ms ease-in-out;
    &:hover {
      //background-color: #ffffff;
      //box-shadow: 0px 0px 14px 0.3px #0e81ce96;
    }

    &:focus {
      outline: none;
      box-shadow: 0px 0px 12px 0.8px #3474dbb2;
    }
  }
`;

export const Footer = styled.div`
  margin-top: 3em;
`;
