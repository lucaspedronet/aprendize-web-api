import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 76px;
  font-size: 0.75rem;

  color: ${(props) => props.theme.layout.footer.color};
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.layout.footer.backgroundTop};
  padding: 0.3rem 0.7rem;
  width: 100vw;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  padding: 0.8rem 0.7rem;
  background-color: ${(props) => props.theme.layout.footer.backgroundBottom};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoLabs = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0;

  img {
    height: 14px;
    margin-left: 4px;
    background-color: ${(props) => props.theme.layout.footer.backgroundLogo};
    border-radius: 20%;
    padding: 1px;
  }
`;
