'use client'

import React, {useEffect, useState} from 'react';
import { fetchPosts } from '../features/fetchPosts';
import { TPost } from '../types/post.type';
import { Post } from '../entities/Post/Post';

export default function Home() {

  const [posts, setPosts] = useState<TPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
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
    <div>
      <main>
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Posts from JSONPlaceholder</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Post key={post.id} post={post}/>
        ))}
      </div>
    </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
