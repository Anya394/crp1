import { CommentProps } from '../../types/comment.type';

export const Comment = ({comment}: CommentProps) => {
  return (
    <div className={`block border p-4 rounded-lg shadow hover:shadow-md transition-shadow h-full`}>
        <h2 className="text-xl font-semibold mb-2">{comment.name}</h2>
        <p className="text-sm text-gray-500 mt-2">{comment.email}</p>
        <p className="text-gray-600 line-clamp-2">{comment.body}</p>
        <p className="text-sm text-gray-500 mt-2">Post ID: {comment.postId} | Comment ID: {comment.id}</p>
    </div>
  );
}
