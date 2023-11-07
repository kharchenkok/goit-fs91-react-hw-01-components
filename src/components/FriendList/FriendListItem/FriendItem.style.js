import styled from 'styled-components';

// const glowing = keyframes`
//   0% {
//     background-color: #2ba805;
//     box-shadow: 0 0 5px #2ba805;
//   }
//   50% {
//     background-color: #49e819;
//     box-shadow: 0 0 20px #49e819;
//   }
//   100% {
//     background-color: #2ba805;
//     box-shadow: 0 0 5px #2ba805;
//   }
// `;

export const FriendItemStyle = styled('li')(() => {
  return {
    display: 'grid',
    gap: '20px',
    gridTemplateColumns: '0.5fr 1fr 1fr',
    alignItems: 'center',
    justifyItems: 'center',
    borderRadius: '16px',

    padding: '4px 20px',
    border: '4px solid #4B0082',
    backgroundColor: 'white',
    filter: 'drop-shadow(0px 0px 4px rgba(0,0,0,0.7))',
    '& p.name': {
      fontWeight: 'bold',
      fontSize: '20px',
      color: '#4B0082',
    },
  };
});

export const UserStatus = styled('span')(({ color }) => {
  return {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: color,
    filter: 'drop-shadow(0px 0px 4px rgba(0,0,0,0.7))',
  };
});
