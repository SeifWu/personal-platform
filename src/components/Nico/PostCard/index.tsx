import React from 'react';
import { Grid, ButtonBase } from '@material-ui/core';
import { TodaySharp, PersonSharp, LocalOfferSharp } from '@material-ui/icons';
import PostCardProps from './data';
import useStyles from './styles';
import CoverImg from '@/components/Nico/CoverImg';

const PostCard: React.FC<PostCardProps> = (props) => {
  const {} = props;
  const cls = useStyles(props);
  return (
    <Grid container spacing={3}>
      <Grid container xs={12} md={8} item spacing={2}>
        <Grid item xs={12} md={5}>
          <ButtonBase style={{ width: '100%' }}>
            <CoverImg
              borderRadius={5}
              src="https://seifwu.github.io/static/img/video-background-1.png"
              height={171}
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} md={7}>
          <ButtonBase
            className={cls.link}
            style={{ width: '100%', textAlign: 'left' }}
          >
            Title
          </ButtonBase>
          <p className={cls.secondary}>
            <TodaySharp
              style={{
                fontSize: 14,
                fontWeight: 900,
                display: 'inline-block',
                verticalAlign: 'text-top',
                marginRight: 5,
              }}
            />
            <span style={{ fontSize: 12 }}>Mar 31, 2020</span>
            <span style={{ marginLeft: 5, marginRight: 5, color: '#d0d2d3' }}>
              |
            </span>
            <PersonSharp
              style={{
                fontSize: 14,
                fontWeight: 900,
                display: 'inline-block',
                verticalAlign: 'text-top',
                marginRight: 5,
              }}
            />
            <span style={{ fontSize: 12 }}>Seif</span>
            <span style={{ marginLeft: 5, marginRight: 5, color: '#d0d2d3' }}>
              |
            </span>
            <LocalOfferSharp
              style={{
                fontSize: 14,
                fontWeight: 900,
                display: 'inline-block',
                verticalAlign: 'text-top',
                marginRight: 5,
              }}
            />
            <span style={{ fontSize: 12 }}>React, Golang</span>
          </p>
          <p style={{ margin: 0 }}>
            Praesent sed nibh sed justo semper consequat ac tempor enim. Fusce
            sed varius odio, quis faucibus nunc nulla iaculis...Praesent sed
            nibh sed justo semper consequat ac tempor enim. Fusce sed varius
            odio, quis faucibus nunc nulla iaculis...
          </p>
        </Grid>
      </Grid>

      <Grid item></Grid>
    </Grid>
  );
};

export default PostCard;
