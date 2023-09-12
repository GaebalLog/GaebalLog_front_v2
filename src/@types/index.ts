import type { BG_COLOR, TEXT_COLOR } from "@/config/constants/colors";

import type {
  typeOfauthPost,
  typeOfCreatedPost,
  typeOfPost,
  typeOfPostList,
} from "./postType";

declare global {
  type bgColor = keyof typeof BG_COLOR;
  type color = keyof typeof TEXT_COLOR;

  type postDetail = typeOfPost;
  type authPost = typeOfauthPost;
  type postList = typeOfPostList;
  type requestPost = typeOfCreatedPost;
}
