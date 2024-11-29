import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '.';

interface DropdownProps {
  dropdownData: string[];
  onSelectItem: (item: string) => void;
}

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered', // Centered layout을 유지
  },
  tags: ['autodocs'],
  argTypes: {
    dropdownData: {
      control: {
        type: 'object', // 배열 형태로 설정
      },
    },
    onSelectItem: {
      action: 'selected',
      description: 'Callback function when an item is selected.',
    },
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    dropdownData: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    onSelectItem: (item: string) => console.log(`Selected item: ${item}`),
  },
  render: function Render(args: DropdownProps) {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const handleSelectItem = (item: string) => {
      setSelectedItem(item);
      args.onSelectItem(item); // Trigger the Storybook action
    };

    return (
      <div className="relative w-300">
        {' '}
        {/* Tailwind로 변환 */}
        <div className="mb-2 font-bold">
          {' '}
          {/* Tailwind로 변환 */}
          Selected Item: {selectedItem || 'None'}
        </div>
        <Dropdown
          dropdownData={args.dropdownData}
          onSelectItem={handleSelectItem}
        />
      </div>
    );
  },
};
