import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppButtonTheme, Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Text',
        theme: AppButtonTheme.SECONDARY,
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: AppButtonTheme.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: AppButtonTheme.OUTLINE,
    },
};
