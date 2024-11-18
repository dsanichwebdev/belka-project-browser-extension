import React from 'react';
import { styled } from '@stitches/react';
import { Heading, Flex, IconButton } from '@radix-ui/themes';

const Container = styled(Flex, {
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '5px',
  width: '300px',
  flexDirection: 'column',
});

const RowFlex = styled(Flex, {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

const StyledHeading = styled(Heading, {
  marginLeft: '10px',
  color: '#ffbf00',
  fontSize: '16px',
  fontWeight: 'bold',
});

const StyledLogo = styled('img', {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  objectFit: 'cover',
  display: 'flex',
});

const StyledUnathorizedAvatar = styled('img', {
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  objectFit: 'cover',
  display: 'flex',
  background: '#f0f0f0',
  padding: '5px'
});

const StyledLoginButton = styled(IconButton, {
  backgroundColor: '#ffbf00',
  color: 'white',
  borderRadius: '8px',
  padding: '10px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  fontWeight: 'bold',
  marginTop: '6px',
  transition: 'background-color 0.3s',
  border: 'none',
  width: '100%',

  '&:hover': {
    backgroundColor: '#e6a900',
  },

  '&:active': {
    backgroundColor: '#cc9200',
  }
});

const authenticate = () => {
  console.log('authenticate!')
}

const PopupLayout = () => (
  <Container>
    <RowFlex>
      <Flex style={{ display: 'flex', alignItems: 'center' }}>
        <StyledLogo src="icons/icon128.png" alt="Extension Icon" />
        <StyledHeading>BelkaScope</StyledHeading>
      </Flex>
      {/* <StyledUnathorizedAvatar src="icons/unathorized-user-icon.png"/> */}
    </RowFlex>
    <StyledLoginButton onClick={authenticate}>
      Авторизоваться
    </StyledLoginButton>
  </Container>
);

export default PopupLayout;
