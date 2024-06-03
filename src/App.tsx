import './App.css';
import React, { useState } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import { ServiceType } from './types/serviceType';
import ServiceComp from './components/ServiceComp';

function App() {
  const [renderForm, setRenderForm] = useState(true);
  const [listServices, setListServices] = useState<ServiceType[]>([]);
  const onClickNewSenha = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setRenderForm(!renderForm);
  };

  const addNewService = (service: ServiceType): void => {
    setListServices([...listServices, service]);
  };

  return (
    <div>
      <Title>Gerenciador de senhas</Title>
      { renderForm ? (
        <button onClick={ onClickNewSenha }>Cadastrar nova senha</button>
      ) : (
        <Form onClickNewSenha={ onClickNewSenha } newService={ addNewService } />
      )}
      {listServices.length === 0 ? (
        <div>
          <br />
          <h3>Nenhuma senha cadastrada</h3>
        </div>
      ) : (
        <br />
      )}
      {listServices.map(({ name, login, password, url }) => (
        <ServiceComp
          key={ `${name}: ${login}` }
          name={ name }
          login={ login }
          password={ password }
          url={ url }
        />
      ))}
    </div>
  );
}

export default App;
