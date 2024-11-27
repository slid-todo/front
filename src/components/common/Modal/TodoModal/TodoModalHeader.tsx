import { IoMdClose } from 'react-icons/io';
const TodoModalHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-lg-bold text-slate-800">할 일 생성</span>
      <IoMdClose size={24} className="cursor-pointer" />
    </div>
  );
};

export default TodoModalHeader;
