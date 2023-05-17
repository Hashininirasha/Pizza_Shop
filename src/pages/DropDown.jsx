import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { Link, NavLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
 
      <FormControl className={classes.formControl}>
        
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
        
    <NavLink to="products/1">
          <MenuItem>LITE</MenuItem>
    </NavLink>

    <NavLink to="products/2">
          <MenuItem>CLASSIC</MenuItem>
    </NavLink>

    <NavLink to="products/3">
          <MenuItem>SIGNATURE</MenuItem>
    </NavLink>

    <NavLink to="products/4">
          <MenuItem>FAVORITE</MenuItem>
    </NavLink>

    <NavLink to="products/5">
          <MenuItem>APPETIZERS</MenuItem>
    </NavLink>
        </Select>
      </FormControl>
    </div>
  );
}
