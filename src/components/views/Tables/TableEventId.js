import React from 'react';
import styles from './Table.module.scss';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const demoContent = { date: '10/20/2014', time: '15:00', firstName: 'Rachel', lastName: 'Buck', table: '2', starters: 'beer' };

const TablesEventsId = ({ match }) => {
  return (
    <Paper className={styles.component}>
      <h2>{'Event ' + match.params.id + ' details:'}</h2>
      <Table>
        <TableHead>
          <TableRow>
            {Object.keys(demoContent).map(key => (
              <TableCell key={key} className={styles.keys}>
                {key}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {Object.values(demoContent).map(value => (
              <TableCell key={value} className={styles.values}>
                {value}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

TablesEventsId.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }),
};

export default TablesEventsId;