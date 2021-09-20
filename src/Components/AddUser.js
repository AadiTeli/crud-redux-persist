import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { v4 as uuid} from 'uuid';
import {

    Form,
    FormGroup,
    Button,
    Label,
    Input
} from 'reactstrap'
import { addUser } from './userAction';
import { useHistory } from 'react-router';

export const AddUser = () => {

    const [name, setname] = useState('')

    const dispatch = useDispatch()
    let history = useHistory();


    const eventChange = e => {
        e.preventDefault()
        setname(e.target.value)
    }
    console.log("name",name);


    const eventSubmit = e => {
        e.preventDefault()
        const newUser = {
            id: uuid(),
            name
        }
        console.log("newUser",newUser);
        dispatch(addUser(newUser))
        history.push("/");


    }

    return (
        <div>
           <Form onSubmit={eventSubmit}>
               <FormGroup>
                   <Label> Name </Label>
                   <Input type="text" onChange={eventChange} placeholder="EnterName"> </Input>
               </FormGroup>
               <Button type="submit"> Submit </Button>
               
               <Link to="/" className="btn btn-danger ml-3"> Cancel </Link>

           </Form>
        </div>
    )
}
