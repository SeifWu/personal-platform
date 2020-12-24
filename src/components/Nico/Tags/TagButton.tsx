import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    textTransform: 'none',
    background: (props: TagButtonProps) => props.background,
    boxShadow: (props: TagButtonProps) => props.boxShadow,
    color: '#fff',
    fontSize: 12,
    "&:hover": {
      transform: 'translateY(-2px)',
      boxShadow: (props: TagButtonProps) => props.boxShadowHover,
    }
  },
});

export interface TagButtonProps {
  title: string;
  background: string;
  boxShadow?: string;
  boxShadowHover?: string;
}

const TagButton: React.FC<TagButtonProps> = (props) => {
  const cls = useStyles(props);
  const { title } = props;
  return (
    <Button className={cls.container} variant="contained">
      {title}
    </Button>
  );
};

export default TagButton;
