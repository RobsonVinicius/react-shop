import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  title: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#3c5059',
  },
  image: {
    marginRight: '8px',
  },  
  grow: {
    flexGrow: 1,
  },
  
  
  
}));