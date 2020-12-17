import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Copyright, GitHub } from '@material-ui/icons';
import ActiveLink from '../ActiveLink';

export interface FooterProps {}

const Footer: React.FC<FooterProps> = (props) => {
  const {} = props;
  return (
    <footer style={{ background: '#31313a', padding: '40px 0', color: '#fff' }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <div style={{ display: 'flex' }}>
              <Copyright style={{ fontSize: 22, marginRight: 8 }} />
              <span
                style={{
                  fontSize: 16,
                  display: 'inline-block',
                  // verticalAlign: 'text-bottom',
                  fontWeight: 400,
                }}
              >
                Seif
              </span>
            </div>
          </Grid>
          <Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
            <ActiveLink
              activeClassName="active"
              href="http://www.beian.miit.gov.cn/"
            >
              <a
                style={{
                  display: 'block',
                  color: '#fff',
                  fontSize: 12,
                  fontWeight: 400,
                }}
                target='_blank'
              >
                浙ICP备20010557号
              </a>
            </ActiveLink>
          </Grid>
          <Grid item xs={12} md={4} style={{ textAlign: 'right' }}>
            <div>
              <GitHub style={{ fontSize: 22, marginRight: 8 }} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
