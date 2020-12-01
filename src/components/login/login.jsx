import React from "react";
import loginImg from "../../login.svg";
import {BasedContainer, Header, Content, Image,
Form, FormGroup, Footer} from "../ComponentesEstilizados/ComponentsStyled";

export const Login = () =>{
    return (
      <BasedContainer>
        <Header>Login</Header>
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
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </FormGroup>
          </Form>
        </Content>
        <Footer>
          <button type="button" className="btn">
            Login
          </button>
        </Footer>
      </BasedContainer>
    );
  }

