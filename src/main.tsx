import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import App from './App';
import './index.css';

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(<App />);
