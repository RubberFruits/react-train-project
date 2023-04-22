import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';

const meta: Meta<typeof LangSwitcher> = {
    title: 'shared/LangSwitcher',
    component: LangSwitcher,
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

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
