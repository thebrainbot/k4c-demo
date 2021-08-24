import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 400,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  title: {
    lineHeight: 1.1,
    marginBottom: 10
  },
}));

export const Card = (props) => {
  const classes = useStyles();
  const { id, title, image, summary } = props;
  let history = useHistory();

  const onPress = () => {
    history.push(`/post/${id}`);    
  }

  return (
    <Grid
      container
      item
      xs={12}
      sm={6}
      md={4}
      justifyContent="space-around"
      alignItems="stretch"
    >
      <Paper elevation={3} className={classes.paper} onClick={onPress}>
        <div className="leftArea">
          <img className={classes.img} alt="test" src={image}/>
        </div>
        <div className="rightcontent">
          <Typography className={classes.title} variant="h6">{title}</Typography>
          {summary && <Typography variant="p">{summary}</Typography>}
        </div>
      </Paper>
    </Grid>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  summary: PropTypes.string,
  postDate: PropTypes.string,
};

Card.defaultTypes = {
  image: null,
  teaser: null,
  postDate: null,
  summary: null
};

export default Card;