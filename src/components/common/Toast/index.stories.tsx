// Toast.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { notify } from '@/store/useToastStore';
import { Button } from '../Button/Button';
import { Toast } from '.';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['success', 'error', 'info'],
      description: '토스트의 타입을 선택하세요.',
    },
    message: {
      control: 'text',
      description: '메시지를 입력하세요.',
    },
    duration: {
      control: { type: 'number' },
      description: '종료까지 걸리는 시간을 입력하세요(밀리초).',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'success',
    message: '성공 메시지입니다!',
    duration: 3000,
  },
  render: function Render(args) {
    const handleClick = () => {
      notify(args.type, args.message, args.duration);
    };

    return (
      <div>
        <Button onClick={handleClick}>Show Toast</Button>
        <Toast /> {/* Toast 컴포넌트를 렌더링합니다 */}
      </div>
    );
  },
};
