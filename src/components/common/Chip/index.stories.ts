import { Meta, StoryObj } from '@storybook/react';
import { Chip } from '.';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'active'],
    },
    size: {
      options: ['sm', 'lg'],
    },
  },
};

export default meta;

export const Default: StoryObj<typeof Chip> = {
  args: {
    variant: 'default',
    size: 'sm',
    children: 'Default Chip',
  },
};

export const Active: StoryObj<typeof Chip> = {
  args: {
    variant: 'active',
    size: 'sm',
    children: 'Active Chip',
  },
};

export const Large: StoryObj<typeof Chip> = {
  args: {
    variant: 'default',
    size: 'lg',
    children: 'Large Chip',
  },
};
