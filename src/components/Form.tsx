import React, { useState, useEffect } from 'react';
import { passwordCheck } from '../utils/inputTests';

interface FormProps {
  onClickNewSenha: () => void;
}

export default function Form({ onClickNewSenha }: FormProps) {
  const [isDesabled, setIsDesabled] = useState(true);
  const [inputName, setInputName] = useState('');
  const [inputLogin, setInputLogin] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  useEffect(() => {
    desabledButton();
  }, [inputName, inputLogin, inputPassword]);

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setInputName(target.value);
  };

  const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setInputLogin(target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setInputPassword(target.value);
  };

  const desabledButton = () => {
    const passwordInput = passwordCheck(inputPassword);

    if (!passwordInput || inputLogin.length < 1 || inputName.length < 1) {
      setIsDesabled(true);
    } else {
      setIsDesabled(false);
    }
  };

  const hasLetter = /[A-Za-z]/.test(inputPassword);
  const hasNumber = /[0-9]/.test(inputPassword);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(inputPassword);

  return (
    <form action="">
      <label htmlFor="serviço">Nome do serviço</label>
      <input
        type="text"
        name="serviço"
        id="serviço"
        value={ inputName }
        onChange={ (e) => handleName(e) }
      />
      <label htmlFor="login">Login</label>
      <input
        type="text"
        name="login"
        id="login"
        value={ inputLogin }
        onChange={ (e) => handleLogin(e) }
      />
      <label htmlFor="password">Senha</label>
      <input
        type="password"
        name="password"
        id="password"
        value={ inputPassword }
        onChange={ (e) => handlePassword(e) }
      />
      <label htmlFor="url">URL</label>
      <input type="text" name="url" id="url" />
      <button disabled={ isDesabled }>Cadastrar</button>
      <button onClick={ () => onClickNewSenha() }>Cancelar</button>
      { inputPassword.length < 8 ? (
        <p className="invalid-password-check">Possuir 8 ou mais caracteres</p>
      ) : (
        <p className="valid-password-check">Possuir 8 ou mais caracteres</p>
      ) }
      { inputPassword.length > 16 ? (
        <p className="invalid-password-check">Possuir até 16 caracteres</p>
      ) : (
        <p className="valid-password-check">Possuir até 16 caracteres</p>
      ) }
      { !hasLetter || !hasNumber ? (
        <p className="invalid-password-check">Possuir letras e números</p>
      ) : (
        <p className="valid-password-check">Possuir letras e números</p>
      )}
      { !hasSpecialChar ? (
        <p className="invalid-password-check">Possuir algum caractere especial</p>
      ) : (
        <p className="valid-password-check">Possuir algum caractere especial</p>
      )}
    </form>
  );
}
