import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';

import { 
  Box, 
  Divider,
  Drawer, 
  List, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText,
  Collapse
} from '@mui/material';
import { 
  GridView as GridViewIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
  RotateLeft
} from '@mui/icons-material';

import * as drawerStyles from './drawer';
import routes, { RouteType } from './routes';

const RouteItem: React.FC<RouteType> = ({ text, sub, path, icon: Icon }) => {
  const [openCollapse, setOpenCollapse] = useState(false);

  const router = useRouter();  
  const isSub = useMemo(() => !!sub?.length, [sub]);

  const isMatchPath = useMemo(() => {
    if(!isSub) {
      if(path === '/') return router.asPath === path;
      return router.asPath.startsWith(path);
    }
    return false; 
  }, [isSub, path, router.asPath]);
  
  useEffect(() => {
    if(isSub) {
      let someSubPathIsMatch = false;
      sub.forEach((subRoute: any) => {
        someSubPathIsMatch = router.asPath.startsWith(subRoute.path);
      });
      if(someSubPathIsMatch) setOpenCollapse(true);
    }
  }, [isSub, router.asPath, sub])

  const collapse = useMemo(() => {
    if(isSub) {
      return (
        <Collapse in={openCollapse} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {sub.map((subRoute: any, i: any) => {
              const isMatchSubPath = router.asPath.startsWith(subRoute.path);
              return (
                <ListItemButton 
                  key={`sub-route#${i+1}`} 
                  LinkComponent={Link}
                  href={subRoute.path}
                  sx={{ ...drawerStyles.listSubItem, pl: 3 }}
                  selected={isMatchSubPath}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary={subRoute.text} />
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
      );
    }
    return null;
  }, [isSub, openCollapse, router.asPath, sub]);

  const expandIcon = useMemo(() => {
    if(isSub) {
      return openCollapse ? <ExpandLessIcon /> : <ExpandMoreIcon />
    }
    return null;
  }, [isSub, openCollapse])
  
  const linkComponent = useMemo(() => isSub ? Link : undefined,[isSub])
  const href = useMemo(() => isSub ? undefined : path, [isSub, path]);
  
  const handleOnClick = useCallback(() => {
    if(isSub) {
      setOpenCollapse((prevState) => !prevState)
    }
  }, [isSub])

  return (
    <>
      <ListItemButton
        href={href}
        LinkComponent={linkComponent}
        onClick={handleOnClick}
        sx={drawerStyles.listItem}
        selected={isMatchPath}>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={text} />
        {expandIcon}
      </ListItemButton>
      {collapse}
    </>
  )
}

interface SidebarProps {
  window?: () => Window;
  openMenu: any;
  setOpenMenu: any;
}
const SideBar: React.FC<SidebarProps> = ({ window, openMenu, setOpenMenu }) => {

  const container = useMemo(() => 
    window !== undefined ? 
      () => window().document.body 
      : undefined,
  [window]);
  
  const routesList = useMemo(() => 
    routes.map((route: any, i: any) => {
      return (
        <RouteItem
          key={`route#${i+1}`}
          path={route.path}
          text={route.text}
          icon={route.icon}
          sub={route.sub}
        />
      )
    })
  , []);

  const drawer = useMemo(() => (
    <div onClick={openMenu}>
  
      <Divider 
        sx={drawerStyles.divider}
      />
      <Box
        color="#fff"
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingX="32px" 
        paddingTop="20px" 
        paddingBottom="4px">


      </Box>
      <List>
        {routesList}
      </List>
    </div>
  ), [openMenu, routesList]);

  return (
    <Box
      component="nav"
      sx={{ flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

      <Drawer
        variant="persistent"
        sx={drawerStyles.permanent}
        container={container}
        open={openMenu}
      >
        {drawer}
      </Drawer>
    </Box>
  )
};

export default SideBar;
