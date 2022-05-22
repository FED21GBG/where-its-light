import './css/main.css'
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {<App slideIndex = {0} />}/>
            <Route path="/events" element = {<App slideIndex = {1} />}/>
            <Route path="/cart" element = {<App slideIndex = {2} />}/>
            <Route path="/tickets" element = {<App tickets = {true} />}/>
        </Routes>
    </BrowserRouter>
)