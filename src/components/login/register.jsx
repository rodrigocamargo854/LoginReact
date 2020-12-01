import React from "react";
import loginImg from "../../login.svg";
import { BasedContainer, Content, Footer, Form, FormGroup, Header, Image } from "../ComponentesEstilizados/ComponentsStyled";

export const Register = () => {
    return (
      <BasedContainer>
        <Header>Register</Header>
        <Content>
          <Image>
            <img src={loginImg} />
          </Image>
          <Form>
            <FormGroup>
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </FormGroup>
          </Form>
        </Content>
        <Footer>
          <button type="button" className="btn">
            Register
          </button>
        </Footer>
      </BasedContainer>
    );
  }
