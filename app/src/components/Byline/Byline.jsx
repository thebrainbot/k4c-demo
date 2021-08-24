import PropTypes from 'prop-types';

export const Byline = (props) => {
  const { userData: { firstName, lastName, email}, postDate } = props;

  const formatDate = () => {
    const formatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    console.log('post date', postDate);
    const date = new Date(postDate);
    const formattedDate = new Intl.DateTimeFormat('en-US', formatOptions).format(date);

    return formattedDate;
  }

  return (
    <div className="byline">
      by: <a href={`mailto:${email}`}>{firstName} {lastName}</a>
      &nbsp;on {formatDate()}
    </div>
  )
};

Byline.propTypes = {
  userData: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }),
  postDate: PropTypes.string.isRequired,
};

export default Byline;