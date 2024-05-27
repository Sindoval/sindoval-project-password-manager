import './App.css';
import React, { useState } from 'react';
import Title from './components/Title';
import Form from './components/Form';

function App() {
  const [renderForm, setRenderForm] = useState(true);

  const onClickNewSenha = (): void => {
    setRenderForm(!renderForm);
  };

  return (
    <div>
      <Title>Gerenciador de senhas</Title>
      { renderForm ? (
        <button onClick={ onClickNewSenha }>Cadastrar nova senha</button>
      ) : (
        <Form onClickNewSenha={ onClickNewSenha } />
      )}
    </div>
  );
}

export default App;
