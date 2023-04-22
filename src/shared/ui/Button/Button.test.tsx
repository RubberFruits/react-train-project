import { render, screen } from '@testing-library/react';
import { AppButtonTheme, Button } from 'shared/ui/Button/Button';

describe('Button test', () => {
    test('button has text `button test text`', () => {
        render(<Button>button test text</Button>);
        expect(screen.getByText('button test text')).toBeInTheDocument();
    });

    test('with theme `clear` (AppButtonTheme.CLEAR)', () => {
        render(<Button theme={AppButtonTheme.CLEAR}>button test text</Button>);
        expect(screen.getByText('button test text')).toHaveClass('clear');
    });
});
