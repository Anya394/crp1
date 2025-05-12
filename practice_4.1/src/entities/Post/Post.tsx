'use client'

import React from 'react';
import { PostProps } from '../../types/post.type';

export const Post = ({post}: PostProps) => {
  return (
    <div className={`block border p-4 rounded-lg shadow hover:shadow-md transition-shadow h-full`}>
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-600 line-clamp-2">{post.body}</p>
      <p className="text-sm text-gray-500 mt-2">User ID: {post.userId}</p>
    </div>
  );
}
