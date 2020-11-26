import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  navbarBrand: {
    display: 'inline-block',
    color: '#333',
    fontSize: '1.25rem',
    paddingTop: 0,
    paddingBottom: 0,
    marginRight: '.75rem',
    marginLeft: 0,
    lineHeight: 'inherit',
    verticalAlign: 'middle',
    '& img': {
      width: 'auto',
      height: 'auto',
      maxHeight: '42px',
      background: 'transparent',
    },
    '& span': {
      display: 'inline-block',
      fontSize: '1.25rem',
      marginLeft: 8,
      lineHeight: '42px',
      verticalAlign: 'top',
    }
  }
})

