'use client'

import { NextPage } from 'next';
import { useParams} from 'next/navigation';
import { PostProps, TPost} from '../../types/post.type';
import Link from "next/link";
import React, {useEffect, useState} from 'react';
import { fetchPostById } from '../../features/fetchPosts';


const PostPage: NextPage<PostProps> = () => {

  const [post, setPost] = useState<TPost>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const params = useParams();
  const id = params.id as string;

  useEffect(() => {
    console.log(params)
    const loadPosts = async () => {
      try {
        const data = await fetchPostById(id);
        setPost(data);
      } catch (err) {
        console.error(err);
        setError("Error");
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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