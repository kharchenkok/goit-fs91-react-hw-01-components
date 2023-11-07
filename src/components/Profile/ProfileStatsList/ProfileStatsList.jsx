import PropTypes from 'prop-types';
import { ProfileStatsItem } from '../ProfileStatsItem/ProfileStatsItem';
import { StatsList } from './StatsList.style';

export const ProfileStatsList = ({ stats }) => {
  return (
    <StatsList>
      {Object.entries(stats).map(([key, value]) => (
        <ProfileStatsItem key={key} title={key} value={value} />
      ))}
    </StatsList>
  );
};

ProfileStatsList.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
