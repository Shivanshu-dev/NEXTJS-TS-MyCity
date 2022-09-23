import React from 'react';
import styled from 'styled-components';
// import LoggedInHeader from './LoggedInHeader';
import NoUserHeader from './NoUserHeader';

function Header() {
  return (
    <HeaderContainer>
      <NoUserHeader />
      {/* <LoggedInHeader /> */}
    </HeaderContainer>
  );
}

export default Header;


const HeaderContainer = styled.div({
  marginBottom:'8px'
})