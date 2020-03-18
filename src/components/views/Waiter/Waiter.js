import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      //error: PropTypes.anyOf([PropTypes.bool,PropTypes.string]), <- cos tu nie gra
    }),
    tables: PropTypes.array,
    updateStatus: PropTypes.func,
  }

  componentDidMount() {
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(orderId, status) {
    const { updateStatus } = this.props;
    switch (status) {
      case 'free':
        return (
          <div className={styles.buttons}>
            <Button onClick={() => updateStatus(orderId, 'Thinking')} className={styles.buttons} component={Link} variant="contained" color="primary" to={`${process.env.PUBLIC_URL}/waiter/order/new`}>
              Thinking
            </Button>
            <Button onClick={() => updateStatus(orderId, 'New order')} className={styles.buttons} component={Link} variant="contained" color="primary" to={`${process.env.PUBLIC_URL}/waiter/order/new`}>
              New order
            </Button>
          </div>
        );
      case 'thinking':
        return (
          <Button onClick={() => updateStatus(orderId, 'New order')} className={styles.buttons} component={Link} variant="contained" color="primary" to={`${process.env.PUBLIC_URL}/waiter/order/new`}>
            New order
          </Button>
        );
      case 'ordered':
        return (
          <Button onClick={() => updateStatus(orderId, 'Prepared')} className={styles.buttons} component={Link} variant="contained" color="primary" to={`${process.env.PUBLIC_URL}/waiter/order/123abc`}>
            Prepared
          </Button>
        );
      case 'prepared':
        return (
          <Button onClick={() => updateStatus(orderId, 'Delivered')} className={styles.buttons} component={Link} variant="contained" color="primary" to={`${process.env.PUBLIC_URL}/waiter/order/123abc`}>
            Delivered
          </Button>
        );
      case 'delivered':
        return (
          <Button onClick={() => updateStatus(orderId, 'Paid')} className={styles.buttons} component={Link} variant="contained" color="primary" to={`${process.env.PUBLIC_URL}/waiter/order/123abc`}>
            Paid
          </Button>
        );
      case 'paid':
        return (
          <Button onClick={() => updateStatus(orderId, 'Free')} className={styles.buttons} component={Link} variant="contained" color="primary" to={`${process.env.PUBLIC_URL}/waiter/order/123abc`}>
            Free
          </Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if( active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.order && <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>{row.order}</Button>}</TableCell>
                  <TableCell>{this.renderActions(row.status)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}
export default Waiter;