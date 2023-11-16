import { createRoot } from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "0_app/App";
import "0_app/styles/index.scss";
import ThemeProvider from "0_app/prodivers/ui/ThemeProvider";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);
