import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    primary: {
      control: { type: 'boolean' },
    },
    radius: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    pending: {
      control: { type: 'boolean' },
    },
    onClick: { action: 'clicked' },
    children: {
      control: 'text',
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof Button> = {
  args: {
    primary: true,
    children: '기본 스타일 버튼',
  },
};

export const Radius: StoryObj<typeof Button> = {
  args: {
    radius: false,
    children: '둥근 버튼',
  },
};

export const Disabled: StoryObj<typeof Button> = {
  args: {
    disabled: true,
    children: '비활성화된 버튼',
  },
};

export const Pending: StoryObj<typeof Button> = {
  args: {
    pending: true,
    children: '로딩 중',
  },
};

export const Small: StoryObj<typeof Button> = {
  args: {
    size: 'small',
    children: '작은 버튼',
  },
};

export const Medium: StoryObj<typeof Button> = {
  args: {
    size: 'medium',
    children: '중간 버튼',
  },
};

export const Large: StoryObj<typeof Button> = {
  args: {
    size: 'large',
    children: '큰 버튼',
  },
};

export const AllOptions: StoryObj<typeof Button> = {
  args: {
    size: 'large',
    primary: true,
    radius: true,
    disabled: false,
    pending: false,
    children: '전체 옵션 버튼',
  },
};
