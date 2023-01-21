import React from 'react';
import Buttons from '../components/Button';
import ButtonGroups from '../components/ButtonGroup';
import Header from '../components/Header';
import Input from '../components/ShearchInput';
import ToDoItem from '../components/ToDoItem';
import { makeStyles } from '@material-ui/core/styles';


const getStyles = makeStyles(() => ({
    container:{
        display:'flex',
        flexDirection:'column',
        rowGap:'10px',
        alignItems:'center'        
    },
    addtask: {
        display:'grid',
        gridTemplateColumns:'95% 5%',
          
    },
    todolist:{

    }
}));

function Todo() {
    const classes = getStyles();
    const [view, setView] = React.useState();
    const [inputValue, setInputValue] = React.useState('');

    const views = [
        { "key": 0, "label": "All", "variant": view === 0 && 'contained' },
        { "key": 1, "label": "Active", "variant": view === 1 && 'contained' },
        { "key": 2, "label": "Completed", "variant": view === 2 && 'contained' }
    ]

    return (
        <React.Fragment>
            <div className={classes.container}>
                <Header />
                <ButtonGroups
                    variant='text'
                    color='primary'
                    values={views}
                    setView={setView}
                />
                <div className={classes.addtask}>
                    <Input
                        type='text'
                        placeholder='Add details'
                        onChange={(e: any) => setInputValue(e.target.value)}
                        value={inputValue}
                    />
                    <Buttons
                        variant='contained'
                        color='primary'
                        label='Add'
                        onClick={() => console.log(1)}
                    />
                </div>
                <div className={classes.todolist}>
                    <ToDoItem/>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Todo