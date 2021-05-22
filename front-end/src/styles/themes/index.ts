import { DefaultTheme } from 'styled-components';

const theme = {
  background: '#F2F2F2',
  backgroundContent: '#FdFdFd',
  backgroundLogo: '#002A5D',
  backgroundTools: '#E6E6E6',
  backgroundSidebar: '#5F6A7D',
  backgroundSidebarGroup: '#556072',
  white: '#F7F7F7',
  blue: '#002A5D',
  black: '#040404',
  shadow: '#00000029',
};

const brandColors = {
  violet: {
    dark: '#7F77D4',
    default: '#9188E5',
    lighter: '#E6E6FA',
  },
  orange: {
    dark: '#E86F4A',
    default: '#F78057',
    lighter: '#FAEBE6',
  },
  darkNeutrals: {
    darker: '#1F1E26',
    dark: '#2D2C36',
    default: '#3F3D4A',
    light: '#575666',
    lighter: '#747285',
  },
  lightNeutrals: {
    darker: '#B3B2BD',
    dark: '#CFCED6',
    default: '#E6E6EB',
    light: '#F0F0F5',
    lighter: '#FAFAFC',
  },
  success: {
    default: '#2BAF1F',
    lighter: '#E4F7ED',
  },
};

const darkTheme: DefaultTheme = {
  layout: {
    body: {
      background: brandColors.lightNeutrals.lighter,
      color: theme.blue,
    },
    navbar: {
      background: theme.backgroundContent,
      color: theme.blue,
      backgroundTools: theme.backgroundTools,
      shadowColor: theme.shadow,

      profile: {
        perfil: { background: theme.backgroundTools, color: theme.blue },
        tools: { background: theme.backgroundSidebar, color: theme.white },
      },
    },
    sidebar: {
      background: theme.backgroundSidebar,
      color: theme.white,
      backgroundGroup: theme.backgroundSidebarGroup,
    },
    content: {
      background: theme.backgroundContent,
      color: theme.black,
      shadowColor: theme.shadow,
      titleBar: {
        color: theme.blue,
      },
    },
    footer: {
      backgroundTop: theme.backgroundContent,
      backgroundBottom: theme.backgroundTools,
      color: theme.blue,
      backgroundLogo: theme.backgroundTools,
    },
  },
};

export { darkTheme, brandColors };
