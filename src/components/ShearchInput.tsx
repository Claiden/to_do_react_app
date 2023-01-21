import React from 'react'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { makeStyles } from '@material-ui/core/styles';

const getStyles = makeStyles((theme) => ({
    button: {
        textTransform: 'none',
    },
    container:{

    },
    input:{
       
    }
}));

interface InputProps {
    type: string;
    placeholder: string;
    onChange: any;
    value: string;
}

function Input(props: InputProps) {
    const { type, placeholder, onChange, value } = props
    const classes = getStyles()
    return (
        <React.Fragment>
            <div className={classes.container}>
                <OutlinedInput
                    autoFocus={true}
                    className={classes.input}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </div>
        </React.Fragment>
    )
}

export default Input