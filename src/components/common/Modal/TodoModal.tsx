import { ImCancelCircle } from 'react-icons/im';
import { FaPlus } from 'react-icons/fa';

const TodoModal = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="flex h-676 w-520 flex-col items-start gap-10 rounded-12 bg-white p-24">
        <div className="flex flex-col items-start gap-40 self-stretch">
          <div className="flex flex-col gap-24 self-stretch">
            {/* 헤더 */}
            <div className="flex items-center justify-between">
              <span className="text-lg-bold text-slate-800">할 일 생성</span>
              <ImCancelCircle size={24} className="cursor-pointer" />
            </div>
            {/* 헤더 */}
            {/* 제목 */}
            <div className="flex flex-col items-start gap-12 self-stretch">
              <span className="text-base-semibold text-slate-800">제목</span>
              <input
                className="flex items-center gap-10 self-stretch rounded-12 bg-slate-50 px-24 py-12"
                placeholder="할 일의 제목을 적어주세요"
              />
            </div>
            {/* 제목 */}

            <div className="flex flex-col items-start gap-12">
              {/* 자료 */}
              <div className="flex flex-col items-start gap-12">
                <span className="text-base-semibold text-slate-800">자료</span>
                <div className="flex items-start gap-12">
                  <button className="text-base-medium text-slate-800">
                    파일업로드
                  </button>
                  <button className="text-base-medium text-slate-800">
                    링크 첨부
                  </button>
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
            {/* 목표 */}
            <div className="flex flex-col items-start gap-12 self-stretch">
              <span className="text-base-semibold text-slate-800">목표</span>
              <input
                className="flex flex-col items-start gap-10 self-stretch rounded-12 bg-slate-50 px-20 py-12"
                placeholder="목표를 선택해주세요"
              />
            </div>
            {/* 목표 */}
          </div>
          {/* 확인 버튼 */}
          <button className="flex w-full items-center justify-center gap-10 self-stretch rounded-12 bg-slate-400 py-12">
            <span className="text-base-semibold text-white">확인</span>
          </button>
          {/* 확인 버튼 */}
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
