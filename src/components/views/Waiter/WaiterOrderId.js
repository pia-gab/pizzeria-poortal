import React from 'react';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const WaiterOrderId = () => {
  const order = [
    {
      id: 1,
      meal: 'pizza',
      price: '$1120',
      options: ['vegan cheese', 'tomatoes', 'oregano'],
    },
    {
      id: 2,
      meal: 'dinner',
      price: '$300',
      options: ['rotisserie vegan chicken'],
    },
  ];

  const table = '1';

  return (
    <div className={styles.component}>
      <div className={styles.row}>
        <div className={styles.column}>
          <Paper className={styles.paper}>
            <div>
              <h3 className={styles.tableHeader}>
                Table: <span className={styles.table}>{table}</span>
              </h3>
            </div>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Meal</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell className={styles.optionsHeader}>Options</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {order.map(row => (
                  <TableRow key={row.id}>
                    <TableCell className={styles.rowContent} component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell className={styles.rowContent}>{row.meal}</TableCell>
                    <TableCell className={styles.rowContent}>{row.price}</TableCell>
                    <TableCell>
                      <div>
                        {row.options.map(option => (
                          <p key={option}>{option}</p>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <h3>Order amount:</h3>
            <p className={styles.orderPrice}>$50</p>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default WaiterOrderId;