import PropTypes from 'prop-types';
import css from '../Profile.module.css';

export const ProfileStatsItem = ({ title, value }) => (
  <li className={css.item}>
    <span className={css.label}>{title}</span>
    <span className={css.quantity}>{value}</span>
  </li>
);

ProfileStatsItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
