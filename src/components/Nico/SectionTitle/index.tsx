import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    margin: '80px 0',
    textAlign: 'center',
    position: 'relative',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: 12,
  },
  subTitle: {
    width: 'max-content',
    fontSize: 14,
    fontFamily: '"Roboto Slab",serif',
    color: '#515253',
    margin: '0 auto',
    paddingTop: 10,
    borderTop: '1px solid #dddfe6',
    opacity: 0.75,
  },
});

export interface SectionTitleProps {
  title: string;
  subTitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = (props) => {
  const cls = useStyles(props);
  const { title, subTitle } = props;

  return (
    <div className={cls.container}>
      <h2 className={cls.title}>{title}</h2>
      {subTitle ? <h5 className={cls.subTitle}>{subTitle}</h5> : null}
    </div>
  );
};

export default SectionTitle;
