import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(4),
    borderRadius: '10px',
    marginBottom: theme.spacing(2),
  },
  leftImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <Container style={{ marginTop: '50px' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.section} style={{ backgroundColor: '#f5f5f5' }}>
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b3JnYW5pY3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80/400x300"
              alt="Organic Image"
              className={classes.leftImage}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.section} style={{ backgroundColor: '#e0f7fa' }}>
            <Typography variant="h4" gutterBottom>
              Discover Fresh Organic Products
            </Typography>
            <Typography variant="body1">
              Explore a wide range of organic produce and natural products sourced from local
              farmers and producers. Our commitment to quality and sustainability ensures you get
              the best nature has to offer.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.section} style={{ backgroundColor: '#e0f7fa' }}>
            <Typography variant="h4" gutterBottom>
              Environmentally Friendly Options
            </Typography>
            <Typography variant="body1">
              Our products are environmentally friendly, promoting a healthier lifestyle for both
              you and the planet. Choose sustainability without compromising on quality.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.section} style={{ backgroundColor: '#f5f5f5' }}>
            <img
              src="https://www.foodnavigator-usa.com/var/wrbm_gb_food_pharma/storage/images/_aliases/wrbm_large/publications/food-beverage-nutrition/foodnavigator-usa.com/news/markets/organic-produce-sales-up-double-digits-in-2020-outpacing-conventional/12125475-1-eng-GB/Organic-produce-sales-up-double-digits-in-2020-outpacing-conventional.jpg"
              alt="Organic Image"
              className={classes.leftImage}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.section} style={{ backgroundColor: '#f5f5f5' }}>
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2022/12/WD/ZG/NY/3841959/organic-foods-project-report-consultancy-500x500.jpg"
              alt="Organic Image"
              className={classes.leftImage}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.section} style={{ backgroundColor: '#e0f7fa' }}>
            <Typography variant="h4" gutterBottom>
              Quality You Can Trust
            </Typography>
            <Typography variant="body1">
              We ensure the highest standards of quality for all our products, providing you with
              safe and healthy options for a balanced lifestyle.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;
