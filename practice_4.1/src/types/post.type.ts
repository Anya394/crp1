
export interface TPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface PostProps {
    post: TPost;
}