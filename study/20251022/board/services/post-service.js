const paginator = require("../utils/paginator");

async function writePost(collection, post) {
  post.hits = 0;
  post.createdAt = new Date().toISOString();
  return await collection.insertOne(post);
}

async function list(collection, page, search) {
  const perPage = 10;
  const query = { title: new RegExp(search, "i") };
  const cursor = collection
    .find(query, { limit: perPage, skip: (page - 1) * perPage })
    .sort({ createdAt: -1 });
  const totalCount = await collection.count(query);
  const posts = await cursor.toArray();
  const paginator = paginator(page, perPage, totalCount);

  return [posts, paginator];
}

module.exports = {
  list,
  writePost,
};
