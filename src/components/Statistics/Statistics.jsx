import { StatisticsList } from './StatisticsList/StatisticsList';
import PropTypes from 'prop-types';
import { Section } from '../Common/Section';

export const Statistics = ({ title, data }) => {
  return (
    <Section className="statistics" title={title}>
      <StatisticsList statisticsData={data} />
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
