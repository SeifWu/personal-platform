import React from 'react';

// import { getStaticProps } from 'next';

import {
  MediaCard,
  SectionTitle,
  ContactBanner,
  PostCard,
  Footer,
  SearchInput,
} from '@/components/Nico';
import FirstScreen from '../src/components/Home/FirstScreen';
import { Grid, Container } from '@material-ui/core';

// import { MenuItem } from '../src/components/Navbar/data';
// import TopMenu from '../src/components/TopMenu';

export async function getStaticProps() {
  const res = await fetch('https://seifwu.github.io/mock/api/v1/home.json');
  const ResponseJson = await res.json();

  return {
    props: {
      ...ResponseJson,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
}

export default function Index({ background = '', background_cover = '' }) {
  return (
    <>
      {/* <TopMenu menuData={menuData} title="Annie" logoUrl="/logo.png" /> */}
      <FirstScreen source={background} backgroundCover={background_cover} />
      <SectionTitle title="Project" subTitle="个人实践" />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <MediaCard
              coverImg="https://seifwu.github.io/static/img/video-background-1.png"
              title="IM系统"
            >
              这是一段内容
            </MediaCard>
          </Grid>
        </Grid>
      </Container>
      <ContactBanner />
      <div
        style={{
          background: '#fff',
          marginTop: '-24px',
          paddingTop: 96,
          paddingBottom: 96,
        }}
      >
        <Container>
          <Grid container spacing={6}>
            <Grid container xs={12} md={8} item spacing={3}>
              <PostCard href="/about" />
              <PostCard href="/about" />
              <PostCard href="/about" />
              <PostCard href="/about" />
            </Grid>
            <Grid container item xs={12} md={4}>
              <div style={{ width: '100%' }}>
                <SearchInput />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
    </>
  );
}
