import { makeStyles } from '@material-ui/core/styles';
import { CubeGridScaleDelayProps } from './data';

export default makeStyles({
  cubeGrid: {
    width: 40,
    height: 40,
    margin: '100px auto',
    '& $cube1': {

    }
  },
  cube: {
    width: '33%',
    height: '33%',
    backgroundColor: (props: CubeGridScaleDelayProps) => props.backgroundColor || "#333",
    float: 'left',
    '-webkit-animation': '$cubeGridScaleDelay 1.3s infinite ease-in-out',
    animation: '$cubeGridScaleDelay 1.3s infinite ease-in-out',
  },
  cube1: {
    '-webkit-animation-delay': '0.2s',
    animationDelay: '0.2s',
  },
  cube2: {
    '-webkit-animation-delay': '0.3s',
    animationDelay: '0.3s',
  },
  cube3: {
    '-webkit-animation-delay': '0.4s',
    animationDelay: '0.4s',
  },
  cube4: {
    '-webkit-animation-delay': '0.1s',
    animationDelay: '0.1s',
  },
  cube5: {
    '-webkit-animation-delay': '0.2s',
    animationDelay: '0.2s',
  },
  cube6: {
    '-webkit-animation-delay': '0.3s',
    animationDelay: '0.3s',
  },
  cube7: {
    '-webkit-animation-delay': '0s',
    animationDelay: '0s',
  },
  cube8: {
    '-webkit-animation-delay': '0.1s',
    animationDelay: '0.1s',
  },
  cube9: {
    '-webkit-animation-delay': '0.2s',
    animationDelay: '0.2s',
  },

  "@keyframes cubeGridScaleDelay": {
    "0%, 70%, 100%": {
      "-webkit-transform": "scale3D(1, 1, 1)",
      transform: "scale3D(1, 1, 1)",
    }, "35%": {
      "-webkit-transform": "scale3D(0, 0, 1)",
      transform: "scale3D(0, 0, 1)",
    }
  }
})
