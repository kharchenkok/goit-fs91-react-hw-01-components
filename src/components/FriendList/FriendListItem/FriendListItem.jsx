import PropTypes from 'prop-types';
import { UserAvatar } from '../../../commonStyle/CommonStyle';
import { FriendItemStyle, UserStatus } from './FriendItem.style';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItemStyle>
      <UserStatus color={isOnline ? 'green' : 'red'} />
      <UserAvatar>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
      </UserAvatar>
      <p className="name">{name}</p>
    </FriendItemStyle>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
