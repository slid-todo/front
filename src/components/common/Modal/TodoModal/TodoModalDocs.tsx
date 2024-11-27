import { FaPlus } from 'react-icons/fa';

const TodoModalDocs = () => {
  return (
    <div className="flex flex-col items-start gap-12">
      {/* 자료 */}
      <div className="flex flex-col items-start gap-12">
        <span className="text-base-semibold text-slate-800">자료</span>
        <div className="flex items-start gap-12">
          <button className="text-base-medium text-slate-800">
            파일업로드
          </button>
          <button className="text-base-medium text-slate-800">링크 첨부</button>
        </div>
      </div>
      {/* 자료 */}
      {/* 파일업로드 */}
      <div className="flex h-184 w-472 shrink-0 items-center justify-center rounded-12 bg-slate-50">
        <button className="inline-flex flex-col items-center justify-center gap-8">
          <FaPlus size={24} className="text-slate-400" />
          {/* 크기 조정 가능 */}
          <span className="text-base-normal text-slate-400">
            파일을 업로드해주세요
          </span>
        </button>
      </div>
      {/* 파일업로드 */}
    </div>
  );
};

export default TodoModalDocs;
