export interface Post {
    title: string;
    slug: string;
    content: string;
    date: string;
    excerpt: string;
}

export interface LayoutProps {
    children: React.ReactNode;
}

export interface HeaderProps {
    title: string;
}

export interface FooterProps {
    year: number;
}

export interface PostCardProps {
    post: Post;
}