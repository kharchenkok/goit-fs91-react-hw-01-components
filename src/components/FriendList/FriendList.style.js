import styled from 'styled-components';
import { FlexList } from '../../commonStyle/CommonStyle';

export const FriendListStyle = styled(FlexList)(() => {
  return {
    justifyContent: 'center',
    flexDirection: 'column',
  };
});
