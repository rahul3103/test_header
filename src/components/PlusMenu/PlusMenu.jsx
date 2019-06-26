import React from 'react';
import { MenuItem, MenuList } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Teams from '../../Club_data';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  paper: {
    marginRight: theme.spacing(2)
  },
  group: {
    display: 'flex',
    flexWrap: 'wrap',
    width: 950,
    marginBottom: 20
  },
  teamGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 40,
    height: 240
  },
  labelGroup: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 25
  },
  label: {
    paddingLeft: 10
  }
}));

const menuItems = {
  PLUS: ['SOCCER', 'MLB', 'GOLF', 'TENNIS', 'NASCAR'],
  ACCOUNT: ['LOGIN', 'SIGNUP'],
  NFL: [
    'NFL HOME',
    'News',
    'Teams',
    'Schedule',
    'Standings',
    'Stats',
    'Transactions',
    'Compare',
    'Free Agents',
    'Retired Players'
  ]
};

export default function PlusMenu(props) {
  const classes = useStyles();
  const { type } = props;

  const renderNFLMenu = () => {
    if (type !== 'NFL') return;
    return (
      <div className={classes.group}>
        {Teams.NFL_TEAMS.map(teams => (
          <div className={classes.teamGroup} key={teams.key}>
            <h4>{teams.key}</h4>
            {teams.values.map(team => (
              <div key={team.name} className={classes.labelGroup}>
                <img
                  src={`http://content.sportslogos.net/logos/7/${team.logo}`}
                  alt=""
                  width="35"
                  height="auto"
                  style={{ maxHeight: 25 }}
                />
                <span className={classes.label}>{team.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <MenuList>
        {menuItems[type].map(menu => (
          <MenuItem key={menu}>{menu}</MenuItem>
        ))}
      </MenuList>
      {renderNFLMenu()}
    </div>
  );
}
