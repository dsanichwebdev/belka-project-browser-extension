import React from 'react';
import { styled } from '@stitches/react';
import { Heading } from '@radix-ui/themes';

const ExtensionContainer = styled('div', {
  width: '300px',
  height: 'auto',
  padding: 0,
  margin: 0,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
});

const Image = styled('img', {
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
});

const StyledHeading = styled(Heading, {
  marginTop: '0',
  marginBottom: '10px',
  color: '#ffbf00',
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center',
});

const Welcome = () => (
  <ExtensionContainer>
    <StyledHeading size="4">BelkaScope</StyledHeading>
    <Image src="icons/icon128.png" alt="Extension Icon" />
  </ExtensionContainer>
);

export default Welcome;
