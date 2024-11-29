import { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/common/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'gray',
      values: [{ name: 'gray', value: '#C4C4C4' }],
    },
    docs: {
      description: {
        component: `
      Input 컴포넌트는 텍스트 및 비밀번호 입력을 처리하는 폼 요소입니다.
      
    이 컴포넌트는 기본적으로 사용자가 입력할 수 있는 텍스트 필드를 제공합니다.
    또한, 비밀번호 입력 필드와 같이 보안 입력을 위해 사용할 수 있습니다.
    다양한 스타일링 옵션과 함께 사용이 가능합니다.

    width 값은 className으로 넘겨주면 사용 가능합니다.
    `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['text', 'password'],
      control: { type: 'select' },
      description: '입력 필드의 타입',
    },
    placeholder: {
      control: { type: 'text' },
      description: '입력 필드에 표시될 기본 텍스트',
      defaultValue: 'Enter text',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '입력 필드를 비활성화할지 여부',
      defaultValue: false,
    },
    value: {
      control: { type: 'text' },
      description: '입력 필드의 값',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const _Default: Story = {
  args: {
    type: 'text',
    placeholder: 'placeholder',
  },
};

export const _PasswordInput: Story = {
  args: {
    type: 'password',
    value: 'password',
    placeholder: 'enter password',
  },
};

export const _DisabledInput: Story = {
  args: {
    type: 'text',
    placeholder: 'nope',
    disabled: true,
  },
};

export const _LargeInput: Story = {
  args: {
    type: 'text',
    placeholder: 'Large',
    className: 'w-600',
  },
};
