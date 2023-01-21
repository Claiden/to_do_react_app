import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function ToDoItem() {
    return (
        <React.Fragment>
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
            </FormGroup>
        </React.Fragment>
    );
}

export default ToDoItem;



