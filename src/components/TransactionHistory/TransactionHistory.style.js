import styled from 'styled-components';

export const Table = styled('table')(() => {
  return {
    margin: '0 auto',
    width: 'auto',
    minWidth: '50%',
    backgroundColor: '#4B0082',
    borderCollapse: 'collapse',
  };
});

export const TableHead = styled('thead')(() => {
  return {
    backgroundColor: '#DAA520',
  };
});

export const TableRow = styled('tr')(() => {
  return {
    borderBottom: '1px dashed #696969',
    '&:last-child': {
      borderBottom: 'none',
    },
  };
});

export const TableCell = styled('td')(() => {
  return {
    padding: '10px',
    textAlign: 'center',
    color: 'white',
    borderRight: '1px dashed #696969',
    '&:last-child': {
      borderRight: 'none',
    },
  };
});
