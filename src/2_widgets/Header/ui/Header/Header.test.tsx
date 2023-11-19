import { screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { renderWithTranslation } from '5_shared/libs/tests/renderWithTranslation';
import { Header } from './Header';

describe('Header', () => {
    test('Header is rendered', () => {
        const HeaderWithTranslation = withTranslation()(Header);
        renderWithTranslation(<HeaderWithTranslation />);
        expect(screen.getByTestId('header')).toBeInTheDocument();
    });
});
