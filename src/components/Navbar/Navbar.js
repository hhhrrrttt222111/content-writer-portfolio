import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IconButton, ListItem, ListItemText, Drawer, List } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import './Navbar.css'

import navImg from '../../assets/png/navImg.png'

function Navbar({ home }) {

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const useStyles = makeStyles({
        MuiDrawer: {
            padding:'1em 1.8em',
            width:'11em',
            fontFamily:' Roboto',
            fontStyle:' normal',
            fontWeight:' normal',
            fontSize:' 24px',
            background: '#ffb3ff',
            overflow: 'hidden'
        },
        closebtnIcon: {
            fontSize: '1.85rem',
            cursor: 'pointer'
        }
    });


    const styles = {
        background: home ? 'transparent' : 'white',
        boxShadow: home ? 'none' : '0 12px 24px rgb(47 49 93 / 5%)',
    }

    const navItemStyle = {
        color: home ? 'white' : '#800080',
    }

    const activeStyle = {
        borderBottom: home ? '3px solid white' : '3px solid #800080',
        // borderTop: home ? '3px solid white' : '3px solid #800080',
        paddingBottom: '0.35rem',
        paddingTop: '0.35rem',
    }

    const classes = useStyles();

    return (
        <div className="navbar" style={styles}>

            <div className="navbar-mob">
                <IconButton
                    style={{borderRadius: '100%'}}
                    disableFocusRipple={true}
                    disableRipple={true}
                    onClick={handleDrawerOpen}
                    className="menuDrawerIcon"
                >
                    <MenuIcon style={{fontSize: '2.1rem', color: 'black', background: '#ffb3ff', borderRadius: '100%', padding: '0.45rem'}}/>
                </IconButton>


                <Drawer     
                    variant="temporary"
                    onBackdropClick={handleDrawerClose}
                    onEscapeKeyDown={handleDrawerClose}
                    anchor="left"
                    open={open}
                    classes={{ paper: classes.MuiDrawer }}
                    className="drawer"
                >
                    <div className="div-closebtn">
                        <CloseIcon onClick={handleDrawerClose} className={classes.closebtnIcon}/>
                    </div><br/>
                    <div onClick={handleDrawerClose}>
                        <List>
                            <NavLink to="/" className="drawerLinks" smooth={true} spy="true" duration={2000}>
                                <ListItem className={classes.drawerItem}>
                                    <ListItemText>
                                    HOME
                                    </ListItemText>
                                </ListItem>
                            </NavLink>

                            <NavLink to="/about" className="drawerLinks" smooth={true} spy="true" duration={2000}>
                                <ListItem className={classes.drawerItem}>
                                    <ListItemText>
                                        ABOUT
                                    </ListItemText>
                                </ListItem>
                            </NavLink>

                            <NavLink to="/services" className="drawerLinks" smooth={true} spy="true" duration={2000}>
                                <ListItem className={classes.drawerItem}>
                                    <ListItemText>
                                        SERVICES
                                    </ListItemText>
                                </ListItem>
                            </NavLink>

                            <NavLink to="/blog" className="drawerLinks" smooth={true} spy="true" duration={2000}>
                                <ListItem className={classes.drawerItem}>
                                    <ListItemText>
                                        BLOG
                                    </ListItemText>
                                </ListItem>
                            </NavLink>

                            <NavLink to="/contact" className="drawerLinks" smooth={true} spy="true" duration={2000}>
                                <ListItem className={classes.drawerItem}>
                                    <ListItemText>
                                        CONTACT
                                    </ListItemText>
                                </ListItem>
                            </NavLink>
                        </List>

                        <img src={navImg} alt="" className="nav-img" />
                    </div>
                </Drawer>
            </div>       



            <div className="navbar-pc" >
                <NavLink to="/" >
                    <p style={navItemStyle}>home</p>
                </NavLink>
                <NavLink to="/about" activeStyle={activeStyle}>
                    <p style={navItemStyle}>about</p>
                </NavLink>
                <NavLink to="/services" activeStyle={activeStyle}>
                    <p style={navItemStyle}>services</p>
                </NavLink>
                <NavLink to="/blog" activeStyle={activeStyle}>
                    <p style={navItemStyle}>blog</p>
                </NavLink>
                <NavLink to="/contact" activeStyle={activeStyle}>
                    <p style={navItemStyle}>contact</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar
