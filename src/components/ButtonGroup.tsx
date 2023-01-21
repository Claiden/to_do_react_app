import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


interface ButtonGroupProps {
    variant:any;
    color:any;
    values:{key:number, label:string,variant:any}[];
    setView:any;
}


function ButtonGroups(props:ButtonGroupProps){
    const {variant, color, values, setView} = props;
    return (
        <div >
          <ButtonGroup variant={variant} color={color} aria-label="contained primary button group">
                {
                    values?.map((values, index:number) => {
                        return <Button key={index} onClick={() => setView(values.key)} variant={values.variant}>{values.label}</Button>
                    }
                    )
                }
           </ButtonGroup>
        </div>
      );
}

export default ButtonGroups;

