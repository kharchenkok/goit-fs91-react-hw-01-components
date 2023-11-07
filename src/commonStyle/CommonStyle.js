import styled from 'styled-components';

import backgroundImage from 'images/bg.svg';

export const Container = styled('div')(() => {
  return {
    padding: '0 40px',
    backgroundAttachment: 'fixed',
    backgroundImage: `url(${backgroundImage})`,
  };
});

export const SectionStyle = styled('section')(() => {
  return {
    padding: '40px 0',
    display: 'grid',
    gap: '20px',
  };
});

export const SectionTitle = styled('h2')(() => {
  return {
    textTransform: 'uppercase',
    fontSize: '28px',
    textAlign: 'center',
    color: '#32CD32',
    textShadow: '2px 2px 1px #333, -1px -1px 0 #4B0082',
  };
});
export const FlexList = styled('ul')(() => {
  return {
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '8px',
  };
});

export const UserAvatar = styled('div')(({
  width = '100px',
  height = '100px',
}) => {
  return {
    padding: '4px',
    width: width,
    height: height,
    justifySelf: 'center',
    borderRadius: '50%',
    backgroundColor: 'white',
    boxShadow:
      'inset rgba(0,0,0,.6) 0 -3px 8px, inset rgba(252,255,255,.7) 0 3px 8px, rgba(0,0,0,.8) 0 3px 8px -3px',

    '& img': {
      width: '100%',
      borderRadius: '50%',
      aspectRatio: '1/1',
      objectFit: 'cover',
      objectPosition: 'center',
    },
  };
});
