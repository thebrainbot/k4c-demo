import { Container, Typography } from "@material-ui/core";
import PropTypes from 'prop-types';

import Byline from '../Byline/Byline';
import useFetchData from "../../services/useFetchData";

export const PostItem = (props) => {
  const { data: { image, title, content, authorID, postDate } } = props;

  const url = `http://localhost:3004/people/${authorID}`;
  const { data } = useFetchData(url);

  return (
    <Container maxwidth="sm">
      <img class="post__image" alt="sample alt text" src={image} />
      <div className="post__content">
        <Typography variant="h5">{title}</Typography>
        {data && <Byline userData={data} postDate={postDate} />}
        <Typography variant="p">{content}</Typography>
      </div>
    </Container>
  )
}

PostItem.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    authorId: PropTypes.number,
    postDate: PropTypes.string,
  })
}

export default PostItem;