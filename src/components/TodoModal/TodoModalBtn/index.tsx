import { Button } from '@/components/common/Button/Button';
import { useTodoDataStore } from '@/store/useTodoDataStore';
import { todoDataValidation } from '@/utils/todoDataValidation';

export const TodoModalBtn = () => {
  const { title, target, date, fileName, link } = useTodoDataStore();

  const viewData = () => {
    console.log(title, target, date, fileName, link);
  };

  return (
    <Button
      size="large"
      primary={true}
      className="mt-auto"
      onClick={viewData}
      disabled={todoDataValidation(title, target, date)}
    >
      확인
    </Button>
  );
};
