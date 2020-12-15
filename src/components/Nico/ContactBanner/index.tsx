import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Button, Container,useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    position: 'relative',
    padding: '50px 0',
    background: '#31313a',
    margin: "24px 0",
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
    padding: '12px 40px',
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
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

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
          <Grid item xs={12} md={6} style={{textAlign: matches ? 'right' : 'left'}}>
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
