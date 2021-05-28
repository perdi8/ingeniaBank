import React, { ChangeEvent } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import '../../styles/Dashboard.style.css'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      width: '100%',
      minWidth: 120,
      border: 'solid 1px #d01e69',
      borderRadius: '5px' ,
      padding:'1%',
      marginBottom:'1%'
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
                value = {selectValue}
                onChange={handleChange}
                >
                <MenuItem value={0}>Balance global anual</MenuItem>
                <MenuItem value={1}>Balance global mensual</MenuItem>            
            </Select>
        </FormControl>
    )
}
