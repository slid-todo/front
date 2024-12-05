import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '.';

interface DropdownProps {
  dropdownData: string[];
  onSelectItem: (item: string) => void;
  isOpenDropdown: boolean;
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
    isOpenDropdown: {
      control: {
        type: 'boolean', // Boolean 타입으로 설정
      },
      description: 'Controls whether the dropdown is open or closed.',
    },
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    dropdownData: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    onSelectItem: (item: string) => console.log(`Selected item: ${item}`),
    isOpenDropdown: false,
  },
  render: function Render(args: DropdownProps) {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(args.isOpenDropdown);

    const handleSelectItem = (item: string) => {
      setSelectedItem(item);
      args.onSelectItem(item); // Trigger the Storybook action
    };

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="relative w-300">
        <div className="mb-2 font-bold">
          Selected Item: {selectedItem || 'None'}
        </div>
        <button
          className="mb-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          onClick={toggleDropdown}
        >
          Toggle Dropdown
        </button>
        <Dropdown
          dropdownData={args.dropdownData}
          onSelectItem={handleSelectItem}
          isOpenDropdown={isOpen} // 드롭다운 열림 상태 전달
        />
      </div>
    );
  },
};
