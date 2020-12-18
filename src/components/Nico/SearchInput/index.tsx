import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Search as SearchIcon } from '@material-ui/icons';
import { Chip, InputBase } from '@material-ui/core';

export interface SearchInputProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      border: '1px solid #ced4da',
      borderRadius: 50,
      width: '100%',
    },
    input: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
    chip: {
      padding: '24px',
      borderRadius: 50,
      margin: '-3px -5px',
      background: 'linear-gradient(45deg, #5365d4 30%, #336699 90%)',
      color: '#fff',
      boxShadow: '0 1px 5px rgba(33,57,151,0.3),0 1px 5px rgba(33,57,151,0.5)',
      '&:hover': {
        boxShadow:
          '0 3px 15px rgba(33,57,151,0.5),0 1px 5px rgba(33,57,151,0.7)',
      },
    },
  })
);

const SearchInput: React.FC<SearchInputProps> = (props) => {
  const {} = props;
  const classes = useStyles();
  const handleSearchClick = () => {
    console.log('handleClick');
  };
  return (
    <div className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search..."
        inputProps={{ 'aria-label': 'search...' }}
      />
      <Chip
        className={classes.chip}
        icon={<SearchIcon style={{ color: '#fff', fontSize: 16 }} />}
        label={<span style={{ color: '#fff', fontSize: 14 }}>搜索</span>}
        onClick={handleSearchClick}
      />
    </div>
  );
};

export default SearchInput;
