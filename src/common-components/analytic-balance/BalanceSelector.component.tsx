import React, { ChangeEvent } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      width: '100%',
      minWidth: 120,
    }
  }),
);

interface Props {
    handleChange: (e: ChangeEvent<any>) => void;
    selectValue : number
}

export const BalanceSelector : React.FC<Props>= (props) => {

    const classes = useStyles();

    const { handleChange, selectValue } = props
      
    return (
        <FormControl className={classes.formControl}>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value = {selectValue}
                onChange={handleChange}
                >
                <MenuItem value={0}>Balance global anual</MenuItem>
                <MenuItem value={1}>Balance global mensual</MenuItem>            
            </Select>
        </FormControl>
    )
}
