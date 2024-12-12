import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '.';

const TODO_MOCK_DATA = [
  {
    goalId: 1,
    goalTitle: '토익 900점 맞기',
    color: 'blue', // 색상은 임의로 설정
    createdAt: new Date().toISOString(), // 현재 날짜와 시간을 ISO 형식으로 생성
  },
  {
    goalId: 2,
    goalTitle: '달리기 1등 하기',
    color: 'green', // 색상은 임의로 설정
    createdAt: new Date().toISOString(),
  },
  {
    goalId: 3,
    goalTitle: '체중 10kg 감량',
    color: 'red', // 색상은 임의로 설정
    createdAt: new Date().toISOString(),
  },
  {
    goalId: 4,
    goalTitle: '복근 만들기',
    color: 'yellow', // 색상은 임의로 설정
    createdAt: new Date().toISOString(),
  },
  {
    goalId: 5,
    goalTitle: '복싱 배우기',
    color: 'purple', // 색상은 임의로 설정
    createdAt: new Date().toISOString(),
  },
];

interface DropdownProps<T> {
  dropdownData: T[];
  onSelectItem: (item: T) => void;
  isOpenDropdown: boolean;
  renderItem: (item: T) => JSX.Element; // renderItem prop added
}

const meta: Meta<DropdownProps<(typeof TODO_MOCK_DATA)[number]>> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered', // Centered layout을 유지
  },
  tags: ['autodocs'],
  argTypes: {
    dropdownData: {
      control: {
        type: 'object',
      },
      description: 'Array of items to display in the dropdown.',
    },
    onSelectItem: {
      action: 'selected',
      description: 'Callback function when an item is selected.',
    },
    isOpenDropdown: {
      control: {
        type: 'boolean',
      },
      description: 'Controls whether the dropdown is open or closed.',
    },
    renderItem: {
      description: 'Function that renders each item in the dropdown.',
    },
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    dropdownData: TODO_MOCK_DATA, // Use the mock data for dropdown
    onSelectItem: (item: (typeof TODO_MOCK_DATA)[0]) =>
      console.log(`Selected goal: ${item.goalTitle}`), // Callback for selected item
    isOpenDropdown: false,
    renderItem: (item: (typeof TODO_MOCK_DATA)[0]) => (
      <span>{item.goalTitle}</span>
    ),
  },
  render: function Render(args: DropdownProps<(typeof TODO_MOCK_DATA)[0]>) {
    const [selectedItem, setSelectedItem] = useState<
      (typeof TODO_MOCK_DATA)[0] | null
    >(null);
    const [isOpen, setIsOpen] = useState<boolean>(args.isOpenDropdown);

    const handleSelectItem = (item: (typeof TODO_MOCK_DATA)[0]) => {
      setSelectedItem(item);
      args.onSelectItem(item); // Trigger the Storybook action
    };

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="relative w-300">
        <div className="mb-2 font-bold">
          Selected Goal: {selectedItem ? selectedItem.goalTitle : 'None'}
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
          isOpenDropdown={isOpen}
          renderItem={args.renderItem} // Pass the renderItem prop here
        />
      </div>
    );
  },
};
