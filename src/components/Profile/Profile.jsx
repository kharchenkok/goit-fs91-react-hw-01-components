import PropTypes from 'prop-types';
import { ProfileDescription } from './ProfileDescription/ProfileDescription';
import { ProfileStatsList } from './ProfileStatsList/ProfileStatsList';
import { Section } from '../Common/Section';
import { UserCard } from './Profile.style';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Section>
      <UserCard>
        <ProfileDescription
          username={username}
          avatar={avatar}
          tag={tag}
          location={location}
        />
        <ProfileStatsList stats={stats} />
      </UserCard>
    </Section>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
