import React, { useState, useEffect } from 'react';
import { passwordCheck } from '../utils/inputTests';
import { ServiceType } from '../types/serviceType';

interface FormProps {
  onClickNewSenha: (param: React.MouseEvent<HTMLButtonElement>) => void;
  newService: (param: ServiceType) => void;
}

export default function Form({ onClickNewSenha, newService }: FormProps) {
  const [isDesabled, setIsDesabled] = useState(true);
  const [formInfo, setFormInfo] = useState({
    name: '',
    login: '',
    password: '',
    url: '',
  });

  useEffect(() => {
    desabledButton();
  }, [formInfo]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormInfo({
      ...formInfo,
      [name]: value,
    });
  };

  const desabledButton = () => {
    const passwordInput = passwordCheck(formInfo.password);

    if (!passwordInput || formInfo.login.length < 1 || formInfo.name.length < 1) {
      setIsDesabled(true);
    } else {
      setIsDesabled(false);
    }
  };

  const onClickCadastrar = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    newService(formInfo);
    setFormInfo({
      name: '',
      login: '',
      password: '',
      url: '',
    });
    onClickNewSenha(event);
  };

  const hasLetter = /[A-Za-z]/.test(formInfo.password);
  const hasNumber = /[0-9]/.test(formInfo.password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(formInfo.password);

  return (
    <div>
      <form action="">
        <label htmlFor="serviço">Nome do serviço</label>
        <input
          type="text"
          name="name"
          id="serviço"
          value={ formInfo.name }
          onChange={ handleChange }
        />
        <label htmlFor="login">Login</label>
        <input
          type="text"
          name="login"
          id="login"
          value={ formInfo.login }
          onChange={ handleChange }
        />
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          name="password"
          id="password"
          value={ formInfo.password }
          onChange={ handleChange }
        />
        <label htmlFor="url">URL</label>
        <input
          type="text"
          name="url"
          id="url"
          value={ formInfo.url }
          onChange={ handleChange }
        />
        <button
          disabled={ isDesabled }
          onClick={ (e) => onClickCadastrar(e) }
        >
          Cadastrar
        </button>

        <button
          onClick={ (e) => onClickNewSenha(e) }
        >
          Cancelar
        </button>

        { formInfo.password.length < 8 ? (
          <p className="invalid-password-check">Possuir 8 ou mais caracteres</p>
        ) : (
          <p className="valid-password-check">Possuir 8 ou mais caracteres</p>
        ) }
        { formInfo.password.length > 16 ? (
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
    </div>
  );
}
