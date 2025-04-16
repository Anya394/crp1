import { z } from "zod";

export interface PostProps {
    post: TPost;
}

export const postSchema = z.object({
    userId: z.number(),
    id: z.number(),
    title: z.string(),
    body: z.string(),
  });
  
export type TPost = z.infer<typeof postSchema>;