import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextTheme } from 'shared/ui/Text/Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Title',
        text: 'Text',
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title',
    },
};

export const Error: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        theme: TextTheme.ERROR,
    },
};
