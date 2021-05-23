import React, { useState } from 'react';
import styled from 'styled-components';
import { Logo, ProfilePicture } from '../CallComponents';
import menu from '../../assets/menu.svg';
import { LeftSide } from '../CallContainers';

const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  background: #7f77d4;
  box-shadow: 2px 2px 6px #000000;
  box-sizing: border-box;
  flex-shrink: 0;
  flex-direction: column;
  z-index: 10;
  .toolbar {
    height: 64px;
    padding-left: 24px;
    padding-right: 24px;
    display: flex;
    position: relative;
    align-items: center;
  }
`;

const MenuIcon = styled.input.attrs({
  type: 'image',
  src: menu,
})`
  height: 40px;
  width: 40px;
  margin-right: 24px;
  display: none;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 936px) {
    display: block;
    margin-left: 0;
    flex-direction: column;
  }
`;

type Props = { title: string; picture: string; navItems: any[]; onNavItemSelect: (user: any) => any };

export const Header = ({ title, picture, navItems, onNavItemSelect }: Props) => {
  const [isLeftSideShow, setLeftSideShow] = useState(false);
  return (
    <>
      <HeaderContainer>
        <div className="toolbar">
          <MenuIcon onClick={() => setLeftSideShow((flag) => !flag)} />

          <Logo>{title}</Logo>

          <div style={{ flexGrow: 1 }} />
          <ProfilePicture picture={picture} />
        </div>
      </HeaderContainer>
      {navItems && (
        <LeftSide isLeftSideShow={isLeftSideShow} onItemSelect={(user) => onNavItemSelect(user)} items={navItems} />
      )}
    </>
  );
};
