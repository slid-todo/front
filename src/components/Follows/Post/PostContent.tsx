interface PostContentProps {
  text: string;
}

export function PostContent({ text }: PostContentProps) {
  return (
    <div style={{ marginBottom: '8px' }}>
      <p>{text}</p>
    </div>
  );
}
