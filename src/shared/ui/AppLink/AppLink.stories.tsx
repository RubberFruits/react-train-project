import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/',
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        children: 'AppLink',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const Secondary: Story = {
    args: {
        children: 'AppLink',
        theme: AppLinkTheme.SECONDARY,
    },
};
