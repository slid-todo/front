import { Meta, StoryObj } from '@storybook/react';
import { Filter } from '.';

const meta: Meta<typeof Filter> = {
  title: 'Components/Filter',
  component: Filter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    filters: {
      options: ['default', 'active'],
    },
    className: {
      control: `text`,
    },
  },
};

export default meta;

export const Default: StoryObj<typeof Filter> = {
  args: {
    filters: ['All', 'To Do', 'Completed', 'In Progress'],
  },
};
