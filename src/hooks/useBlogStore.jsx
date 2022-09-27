import { useDispatch, useSelector } from "react-redux";
import { themeSelected } from "../store/blog/blogSlice";

export const useBlogStore = () => {
  const dispatch = useDispatch();
  const { topics, filterList, topicSelected } = useSelector(state => state.blog);

  const setTopicSelected = (topic) => {
    dispatch(themeSelected(topic))
  }

  return {
    topics,
    topicSelected,
    filterList,
    setTopicSelected
  }
}