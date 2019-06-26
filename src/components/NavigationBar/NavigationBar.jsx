import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
  Button
} from '@material-ui/core';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import Add from '@material-ui/icons/Add';
import Down from '@material-ui/icons/KeyboardArrowDown';
import { SearchBox } from '../index';

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: 5
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  navGroups: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '70%',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}));

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const { id, handleClick, setType } = props;
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const onButtonClick = type => event => {
    setType(type);
    handleClick(event);
  };

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          aria-label="Account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar className={classes.root} position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <Button component={Link} to="/" color="inherit">
              OSDB
            </Button>
          </Typography>
          <SearchBox />
          <div className={classes.navGroups}>
            <Button
              aria-describedby={id}
              color="inherit"
              onClick={onButtonClick('NFL')}
            >
              NFL
            </Button>
            <Button component={Link} to="/nba" color="inherit">
              NBA
            </Button>
            <Button component={Link} to="/nhl" color="inherit">
              NHL
            </Button>
            <IconButton
              edge="end"
              aria-label="Account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={onButtonClick('PLUS')}
              color="inherit"
            >
              <Add />
            </IconButton>
            <Button component={Link} to="/news" color="inherit">
              NEWS
            </Button>
            <Button component={Link} to="/tools" color="inherit">
              COMPARISON TOOLS
            </Button>
            <Button component={Link} to="/videos" color="inherit">
              VIDEOS
            </Button>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <AccountCircle />
              <span style={{ marginLeft: 5, fontSize: 14 }}>ACCOUNT</span>
              <IconButton
                edge="end"
                aria-label="Account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={onButtonClick('ACCOUNT')}
                color="inherit"
              >
                <Down />
              </IconButton>
            </div>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="Show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
