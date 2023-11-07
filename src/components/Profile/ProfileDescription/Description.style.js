import styled from 'styled-components';

export const Description = styled('div')(() => {
  return {
    display: 'grid',
    gap: '20px',
    '& p.name': {
      position: 'relative',
      top: '0',
      left: '-20px',
      fontSize: '24px',
      fontWeight: 'bold',
      padding: '5px',
      color: '#32CD32',
      textAlign: 'center',
      backgroundColor: '#4B0082',
      borderBottomRightRadius: '16px',
      borderTopRightRadius: '16px',
    },
  };
});
