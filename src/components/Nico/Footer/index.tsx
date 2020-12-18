import React from 'react';
import { Container, Grid, useMediaQuery, useTheme } from '@material-ui/core';
import { Copyright, GitHub } from '@material-ui/icons';
import ActiveLink from '../ActiveLink';

export interface FooterProps {}

const Footer: React.FC<FooterProps> = (props) => {
  const {} = props;
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <footer style={{ background: '#31313a', padding: '24px 0', color: '#fff' }}>
      <Container>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            md={4}
            style={{ textAlign: matchesMd ? 'left' : 'center' }}
          >
            <Copyright
              style={{
                fontSize: 16,
                marginRight: 8,
                verticalAlign: 'middle',
              }}
            />
            <span
              style={{
                fontSize: 12,
                display: 'inline-block',
                fontWeight: 400,
              }}
            >
              Seif
            </span>
          </Grid>
          <Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
            <ActiveLink
              activeClassName="active"
              href="http://www.beian.miit.gov.cn/"
            >
              <a
                style={{
                  display: 'inline-block',
                  color: '#fff',
                  fontSize: 12,
                  fontWeight: 400,
                }}
                target="_blank"
              >
                浙ICP备20010557号
              </a>
            </ActiveLink>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            style={{ textAlign: matchesMd ? 'right' : 'center' }}
          >
            <GitHub style={{ fontSize: 16, marginRight: 8 }} />
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
