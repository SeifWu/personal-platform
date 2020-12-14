import { makeStyles } from '@material-ui/core/styles';
import MediaCardProps from './data';

const useStyles = makeStyles({
  mediaCard: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: 5,
    marginBottom: 30,
    marginTop: 70,
    transition: '0.2s ease-in-out',
    boxShadow: '0 2px 12px rgba(188,191,200,0.1),0 2px 12px rgba(188,191,200,0.2)',
    backgroundClip: 'border-box',
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 3px 20px rgba(188,191,200,0.1),0 3px 20px rgba(188,191,200,0.3)',
    },
  },
  container: {
    position: 'relative',
    flex: '1 1 auto',
    paddingTop: 0,
    paddingBottom: 40,
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: (props: MediaCardProps) => props.textAlign || 'left',
  },
  coverImg: {
    position: 'relative',
    height: 263,
    width: "100%",
    marginBottom: 30,
    marginTop: -70,
    background: 'transparent',
    '&>div': {
      boxShadow: '0 2px 10px rgba(188,191,200,0.1),0 2px 10px rgba(188,191,200,0.2)',
      borderRadius: 5,
    }
  },
  title: {
    fontSize: '1.6rem',
    fontWeight: 700,
    marginBottom: 0,
  },
  content: {
    marginTop: '1.5rem',
    fontFamily: '"Barlow",sans-serif',
    fontWeight: 400,
    fontSize: '1rem',
    color: '#515253',
    letterSpacing: '.02rem',
  }
});

export default useStyles;
