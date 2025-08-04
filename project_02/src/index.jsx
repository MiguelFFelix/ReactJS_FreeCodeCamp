import {createRoot} from 'react-dom/client';
import App from './App';
import './index.css'; // Importing the CSS file

const root = createRoot(document.getElementById('root'));

root.render(
    <App />
)