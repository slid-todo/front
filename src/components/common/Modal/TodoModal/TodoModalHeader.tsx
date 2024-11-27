import { ImCancelCircle } from 'react-icons/im';
const TodoModalHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-lg-bold text-slate-800">할 일 생성</span>
      <ImCancelCircle size={24} className="cursor-pointer" />
    </div>
  );
};

export default TodoModalHeader;
