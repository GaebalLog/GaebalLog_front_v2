import { instance } from "../axios_config";

export const postAPI = {
  create: (data: postDetail) => {
    return instance.post("/post", { ...data });
  },
  getAll: (sort: "views" | "created_at" | "neighbor", page: number) => {
    return instance.get<postList>(`/post/all/${sort}?page=${page}`);
  },
  getDetail: (post_id: number) => {
    return instance.get<authPost>(`/post/detail/${post_id}`);
  },
  delete: (post_id: number) => {
    return instance.delete(`/post/${post_id}`);
  },
  update: (post_id: number, data: requestPost) => {
    return instance.patch(`/post/${post_id}`, { ...data });
  },
  toggleBookmark: (post_id: number) => {
    return instance.post(`/post/bookmark`, { post_id });
  },
  toggleLike: (post_id: number) => {
    return instance.post(`/post/like`, { post_id });
  },
  verify: (post_id: number) => {
    return instance.get(`/post/verify/${post_id}/verify`);
  },
};
