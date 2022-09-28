import { AllTopics, SearchCategory } from "../";
import { LayoutBlog } from "./LayoutBlog";

export const BlogPage = () => {
  return (
    <LayoutBlog>
      <SearchCategory />
      <AllTopics />
    </LayoutBlog>
  )
}