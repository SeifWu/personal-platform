import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button,Container } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    position: 'relative',
    padding: '50px 0',
    background: '#31313a',
  },
  title: {
    color: '#fff',
    fontWeight: 700,
    fontSize: '1.85rem',
    margin: 'auto'
  }
});

export interface ContactBannerProps {}

const ContactBanner: React.FC<ContactBannerProps> = (props) => {
  const {} = props;
  const cls = useStyles(props);

  return (
    <section className={cls.container}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <h4 className={cls.title}>Need to contact me ?</h4>
          </Grid>
          <Grid item xs={12} md={6} style={{textAlign: 'right'}}>
            <Button variant="contained">Default</Button>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ContactBanner;
