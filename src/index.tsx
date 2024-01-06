import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '0_app/App';
import '0_app/styles/index.scss';
import { StoreProvider } from '0_app/prodivers/StoreProvider';
import { ErrorBoundary } from '0_app/prodivers/ErrorBoundary';
import ThemeProvider from '0_app/prodivers/theme/ThemeProvider';
import '5_shared/config/i18n/i18n';

const container = document.getElementById('root');

if (container) {
    hydrateRoot(
        container, (
            <StoreProvider>
                <BrowserRouter>
                    <ErrorBoundary>
                        <ThemeProvider>
                            <App />
                        </ThemeProvider>
                    </ErrorBoundary>
                </BrowserRouter>
            </StoreProvider>
        ),
    );
}
