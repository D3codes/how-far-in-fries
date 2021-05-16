import React, { Fragment, useState, useEffect, useMemo } from 'react';
import {
	AppBar, CssBaseline, makeStyles, Toolbar, Typography, TextField
} from '@material-ui/core';

const AVERAGE_FRY_LENGTH = 58.9; // mm

const useStyles = makeStyles(theme => ({
}));

export default function App() {
	const classes = useStyles();

  const [distance, setDistance] = useState(0);
  const distanceInFries = useMemo(() => (distance / AVERAGE_FRY_LENGTH), [distance]);

  const onDistanceChange = event => {
    setDistance(event.target.value);
  };

	return (
    <Fragment>
        <TextField value={distance} onChange={onDistanceChange}>Distance (in mm)</TextField>
        <p>Distance in fries: {distanceInFries}</p>
    </Fragment>
	);
}