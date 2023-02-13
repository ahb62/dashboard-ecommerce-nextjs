import { ListItemButtonBaseProps } from '@mui/material';
import { createTheme } from "@mui/material/styles";
import { esES } from "@mui/material/locale";


export const width = 240;

const pxToRem = (number: number, baseNumber = 16) => {
    return `${number / baseNumber}rem`;
  }

  const globals =  {
    body: {
      background: "#ccdade",
    }
  }
  
  const muiTheme = createTheme(
    {
      palette: {
        primary: { main: "#1976d2" },
      },
  
  
  
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            ...globals
          }
        }
      }
    },
    esES
  );
  

export const paper = {
  boxSizing: 'border-box', 
  width,
  margin: '1rem',
  marginBottom: 'inherit',
  height: 'calc(100vh - 2rem)',
  boxShadow: 'rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem',
  border: 0,
  borderRadius: '0.75rem',
  background: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))',
};

export const permanent = {
  display: { xs: 'none', sm: 'block' },
  '& .MuiDrawer-paper': {
    ...paper,
    transition: muiTheme.transitions.create(["margin-left", "margin-right"], {
      easing: muiTheme.transitions.easing.easeInOut,
      duration: muiTheme.transitions.duration.standard,
    }),
  },
}

export const divider = {
  border: '0 solid rgba(0, 0, 0, 0.08)',
  height: pxToRem(1),
  margin: '1rem 0px',
  bacgroundColor: 'transparent',
  backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0), #ffffff, rgba(255, 255, 255, 0))!important'
}

export const baseListItem: ListItemButtonBaseProps['sx'] = {
  color: '#fff',
  borderRadius: pxToRem(6),
  '&:hover': {
    color: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  '&.Mui-selected': {
    background: `${muiTheme.palette.primary.main} !important`
    // background: 'linear-gradient(195deg, #49a3f1, #1A73E8)',
  },
  '& .MuiListItemIcon-root': {
    color: '#fff'
  }
}

export const listItem: ListItemButtonBaseProps['sx'] = {
  ...baseListItem,
  margin: `${pxToRem(1.5)} ${pxToRem(6)} !important`,
}

export const listSubItem: ListItemButtonBaseProps['sx'] = {
  ...baseListItem,
  marginLeft: `${pxToRem(5)} !important`,
  marginRight: `${pxToRem(5)} !important`,
}
