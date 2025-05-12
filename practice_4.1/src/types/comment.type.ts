import { z } from "zod";

export interface CommentProps {
    comment: TComment;
}

export const commentSchema = z.object({
    body: z.string(),
    email: z.string().email(),
    id: z.number(),
    name: z.string(),
    postId: z.number(),
  });
  
export type TComment = z.infer<typeof commentSchema>;