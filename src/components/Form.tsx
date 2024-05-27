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
    </form>
  );
}
