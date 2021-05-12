export const NUMBER_OF_LATEST_BLOG_CARDS_TO_RENDER_ON_DESKTOP = 8;
export const NUMBER_OF_LATEST_BLOG_CARDS_TO_RENDER_ON_MOBILE = 6;
export const retrieveLatestBlogPosts = (blog) => {
  const latestBlogsList = [];
  for (let i = 0; i < NUMBER_OF_LATEST_BLOG_CARDS_TO_RENDER_ON_DESKTOP; i += 1) {
    latestBlogsList.push(blog.blogItems[i]);
  }
  return latestBlogsList;
};
