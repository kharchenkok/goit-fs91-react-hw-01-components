import PropTypes from 'prop-types';
import { StatisticsItemStyle } from './StatisticsItem.style';
import { getRandomColor } from '../../../utils/getRandomColor';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <StatisticsItemStyle color={getRandomColor()}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </StatisticsItemStyle>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
