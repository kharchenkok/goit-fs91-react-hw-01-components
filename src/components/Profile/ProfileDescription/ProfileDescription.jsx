import PropTypes from 'prop-types';

export const ProfileDescription = ({ username, avatar, tag, location }) => {
  const defaultAvatar =
    'https://cdn-icons-png.flaticon.com/512/1077/1077012.png';
  return (
    <div className="description">
      <img src={avatar || defaultAvatar} alt="User avatar" className="avatar" />
      <p className="name">{username}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>
  );
};
ProfileDescription.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};
