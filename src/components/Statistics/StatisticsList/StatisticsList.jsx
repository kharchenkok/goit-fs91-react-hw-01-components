import PropTypes from 'prop-types';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import { StatisticListStyle } from './StatisticsList.style';

export const StatisticsList = ({ statisticsData }) => {
  return (
    <StatisticListStyle>
      {statisticsData.map(({ id, label, percentage }) => (
        <StatisticsItem key={id} label={label} percentage={percentage} />
      ))}
    </StatisticListStyle>
  );
};

StatisticsList.propTypes = {
  statisticsData: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
