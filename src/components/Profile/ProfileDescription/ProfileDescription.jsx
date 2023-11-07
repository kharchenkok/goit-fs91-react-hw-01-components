import PropTypes from 'prop-types';
import { UserAvatar } from '../../../commonStyle/CommonStyle';
import { Description } from './Description.style';

export const ProfileDescription = ({ username, avatar, tag, location }) => {
  const defaultAvatar =
    'https://cdn-icons-png.flaticon.com/512/1077/1077012.png';
  return (
    <Description>
      <UserAvatar width="200px" height="200px">
        <img
          src={avatar || defaultAvatar}
          alt="User avatar"
          className="avatar"
        />
      </UserAvatar>

      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </Description>
  );
};
ProfileDescription.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};
