import { DefaultTheme } from 'styled-components';

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
const theme = {
  background: '#2B2B2B',
  backgroundContent: '#656565',
  backgroundLogo: '#063461',
  backgroundTools: '#232323',
  backgroundSidebar: '#11243D',
  backgroundSidebarGroup: '#172F4D',
  backgroundProfilePerfil: '#656565',
  backgroundProfileTools: '#2B2B2B',
  white: '#FdFdFd',
  shadow: '#cccccc29',
};

const defaultTheme: DefaultTheme = {
  layout: {
    body: {
      background: theme.background,
      color: theme.white,
      backgroundLogo: theme.backgroundLogo,
    },
    navbar: {
      background: theme.backgroundContent,
      color: theme.white,
      backgroundTools: theme.backgroundTools,
      shadowColor: theme.shadow,

      profile: {
        perfil: {
          background: theme.backgroundProfilePerfil,
          color: theme.white,
        },
        tools: { background: theme.backgroundProfileTools, color: theme.white },
      },
    },
    sidebar: {
      background: theme.backgroundSidebar,
      color: theme.white,
      backgroundGroup: theme.backgroundSidebarGroup,
    },
    content: {
      background: theme.backgroundContent,
      color: theme.white,
      shadowColor: theme.shadow,
      titleBar: {
        color: theme.white,
      },
    },
    footer: {
      backgroundTop: theme.backgroundContent,
      backgroundBottom: brandColors.violet.dark,
      color: theme.white,
      backgroundLogo: theme.white,
    },
    violet: {
      dark: brandColors.violet.dark,
      default: brandColors.violet.default,
      lighter: brandColors.violet.lighter,
    },
    orange: {
      dark: brandColors.orange.dark,
      default: brandColors.orange.default,
      lighter: brandColors.orange.lighter,
    },
    darkNeutrals: {
      darker: brandColors.darkNeutrals.darker,
      dark: brandColors.darkNeutrals.dark,
      default: brandColors.darkNeutrals.default,
      light: brandColors.darkNeutrals.light,
      lighter: brandColors.darkNeutrals.lighter,
    },
    lightNeutrals: {
      darker: brandColors.lightNeutrals.darker,
      dark: brandColors.lightNeutrals.dark,
      default: brandColors.lightNeutrals.default,
      light: brandColors.lightNeutrals.light,
      lighter: brandColors.lightNeutrals.lighter,
    },
    success: {
      default: brandColors.success.default,
      lighter: brandColors.success.lighter,
    },
  },
};

export { defaultTheme };
