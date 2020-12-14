import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Container } from '@material-ui/core';

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
    margin: 'auto',
  },
  contactButton: {
    color: '#fff',
    fontWeight: 700,
    padding: '16px 40px',
    background: 'linear-gradient(45deg, #5365d4 30%, #336699 90%)',
    borderRadius: 50,
    boxShadow: '0 1px 5px rgba(33,57,151,0.3),0 1px 5px rgba(33,57,151,0.5)',
    transition: '0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-2px)',
    }
  },
});

export interface ContactBannerProps {}

const ContactBanner: React.FC<ContactBannerProps> = (props) => {
  const {} = props;
  const cls = useStyles(props);

  return (
    <section className={cls.container}>
      <Container>
        <Grid
          container
          spacing={3}
          alignContent="space-between"
          alignItems="flex-end"
        >
          <Grid item xs={12} md={6}>
            <h4 className={cls.title}>Need to contact me ?</h4>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              variant="contained"
              startIcon=""
              classes={{ root: cls.contactButton }}
            >
              Default
            </Button>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ContactBanner;
