'use client'

import { NextPage } from 'next';
import { useParams} from 'next/navigation';
import Link from "next/link";
import React from 'react';
import { fetchcComments } from '../../../features/fetchPosts';
import { useQuery } from "@tanstack/react-query";
import { LoadingSpinner } from "../../../entities/Loader/LoadingSpinner"
import { ErrorMessage } from "../../../entities/Error/ErrorMessage";
import { Comment } from '../../../entities/Comment/Comment';
import { TComment } from '../../../types/comment.type';


const CommentsPage: NextPage = () => {
  const params = useParams();
  const id = params.id as string;

  const {
    data: comments,
    isLoading,
    isError,
    error,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ["comments", id],
    queryFn: () => fetchcComments(id),
  });

  if (isLoading || isRefetching) return <LoadingSpinner />;
  if (isError) return <div>
    <ErrorMessage message={error.message} />
    <button onClick={() => refetch()}>Try again</button>
  </div>;

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <div className="flex">
        <button className="mb-4 text-blue-500 hover:text-blue-700">
          <Link href={`/${id}`} passHref>
            ← Back to post
          </Link>
        </button>
        <button className="mb-4 text-blue-500 hover:text-blue-700 ml-auto" onClick={() => refetch()} disabled={isRefetching}>
          Update Comments
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {comments?.map((comment: TComment) => (
          <Comment key={comment.id} comment={comment}/>
        ))}
      </div>
    </div>
  );
};

export default CommentsPage;