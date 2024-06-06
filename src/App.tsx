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
      <header>
        <Title>Gerenciador de senhas</Title>
        { renderForm ? (
          <>
            <button
              type="button"
              onClick={ onClickNewSenha }
              className="btn btn-primary"
            >
              Cadastrar nova senha
            </button>
            <div className="form-check form-switch">
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Esconder senhas
                <input
                  className="form-check-input"
                  role="switch"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  checked={ checkedInput }
                  onChange={ handleChecked }
                />
              </label>
            </div>
          </>
        ) : (
          <>
            <Form onClickNewSenha={ onClickNewSenha } newService={ addNewService } />
            <hr />
          </>
        )}
        {listServices.length === 0 ? (
          <div>
            <br />
            <hr />
            <h3>Nenhuma senha cadastrada</h3>
          </div>
        ) : (
          <br />
        )}
      </header>
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
              className="btn btn-danger"
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
