import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    header: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: theme.spacing(2),
  
      },
    
    logoutLink: {
      textDecoration: 'none',
      color: theme.palette.common.white,
      marginLeft: theme.spacing(2),
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  }));
  

const Appheader = () => {
    const classes = useStyles();

    const [displayusername, displayusernameupdate] = useState('');
    const [showmenu, showmenuupdateupdate] = useState(false);
    const usenavigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/login') {
            showmenuupdateupdate(false);
        } else {
            showmenuupdateupdate(true);
            let username = sessionStorage.getItem('username');
            if (username === '' || username === null) {
                usenavigate('/login');
            } else {
                displayusernameupdate(username);
            }
        }

    }, [location])
    return (
        <div>
            {showmenu &&
                <div className="header" className={classes.header}>

              
                    <Link style={{ float: 'right' }} to={'/login'} className={classes.logoutLink}>Logout</Link>
                 
                </div>
            }
        </div>
    );
}

export default Appheader;