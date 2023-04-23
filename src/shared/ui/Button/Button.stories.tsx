import type { Meta, StoryObj } from '@storybook/react';
import { AppButtonTheme, Button, ButtonSize } from './Button';

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

export const OutlineSizeL: Story = {
    args: {
        children: 'Text',
        theme: AppButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};

export const BackgroundTheme: Story = {
    args: {
        children: 'Text',
        theme: AppButtonTheme.BACKGROUND,
    },
};

export const BackgroundInvertedTheme: Story = {
    args: {
        children: 'Text',
        theme: AppButtonTheme.BACKGROUND_INVERTED,
    },
};

export const Square: Story = {
    args: {
        children: '>',
        theme: AppButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
};

export const SquareM: Story = {
    args: {
        children: '>',
        theme: AppButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M,
    },
};

export const SquareL: Story = {
    args: {
        children: '>',
        theme: AppButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareXL: Story = {
    args: {
        children: '>',
        theme: AppButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};
