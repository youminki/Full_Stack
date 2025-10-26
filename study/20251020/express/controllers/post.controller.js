// 더미 데이터
let posts = [
  { id: 1, title: "첫 번째 글", content: "Express 재밌다!" },
  { id: 2, title: "두 번째 글", content: "Node.js 최고!" },
];

// 전체 조회
export const getPosts = (req, res) => {
  res.json({ success: true, data: posts });
};

// 상세 조회
export const getPostById = (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  post
    ? res.json({ success: true, data: post })
    : res
        .status(404)
        .json({ success: false, message: "게시글을 찾을 수 없습니다." });
};

// 생성
export const createPost = (req, res) => {
  const { title, content } = req.body;
  const newPost = {
    id: posts.length + 1,
    title,
    content,
  };
  posts.push(newPost);
  res.status(201).json({ success: true, data: newPost });
};

// 수정
export const updatePost = (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex((p) => p.id === id);
  if (index === -1)
    return res.status(404).json({ success: false, message: "게시글 없음" });

  posts[index] = { ...posts[index], ...req.body };
  res.json({ success: true, data: posts[index] });
};

// 삭제
export const deletePost = (req, res) => {
  const id = parseInt(req.params.id);
  posts = posts.filter((p) => p.id !== id);
  res.json({ success: true, message: "게시글 삭제 완료" });
};
