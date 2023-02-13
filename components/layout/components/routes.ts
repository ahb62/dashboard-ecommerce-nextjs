import {
    Dashboard as DashboardIcon,
    MonetizationOnOutlined as MonetizationIcon,
    People as PeopleIcon, 
    ShoppingBag as ShoppingBagIcon,
  } from '@mui/icons-material';
  import { SvgIconTypeMap } from '@mui/material';
  import { OverridableComponent } from '@mui/material/OverridableComponent';

  export type RouteType = {
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
      muiName: string;
    }
    text: string;
    path?: string;
    sub?: Array<{
      text: string;
      path: string;
    }>
  }
  
  const routes: RouteType[] = [
    { 
      icon: DashboardIcon,
      text: "inicio", 
      path: "/" 
    },
    { 
      icon: MonetizationIcon,
      text: "ventas", 
      path: "/sales" 
    },

    {
      icon: ShoppingBagIcon, 
      text: "Productos", 
      path: "/products" 
    },
    { 
      icon: PeopleIcon,
      text: "Usuarios", 
      path: "/users" 
    },
  ];
  
  export default routes;
  