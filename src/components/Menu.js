import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

const options = [
    'Home',
    'Wins',
    'PlayerList',
    'MultiPlayer',
];

const ITEM_HEIGHT = 48;

class MyMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (event) => {
    this.setState({ anchorEl: null });
    if(event.target.textContent !== "") {
        this.props.setPage(event.target.textContent);
    }
    
  };

  handleChange = (e, v) => {
    
  }

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={"main-menu-container"}>
        <IconButton
          className={"main-menu"}
          aria-label="More"
          aria-owns={open ? 'long-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          onChange={this.handleChange}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {options.map(option => (
            <MenuItem key={option} onClick={this.handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default MyMenu;