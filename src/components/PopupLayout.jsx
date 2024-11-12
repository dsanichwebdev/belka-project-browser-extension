import React from 'react';
import { styled } from '@stitches/react';
import { Heading, Box, Flex, IconButton } from '@radix-ui/themes';

const Container = styled(Flex, {
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '5px',
  width: '300px',
});

const RowFlex = styled(Flex, {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

const StyledHeading = styled(Heading, {
  marginLeft: '10px',
  color: '#ffbf00',
  fontSize: '16px',
  fontWeight: 'medium',
});

const StyledAvatar = styled('img', {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  objectFit: 'cover',
});

const PopupLayout = () => (
  <Container>
    <RowFlex>
      <StyledAvatar src="icons/icon128.png" alt="Extension Icon" />
      <StyledHeading size="2">BelkaScope</StyledHeading>
    </RowFlex>
  </Container>
);

export default PopupLayout;
