import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  container: {
    position: 'fixed',
    minWidth: '100%',
    minHeight: '100%',
    right: 0,
    left: '50%',
    bottom: 0,
    zIndex: -1,
    transform: 'translate(-50%, 0)',
  }
})
