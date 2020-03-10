import React from 'react';
import styles from './Table.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const TablesEventsNew = () => {
  const [table, setTable, starter, setStarter] = React.useState('');

  const tableHandler = event => {
    console.log(event.target);
    setTable(event.target.value);
  };

  const starterHandler = event => {
    console.log(event.target);
    setStarter(event.target.value);
  };

  return (
    <div className={styles.component}>
      <h2>Make new event</h2>
      <form noValidate autoComplete="off">
        <TextField className={styles.textField} label="First name" />
        <TextField className={styles.textField} label="Last name" />
      </form>
      <FormControl className={styles.dropdown}>
        <InputLabel id="demo-simple-select-label">Table:</InputLabel>
        <Select labelId="demo-simple-select-label" value={table} onChange={tableHandler}>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={styles.dropdown}>
        <InputLabel id="demo-simple-select-label">Starters:</InputLabel>
        <Select labelId="demo-simple-select-label" value={starter} onChange={starterHandler}>
          <MenuItem value={'water'}>water</MenuItem>
          <MenuItem value={'beer'}>beer</MenuItem>
          <MenuItem value={'salad'}>salad</MenuItem>
          <MenuItem value={'soup'}>soup</MenuItem>
        </Select>
      </FormControl>
      <div>
        <Button variant="contained" color="primary" component={Link} to={`${process.env.PUBLIC_URL}/`}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default TablesEventsNew;