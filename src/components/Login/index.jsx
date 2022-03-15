import React, { useState } from "react";
import {
  Container,
  Content,
  InputContent,
  Input,
  Span,
  ButtonLogin,
  RegisterContent,
} from "./styles";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export const Login = () => {
  const [typePassword, setTypePassword] = useState("password");
  const [email, setEmail] = useState();
  const [password, setPasword] = useState();

  const changeTypePassword = () => {
    if (typePassword === "password") {
      setTypePassword("text");
    } else {
      setTypePassword("password");
    }
  };

  return (
    <Container>
      <Content>
        <InputContent>
          <FaEnvelope />
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputContent>
        <InputContent>
          <FaLock />
          <Input
            type={typePassword}
            placeholder="Senha"
            value={password}
            onChange={(e) => setPasword(e.target.value)}
          />

          {typePassword === "password" ? (
            <FaEye onClick={changeTypePassword} />
          ) : (
            <FaEyeSlash onClick={changeTypePassword} />
          )}
        </InputContent>
        <Span color="#8257e5">Esqueci minha senha</Span>

        <ButtonLogin disabled={!email || !password}>ENTRAR</ButtonLogin>

        <RegisterContent>
          <Span color="#ccc">Não tem uma conta? </Span>
          <Span color="#8257e5">Registre-se</Span>
        </RegisterContent>
      </Content>
    </Container>
  );
};
