'use client'

import { NextPage } from 'next';
import { useParams} from 'next/navigation';
import { PostProps} from '../../types/post.type';
import Link from "next/link";
import React from 'react';
import { fetchPostById } from '../../features/fetchPosts';
import { useQuery } from "@tanstack/react-query";
import { LoadingSpinner } from "../../entities/Loader/LoadingSpinner"
import { ErrorMessage } from "../../entities/Error/ErrorMessage";


const PostPage: NextPage<PostProps> = () => {

  const params = useParams();
  const id = params.id as string;

  const {
    data: post,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPostById(id),
  });

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorMessage message={error.message} />;

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <button className="mb-4 text-blue-500 hover:text-blue-700">
        <Link href={`/.`} passHref>
          ← Back to posts
        </Link>
      </button>
      <h1 className="text-3xl font-bold mb-4">{post?.title}</h1>
      <p className="text-lg whitespace-pre-line">{post?.body}</p>
      <div className="mt-6 text-sm text-gray-500">
        Post ID: {post?.id} | User ID: {post?.userId}
      </div>
    </div>
  );
};

export default PostPage;