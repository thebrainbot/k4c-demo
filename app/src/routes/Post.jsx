import Header from '../components/Header/Header';
import useFetchData from '../services/useFetchData';
import PostItem from '../components/PostItem/PostItem';
import {
  useParams
} from "react-router-dom";

export const Post = () => {
  let { id } = useParams();
  const url = `http://localhost:3004/posts/${id}`;
  const { data } = useFetchData(url);
  
  return (
    <div className="home">
      <Header title="Post" />
      { data && <PostItem data={data} />}
    </div>
)};

export default Post;