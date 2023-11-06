import PropTypes from 'prop-types';
import { ProfileStatsItem } from '../ProfileStatsItem/ProfileStatsItem';
import css from '../Profile.module.css';

export const ProfileStatsList = ({ stats }) => {
  return (
    <ul className={css.statsList}>
      {Object.entries(stats).map(([key, value]) => (
        <ProfileStatsItem key={key} title={key} value={value} />
      ))}
    </ul>
  );
};

ProfileStatsList.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
