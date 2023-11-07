import styled from 'styled-components';

export const UserCard = styled('div')(() => {
  return {
    margin: '0 auto',
    padding: '20px',
    display: 'grid',
    gap: '20px',
    width: '55%',
    maxWidth: '400px',
    borderRadius: '16px',
    background: 'linear-gradient(to bottom, #DAA520 52%, white 52%)',
    filter: 'drop-shadow(0px 0px 4px rgba(0,0,0,0.7))',
  };
});
