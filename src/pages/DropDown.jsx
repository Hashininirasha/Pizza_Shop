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
        
    <NavLink to="products/LITE">
          <MenuItem>LITE</MenuItem>
    </NavLink>

    <NavLink to="products/CLASSIC">
          <MenuItem>CLASSIC</MenuItem>
    </NavLink>

    <NavLink to="products/SIGNATURE">
          <MenuItem>SIGNATURE</MenuItem>
    </NavLink>

    <NavLink to="products/FAVORITE">
          <MenuItem>FAVORITE</MenuItem>
    </NavLink>

    <NavLink to="products/APPETIZERS">
          <MenuItem>APPETIZERS</MenuItem>
    </NavLink>
        </Select>
      </FormControl>
    </div>
  );
}
