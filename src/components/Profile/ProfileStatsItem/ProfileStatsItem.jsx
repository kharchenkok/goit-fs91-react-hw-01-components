import PropTypes from 'prop-types';

export const ProfileStatsItem = ({ title, value }) => (
  <li className="item">
    <span className="quantity">{value}</span>
    <span className="label">{title}</span>
  </li>
);

ProfileStatsItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
