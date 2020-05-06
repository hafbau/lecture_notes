import React, { useState } from 'react';
import { makeStyles } from '../../lib/styles';
import {
  BottomNavigation,
  BottomNavigationAction,
} from '../../external_components';
import { NavItem } from './NavItem';

const NavList = props => <nav {...props} />

const useMobileStyles = makeStyles({
  root: {
    // width: 500,
    bottom: 0
  },
});
const MobileNav = ({ className, ...restProps }) => {
  const classes = useMobileStyles();
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={`${classes.root} ${className}`}
      {...restProps}
    />
  )
}

const useNavStyles = makeStyles({
  root: {
    height: 60,
    backgroundColor: '#e99',
    position: 'absolute',
    width: '100%',
    top: ({ isMobile }) =>!isMobile && 0,
    bottom: ({ isMobile }) => isMobile && 0
  }
})
export const Nav = ({ navRoutes, isMobile }) => {
  const classes = useNavStyles({ isMobile });
  const NavContainer = isMobile ? MobileNav : NavList;
  const NavListItem = isMobile ? BottomNavigationAction : NavItem;

  return (
    <NavContainer className={classes.root}>
      {navRoutes.map(({ icon:Icon, label }) => 
        <NavListItem
          key={label}
          label={label}
          icon={<Icon />}
        />
      )}
    </NavContainer>
  )
}

