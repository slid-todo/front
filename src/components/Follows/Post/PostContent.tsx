interface PostContentProps {
  text: string;
}

export function PostContent(props: PostContentProps) {
  const { text } = props;

  return (
    <div className="mx-16 my-8 text-sm-normal text-custom-gray-300">{text}</div>
  );
}
