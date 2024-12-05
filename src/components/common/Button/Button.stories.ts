import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
        Button 컴포넌트는 onClick 이벤트를 처리할 수 있는 컴포넌트입니다.
        
    프로젝트의 디자인 시스템에 맞춰 
    size, primary, radius, disabled, pending, onClick, children의 Props를 가지고 있습니다.
    children을 제외한 Props는 기본 설정값이 존재하기에, 작성하지 않아도 Button 컴포넌트를 사용할 수 있습니다.

    className을 추가하여 css를 커스텀할 수 있습니다. 대표적으로 width 값을 지정할 수 있습니다.`,
      },
    },
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
    className: {
      control: `text`,
    },
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

export const DisabledAndPrimaryFalse: StoryObj<typeof Button> = {
  args: {
    primary: false,
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

export const PendingAndPrimaryFalse: StoryObj<typeof Button> = {
  args: {
    primary: false,
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
