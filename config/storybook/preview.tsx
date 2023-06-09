import { Decorator } from '@storybook/react';
import StyleDecorator from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import ThemeDecorator from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import RouteDecorator from '../../src/shared/config/storybook/RouteDecorator/RouteDecorator';
import {
    TranslationDecorator,
} from '../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator';

export const parameters = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export const decorators:Decorator[] = [
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    RouteDecorator,
];
