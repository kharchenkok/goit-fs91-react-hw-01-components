import PropTypes from 'prop-types';
import { SectionStyle, SectionTitle } from '../../commonStyle/CommonStyle';
export const Section = ({ title, children }) => {
  return (
    <SectionStyle>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </SectionStyle>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
