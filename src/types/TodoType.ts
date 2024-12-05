export type TodoType = '생성' | '수정';

export interface TodoModalProps {
  todoType: TodoType;
  onClose?: () => void;
}
