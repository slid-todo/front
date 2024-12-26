import Image from 'next/image';

export const UserProfileContent = () => {
  const images = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    src: 'https://slid-todo.s3.ap-northeast-2.amazonaws.com/a19c4793-d33b-4be6-9f65-097bed5a6709_testmouse1.png',
    alt: `프로필 사진 ${index + 1}`,
  }));

  return (
    <div className="mt-8 grid grid-cols-3 gap-8">
      {images.map((image) => (
        <Image
          key={image.id}
          width={48}
          height={48}
          className="flex h-109 w-full rounded-4"
          priority
          src={image.src}
          alt={image.alt}
        />
      ))}
    </div>
  );
};
