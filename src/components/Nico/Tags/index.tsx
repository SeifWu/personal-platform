import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TagButton from './TagButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  })
);

export interface TagsProps {}

const Tags: React.FC<TagsProps> = (props) => {
  const data = [
    {
      title: 'React',
      background: 'linear-gradient(120deg, #5365d4 0%, #5d3997 100%)',
      boxShadow: '0 1px 5px rgba(93,57,151,0.3),0 1px 5px rgba(93,57,151,0.5)',
      boxShadowHover:
        '0 3px 15px rgba(93,57,151,0.3),0 3px 15px rgba(93,57,151,0.5)',
    },
    {
      title: 'Vue',
      background: 'linear-gradient(120deg, #54c7b5 0%, #4b9739 100%)',
      boxShadow: '0 1px 5px rgba(75,151,57,0.3),0 1px 5px rgba(75,151,57,0.5)',
      boxShadowHover:
        '0 3px 15px rgba(75,151,57,0.3), 0 3px 15px rgba(75,151,57,0.5)',
    },
    {
      title: 'Golang',
      background: 'linear-gradient(120deg, #94a7ec 0%, #2381b2 100%)',
      boxShadow:
        '0 1px 5px rgba(35,129,178,0.3),0 1px 5px rgba(35,129,178,0.5)',
      boxShadowHover:
        '0 3px 15px rgba(35,129,178,0.3),0 3px 15px rgba(35,129,178,0.5)',
    },
    {
      title: 'CURL',
      background: 'linear-gradient(120deg, #e9d54e 0%, #dc910f 100%) ',
      boxShadow:
        '0 1px 5px rgba(220,145,15,0.3),0 1px 5px rgba(220,145,15,0.5)',
      boxShadowHover:
        '0 3px 15px rgba(220,145,15,0.3),0 3px 15px rgba(220,145,15,0.5)',
    },
    {
      title: 'Java',
      background: 'linear-gradient(120deg, #eb7349 0%, #cf0a0a 100%)',
      boxShadow: '0 1px 5px rgba(207,10,10,0.3),0 1px 5px rgba(207,10,10,0.5)',
      boxShadowHover:
        '0 3px 15px rgba(207,10,10,0.3),0 3px 15px  rgba(207,10,10,0.5)',
    },
    {
      title: 'FFmpeg',
      background: 'linear-gradient(120deg, #575770 0%, #31313a 100%)',
      boxShadow: '0 1px 5px rgba(49,49,58,0.3),0 1px 5px rgba(49,49,58,0.5)',
      boxShadowHover:
        '0 3px 15px rgba(49,49,58,0.3),0 3px 15px rgba(49,49,58,0.5)',
    },
    {
      title: 'SS',
      background: 'linear-gradient(120deg, #54c7b5 0%, #4b9739 100%)',
      boxShadow: '0 1px 5px rgba(75,151,57,0.3),0 1px 5px rgba(75,151,57,0.5)',
      boxShadowHover:
        '0 3px 15px rgba(75,151,57,0.3),0 3px 15px rgba(75,151,57,0.5)',
    },
    {
      title: 'CSS',
      background: 'linear-gradient(120deg, #94a7ec 0%, #2381b2 100%)',
      boxShadow:
        '0 1px 5px rgba(35,129,178,0.3),0 1px 5px rgba(35,129,178,0.5)',
      boxShadowHover:
        '0 3px 15px rgba(35,129,178,0.3),0 3px 15px rgba(35,129,178,0.5)',
    },
  ];

  const cls = useStyles();
  const {} = props;

  return (
    <React.Fragment>
      <h5 style={{ fontSize: '1.325rem' }}>标签</h5>
      <div className={cls.root}>
        {data.map((item: any) => {
          return (
            <TagButton
              key={item.title}
              background={item.background}
              boxShadow={item.boxShadow}
              boxShadowHover={item.boxShadowHover}
              title={item.title}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Tags;
