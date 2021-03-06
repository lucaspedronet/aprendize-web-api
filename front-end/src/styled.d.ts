import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    layout: {
      body: {
        background: any;
        color: string;
        backgroundLogo: string;
      };
      navbar: {
        background: string;
        color: string;
        backgroundTools: string;
        shadowColor: string;

        profile: {
          perfil: { background: string; color: string };
          tools: { background: string; color: string };
        };
      };
      sidebar: {
        background: string;
        color: string;
        backgroundGroup: string;
      };
      content: {
        background: string;
        color: string;
        shadowColor: string;
        titleBar: {
          color: string;
        };
      };
      footer: {
        backgroundTop: string;
        backgroundBottom: string;
        color: string;
        backgroundLogo: string;
      };
      violet: {
        dark: string;
        default: string;
        lighter: string;
      };
      orange: {
        dark: string;
        default: string;
        lighter: string;
      };
      darkNeutrals: {
        darker: string;
        dark: string;
        default: string;
        light: string;
        lighter: string;
      };
      lightNeutrals: {
        darker: string;
        dark: string;
        default: string;
        light: string;
        lighter: string;
      };
      success: {
        default: string;
        lighter: string;
      };
    };
  }
}
