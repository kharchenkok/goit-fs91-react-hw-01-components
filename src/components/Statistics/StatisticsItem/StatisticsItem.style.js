import styled from 'styled-components';

export const StatisticsItemStyle = styled('li')(({ color }) => {
  return {
    width: '100px',
    height: '100px',
    display: 'flex',
    gap: '2px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#4B0082',
    border: ' 10px solid',
    borderImageSlice: '1',
    borderWidth: '8px',
    borderImageSource: `linear-gradient(to top, ${color} 60%,  #4B0082 60%)`,
    backgroundColor: 'white',
    filter: 'drop-shadow(0px 0px 4px rgba(0,0,0,0.7))',
  };
});
