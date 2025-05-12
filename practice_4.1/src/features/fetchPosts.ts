import axios from "axios";
import { postSchema, TPost } from '../types/post.type';
import { commentSchema, TComment } from '../types/comment.type';

export const fetchPosts = async (): Promise<TPost[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const fetchPostById = async (id: string): Promise<TPost> => {
  const response = await api.get(`/posts/${id}`);
  return postSchema.parse(response.data); // Валидация через Zod
};

export const fetchcComments = async (id: string): Promise<TComment> => {
  const response = await api.get(`/posts/${id}/comments`);
  return response.data.map((comment: unknown) => commentSchema.parse(comment)); // Валидация через Zod
};