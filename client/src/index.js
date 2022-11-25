import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as ReactDOMClient from 'react-dom/client';
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";

export const Context = createContext(null)

const root = ReactDOMClient.createRoot(document.getElementById('root'))
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        device: new DeviceStore(),
    }}>
        <App />
    </Context.Provider>
)