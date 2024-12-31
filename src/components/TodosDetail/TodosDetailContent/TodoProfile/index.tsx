import { FaCamera } from 'react-icons/fa6';

export const TodoProfile = () => {
  return (
    <div className="flex items-center gap-16">
      <div
        className="flex-center my-8 size-56 cursor-pointer rounded-16"
        style={{ backgroundColor: 'black' }} //goalColor
      >
        <FaCamera fill="white" />
      </div>
      <div className="flex flex-col items-start">
        <span className="text-xs-medium text-custom-gray-100">dfdfdf</span>
        <span className="text-base-medium">dfdfdf</span>
      </div>
    </div>
  );
};
