import React, { useState } from 'react';
import {
	makeStyles, Typography, TextField, Button, Link, Select, MenuItem
} from '@material-ui/core';

const AVERAGE_FRY_LENGTH = [
  58.9,        // mm
  5.89,        // cm
  2.32,        // in
  0.19,        // ft
  0.0589,      // m
  0.0000589,   // km
  0.000037,    // mi
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: '500px',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

export default function App() {
	const classes = useStyles();

  const [distance, setDistance] = useState(0);
  const [distanceInFries, setDistanceInFries] = useState(null);
  const [units, setUnits] = useState(0);

  const handleDistanceChange = event => {
    setDistance(event.target.value);
  };

  const handleCalculateClick = () => {
    setDistanceInFries((distance / AVERAGE_FRY_LENGTH[units]).toFixed(2));
  };

  const handleUnitsChange = event => {
    setUnits(event.target.value);
  };

	return (
    <div className={classes.root}>
      <Typography variant="h2">How Far in Fries?</Typography>
      <div>
        <TextField value={distance} onChange={handleDistanceChange} type="number"/>
        <Select
          value={units}
          onChange={handleUnitsChange}
        >
          <MenuItem value={0}>mm</MenuItem>
          <MenuItem value={1}>cm</MenuItem>
          <MenuItem value={2}>in</MenuItem>
          <MenuItem value={3}>ft</MenuItem>
          <MenuItem value={4}>m</MenuItem>
          <MenuItem value={5}>km</MenuItem>
          <MenuItem value={6}>mi</MenuItem>
        </Select>
      </div>
      <Button onClick={handleCalculateClick}>Calculate</Button>
      {distanceInFries && <Typography>Distance in fries: {distanceInFries} McDonald's french fries</Typography>}
      <Link href="http://web.mit.edu/rsi/www/2014/files/MiniSamples/Fry/frymain.pdf">
        MIT Research for average McDonald's fry length
      </Link>
    </div>
	);
}