import { ServiceType } from '../types/serviceType';

export default function ServiceComp(prop: ServiceType) {
  const { name, login, password, url } = prop;

  const formatUrl = (urlInput: string): string => {
    if (!/^https?:\/\//i.test(urlInput)) {
      return `http://${urlInput}`;
    }
    return urlInput;
  };
  return (
    <div>
      <p>
        <a href={ formatUrl(url) } target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </p>
      <p>{login}</p>
      <p>{password}</p>
    </div>
  );
}
