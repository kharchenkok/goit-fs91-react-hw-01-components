import styled from 'styled-components';
import { FlexList } from '../../../commonStyle/CommonStyle';

export const StatsList = styled(FlexList)(() => {
  return {
    '& li': {
      width: '100px',
      height: '100px',
      display: 'flex',
      gap: '2px',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#DAA520',
      borderRadius: '50%',
      backgroundColor: '#4B0082',
      filter: 'drop-shadow(0px 0px 4px rgba(0,0,0,0.7))',

      '& span.quantity': {
        fontSize: '18px',
        fontWeight: 'bold',
      },
    },
  };
});
