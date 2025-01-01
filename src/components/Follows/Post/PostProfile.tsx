interface PostProfileProps {
  createdAt: string;
  userName: string;
}

export function PostProfile({ createdAt, userName }: PostProfileProps) {
  return (
    <div style={{ marginBottom: '8px' }}>
      <div>
        <strong>{userName}</strong>
      </div>
      <div>작성일: {createdAt}</div>
    </div>
  );
}
