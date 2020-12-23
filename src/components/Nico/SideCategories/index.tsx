import React from 'react';
import { Grid } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  customUrl: {
    display: 'flex',
    color: '#515253',
    fontSize: '1rem',
    lineHeight: 1.8,
    paddingLeft: 8,
    '&:hover': {
      opacity: 0.6,
    },
  },
});

export interface SideCategoriesProps {}

const SideCategories: React.FC<SideCategoriesProps> = (props) => {
  const cls = useStyles(props);
  const {} = props;

  return (
    <div style={{ marginTop: 48 }}>
      <h5 style={{ fontSize: '1.325rem' }}>分类</h5>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <a className={cls.customUrl}><ChevronRightIcon/>React</a>
        </Grid>
        <Grid item xs={6}>
          <a className={cls.customUrl}><ChevronRightIcon/>Golang</a>
        </Grid>
        <Grid item xs={6}>
          <a className={cls.customUrl}><ChevronRightIcon/>Java</a>
        </Grid>
      </Grid>
    </div>
  );
};

export default SideCategories;
