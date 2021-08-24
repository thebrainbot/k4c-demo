import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Card from '../Card/Card';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 'auto'
  },
}));

export const CardList = ({data}) => {
  const classes = useStyles();

  return (
    <Grid 
      container
      className={`${classes.root} card-list`}
      spacing={3} 
      direction="row" 
      justifyContent="space-between" 
      alignItems="flex-start"
      data-test-id="card-list"
    >
      {data ?
        data.map((cardData) => (
          <Card
            id={cardData.id}
            image={cardData.image} 
            title={cardData.title}
            summary={cardData.summary}
          />
        ))
        : <div>Loading Content</div>
      }
    </Grid>
  );
};

CardList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
};

CardList.defaultProps = {
  data: []
};

export default CardList;