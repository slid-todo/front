export const MyFollow = () => {
  return (
    <div className="flex-center w-full gap-8">
      <div className="flex w-full flex-col items-center gap-8 rounded-8 bg-white p-12">
        <span className="text-sm-semibold text-custom-gray-100">팔로워</span>
        <span className="text-3xl-semibold">31</span>
      </div>
      <div className="flex w-full flex-col items-center gap-8 rounded-8 bg-white p-12">
        <span className="text-sm-semibold text-custom-gray-100">팔로잉</span>
        <span className="text-3xl-semibold">28</span>
      </div>
    </div>
  );
};
