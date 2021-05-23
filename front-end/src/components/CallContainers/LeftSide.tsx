import React, { useState } from 'react';
import styled from 'styled-components';

const SideBar = styled.div<{ isLeftSideShow?: boolean }>`
  width: 280px;
  z-index: 1;
  background-color: #7F77D4;
  position: relative;
  top: 64px;
  flex: 1 0 auto;
  height: 100%;
  display: flex;
  outline: 0;
  z-index: 9;
  position: fixed;
  overflow-y: auto;
  flex-direction: column;
  border-right: 0.5pt solid #38444d;

  @media screen and (max-width: 936px) {
    display: ${(props) => (props.isLeftSideShow ? 'block' : 'none')};
    width: ${(props) => (props.isLeftSideShow ? '100%' : '280px')};
  }
}
`;

const SideBarBody = styled.div`
  box-sizing: content-box;
  flex-grow: 1;
  overflow-y: auto;
`;

const NavItem = styled.div<{ selected?: boolean }>`
  padding: 10px 30px;
  border-bottom: 1px solid #38444d;
  cursor: pointer;
  user-select: none;
  color: white;
  &:hover {
    background-color: #25394c;
    transition: background-color 0.5s ease;
  }
  ${(props) =>
    props.selected &&
    `
    background-color: #25394c;
    border-right: 5px solid #65a9e5;
    font-weight: 500;
    transition: all 0.5s ease;
  `}
`;

type Props = { items: any[]; onItemSelect: (item: any) => any; isLeftSideShow: boolean };

export const LeftSide = ({ items, onItemSelect, isLeftSideShow }: Props) => {
  const [selectedId, setSelectedId] = useState();

  const handleSelection = (item: any) => {
    setSelectedId(item.id);
    onItemSelect(item);
  };

  return (
    <SideBar isLeftSideShow={isLeftSideShow}>
      <SideBarBody>
        <nav>
          {items.map((item) => (
            <NavItem
              selected={selectedId === item.id}
              role="button"
              onClick={() => handleSelection(item)}
              key={item.id}>
              {item.title}
            </NavItem>
          ))}
        </nav>
      </SideBarBody>
    </SideBar>
  );
};
