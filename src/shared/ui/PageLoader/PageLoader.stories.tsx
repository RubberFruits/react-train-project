import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

const meta: Meta<typeof PageLoader> = {
    title: 'shared/PageLoader',
    component: PageLoader,
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof PageLoader>;

export const Light: Story = {
    args: {
    },
};

Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
    args: {
    },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
