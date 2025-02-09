import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { GlobalStoreContext } from '../store'
import React, { useContext, useEffect,useState } from 'react'


const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function CustomizedMenus(props) {
  const { store } = useContext(GlobalStoreContext);
  const {published}= props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let SortCreationDate = ()=>{store.setSort("CreationDate");}
  let SortLastEditDate = ()=>{store.setSort("LastEditDate");}
  let SortName = ()=>{store.setSort("Name");}
  let SortPublishedDate = ()=>{store.setSort("PublishedDate");}
  let SortListens = ()=>{store.setSort("Listens");}
  let SortLikes = ()=>{store.setSort("Likes");}
  let SortDislikes = ()=>{store.setSort("Dislikes");}

  let Items = 
    <div>
    <MenuItem style={{
              fontFamily: 'Gummy',
              width: '100%',
              height: '30%',
              color: 'white',
              backgroundColor: '#363535',
            }} onClick={SortCreationDate} disableRipple>
    Creation Date (Old-New)
    </MenuItem>
    {/* <Divider sx={{ my: 0 }} /> */}

    <MenuItem style={{
              fontFamily: 'Gummy',
              width: '100%',
              height: '30%',
              color: 'white',
              backgroundColor: '#363535',
            }}onClick={SortLastEditDate} disableRipple>
    Last Edit Date (New-Old)
    </MenuItem>
    
    <MenuItem style={{
              fontFamily: 'Gummy',
              width: '100%',
              height: '30%',
              color: 'white',
              backgroundColor: '#363535',
            }} onClick={SortName} disableRipple>
      Name (A-Z)
    </MenuItem>
    </div>;
  if(published){
    Items=
     <div>
      <MenuItem onClick={SortName} disableRipple>
          Name (A-Z)
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={SortPublishedDate} disableRipple>
          Published Data(Newest)
        </MenuItem>
        
        <MenuItem onClick={SortListens} disableRipple>
          Listens(High-Low)
        </MenuItem>
        <MenuItem onClick={SortLikes} disableRipple>
          Likes(High-Low)
        </MenuItem>
        <MenuItem onClick={SortDislikes} disableRipple>
          Dislikes(High-Low)
        </MenuItem>
      </div>
  }
  return (
    <div>
      <Button
        style={{
          fontFamily: 'Gummy',
          width: '100%',
          height: '20%',
          color: '#00334d',
          backgroundColor: '#f2f2f2',
          fontWeight:'bold',
          border:"1px solid black"
              
        }}
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Sort By
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {Items}
      </StyledMenu>
    </div>
  );
}