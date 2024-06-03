import { ServiceCheckedType } from '../types/serviceType';

export default function ServiceComp(prop: ServiceCheckedType) {
  const { name, login, password, url, checked } = prop;

  const formatUrl = (urlInput: string): string => {
    if (!/^https?:\/\//i.test(urlInput)) {
      return `http://${urlInput}`;
    }
    return urlInput;
  };

  const passwordCheck = (string: string): string => {
    const tamanho = string.length;
    let senha = '';
    for (let i = 0; i < tamanho; i += 1) {
      senha += '*';
    }
    return senha;
  };

  return (
    <>
      <p>
        <a href={ formatUrl(url) } target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </p>
      <p>{login}</p>
      {checked ? (
        <p>******</p>
      ) : (
        <p>{password}</p>
      )}
    </>
  );
}
