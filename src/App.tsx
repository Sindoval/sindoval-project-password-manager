import './App.css';
import React, { useState } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import { ServiceType } from './types/serviceType';
import ServiceComp from './components/ServiceComp';

function App() {
  const [renderForm, setRenderForm] = useState(true);
  const [listServices, setListServices] = useState<ServiceType[]>([]);
  const [checkedInput, setCheckedInput] = useState(false);

  const onClickNewSenha = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setRenderForm(!renderForm);
  };

  const addNewService = (service: ServiceType): void => {
    setListServices([...listServices, service]);
  };

  const handleDelete = (id: string) => {
    const updatedServices = listServices.filter((service) => service.name !== id);
    setListServices(updatedServices);
  };

  const buttonRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    const { id } = target;
    handleDelete(id);
  };

  const handleChecked = () => {
    setCheckedInput(!checkedInput);
  };

  return (
    <div>
      <Title>Gerenciador de senhas</Title>
      { renderForm ? (
        <>
          <button onClick={ onClickNewSenha }>Cadastrar nova senha</button>
          <label htmlFor="checked">
            Esconder senhas
            <input type="checkbox" id="checked" onChange={ handleChecked } />
          </label>
        </>
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
      <main id="main">
        {listServices.map(({ name, login, password, url }) => (
          <div className="container-service" key={ `${name}: ${login}` }>
            <ServiceComp
              name={ name }
              login={ login }
              password={ password }
              url={ url }
              checked={ checkedInput }
            />
            <button
              data-testid="remove-btn"
              id={ name }
              onClick={ buttonRemove }
            >
              Excluir
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
