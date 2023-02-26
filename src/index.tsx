import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {createTheme, ThemeProvider} from "@mui/material";


const root = ReactDOM.createRoot(document.getElementById('root')!);
const theme = createTheme({
    palette: {
        primary: {
            main: "#E97F03"
        }
    }
})

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <App/>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);



