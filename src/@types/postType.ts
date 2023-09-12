interface typeOfCreatedPost {
  user_id?: number;
  title: string;
  content: string;
  categories: string[];
  thumbnail: string | null;
  img: string[];
}

interface typeOfPost {
  post_id: number;
  title: string;
  content: string;
  nickname: string;
  view: number;
  like: number;
  liked: boolean;
  img: string[];
  thumbnail: string | null;
  categories: string[];
  created_at: string;
  bookmarked: boolean;
}

interface typeOfPostList {
  hasMore: boolean;
  posts: typeOfPost[];
}

interface typeOfauthPost extends typeOfPost {
  isAuthor: boolean;
}

export type { typeOfPost, typeOfauthPost, typeOfCreatedPost, typeOfPostList };
