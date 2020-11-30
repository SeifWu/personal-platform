import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },

    dropdown: {
      position: 'relative',
      '&:hover': {
        "& $dropdownMenu": {
          top: '75px',
          visibility: 'visible',
          opacity: 1,
          animation: 'fadeIn',
          animationDuration: '2.5s',
        },
      },
    },

    dropdownMenu: {
      display: 'block',
      position: 'absolute',
      minWidth: 200,
      top: 85,
      margin: 0,
      padding: 10,
      borderRadius: 5,
      visibility: 'hidden',
      opacity: 0,
      color: '#151617',
      backgroundColor: '#fff',
      border: 'none',
      zIndex: 99,
      left: '50%',
      right: '50%',
      transform: 'translateX(-50%)',
      boxShadow: '0 2px 10px rgba(188,191,200,0.1), 0 2px 10px rgba(188,191,200,0.3)',
      '-webkit-box-shadow': '0 2px 10px rgba(188,191,200,0.1), 0 2px 10px rgba(188,191,200,0.3)',
      '&:before': {
        display: 'inline-block',
        position: 'absolute',
        width: 0,
        height: 0,
        verticalAlign: 'middle',
        content: "''",
        top: -6,
        left: '50%',
        right: '50%',
        transform: 'translateX(50%)',
        color: '#fff',
        borderBottom: '6px solid',
        borderRight: '6px solid transparent',
        borderLeft: '6px solid transparent',
      }
    },

    '@media(max-width: 1380px)': {
      dropdownMenu: {
        transform: 'translateX(-80%)',
        '&:before': {
          left: 'auto',
          right: 20,
          transform: 'translateX(50%)',
        }
      }
    }
  }),
)
