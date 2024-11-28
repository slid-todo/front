export type TodoType = '생성' | '수정';

export interface TodoModalProps {
  onClose: () => void;
  todoType: TodoType;
}
