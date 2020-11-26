import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
  'navbar': {
    padding: 0,
    borderRadius: 0,
  },
  'main-nav': {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  'nav-scroll': {
    position: 'fixed',
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
  },
  'container': {
    flexWrap: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  'navbar-brand': {
    display: 'inline-block',
    color: '#336699',
    paddingTop: 0,
    paddingBottom: 0,
    marginRight: '.75rem',
    marginLeft: 0,
    fontSize: '1.25rem',
    lineHeight: 'inherit',
    '& img': {
      width: 'auto',
      maxHeight: '42px',
      maxWidth: '100%',
      height: 'auto',
      background: 'transparent',
    },
    '& span': {
      display: 'inline-block',
      lineHeight: '42px',
      verticalAlign: 'top',
    }
  },
  'collapse': {
    display: 'flex',
  },
  'navbar-collapse': {
    textAlign: 'center',
    flexGrow: 1,
    alignItems: 'center',
    flexBasis: 'auto',
  },
  'navbar-nav': {
    flexDirection: 'row',
    display: 'flex',
    '-ms-flex-direction': 'column',
    paddingLeft: 0,
    marginBottom: 0,
    marginTop: 0,
    listStyle: 'none',
  },
  'ml-auto': {
    marginLeft: 'auto',
  },
  'nav-item': {

  },
  "dropdown": {
    position: 'relative',
    '&:hover': {
      "& $dropdown-menu": {
        top: '75px',
        visibility: 'visible',
        opacity: 1,
        animation: 'fadeIn',
        animationDuration: '2.5s',
      },
    },
  },

  "nav-link": {
    display: 'block',
    padding: '35px 25px',
    fontSize: '0.875rem',
    fontWeight: 700,
    letterSpacing: '.04rem',
  },

  'dropdown-toggle': {
    whiteSpace: 'nowrap',
  },

  'dropdown-menu': {
    display: 'block',
    position: 'absolute',
    '-webkit-transition': 'opacity 0.3s, ease-in-out 0.3s',
    '-moz-transition': 'opacity 0.3s, ease-in-out 0.3s',
    '-o-transition': 'opacity 0.3s, ease-in-out 0.3s',
    transition: 'opacity 0.3s, ease-in-out 0.3s',
    animationDelay: '0.5s',
    top: '85px',
    visibility: 'hidden',
    opacity: 0,
    minWidth: '200px',
    color: '#151617',
    backgroundColor: '#fff',
    border: 'none',
    // borderRadius: 0,
    zIndex: 99,
    left: '50%',
    right: '50%',
    transform: 'translateX(-50%)',
    margin: 0,
    padding: '10px',
    borderRadius: '5px',
    '-webkit-box-shadow': '0 2px 10px rgba(188,191,200,0.1), 0 2px 10px rgba(188,191,200,0.3)',
    boxShadow: '0 2px 10px rgba(188,191,200,0.1), 0 2px 10px rgba(188,191,200,0.3)',
    '&:before': {
      display: 'inline-block',
      position: 'absolute',
      width: 0,
      height: 0,
      verticalAlign: 'middle',
      content: "''",
      top: '-6px',
      left: '50%',
      right: '50%',
      transform: 'translateX(-50%)',
      color: '#fff',
      borderBottom: '6px solid',
      borderRight: '6px solid transparent',
      borderLeft: '6px solid transparent',
    }
  },

  'show': {
    top: '75px',
    visibility: 'visible',
    opacity: 1,
  },

  'dropdown-item': {
    color: '#151617',
    backgroundColor: 'transparent',
    fontSize: '13px',
    fontWeight: 700,
    padding: '8px 20px',
    display: 'block',
    width: '100%',
    clear: 'both',
    textAlign: 'inherit',
    whiteSpace: 'nowrap',
    border: 0,
  },

  'two-columns': { minWidth: 360 },
  'three-columns': { minWidth: 540 },

  'sub-menu': {
    borderLeft: '1px solid #dddfe6',
    paddingTop: '10px',
    paddingBottom: '10px',
    '&:first-child': {
      borderLeft: 'none',
    }
  },

  // 'row': {
  //   display: 'flex',
  //   '-ms-flex-wrap': 'wrap',
  //   flexWrap: 'wrap',
  //   marginRight: '-15px',
  //   marginLeft: '-15px',
  // },
})

