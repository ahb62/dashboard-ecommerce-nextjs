import {
    Dashboard as DashboardIcon,
    MonetizationOnOutlined as MonetizationIcon,
    AccountBalance as AccountBalanceIcon,
    People as PeopleIcon, 
    ShoppingBag as ShoppingBagIcon,
    Article as ArticleIcon
  } from '@mui/icons-material';
  import LocalActivityIcon from '@mui/icons-material/LocalActivity';
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
      path: "/usuarios" 
    },
  ];
  
  export default routes;
  