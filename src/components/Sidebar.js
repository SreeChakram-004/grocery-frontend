import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { makeStyles } from '@mui/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.success.dark, // Set background color to green
    // color: 'white', // Set text color to white
  },
  listItem: {
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  listItemText: {
    color: theme.palette.primary.main, // Set text color to primary
  },
  selected: {
    backgroundColor: theme.palette.primary.main, // Set background color to primary
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const Sidebar = ({ isOpen, toggleSidebar, setPage }) => {
  const classes = useStyles();

  const handleMenuItemClick = (page) => {
    setPage(page);
    toggleSidebar();
  };

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={toggleSidebar}
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <List>
        {['Add Grocery', 'Groceries'].map((page, index) => (
          <ListItem
            button
            key={index}
            className={classes.listItem}
            onClick={() => handleMenuItemClick(page)}
          >
            <span className={classes.listItemText}>{page}</span>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
