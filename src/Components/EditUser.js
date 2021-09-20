import React, { useEffect, useState } from 'react'
import {

    Form,
    FormGroup,
    Button,
    Label,
    Input
} from 'reactstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { editUser } from './userAction';

export const EditUser = (props) => {

    const SelectedUser = props.match.params.id;
    console.log("SelectedUser",SelectedUser);

    let history = useHistory();
    const dispatch = useDispatch()

    const state = useSelector(state => state.user.users);
    console.log("state@",state);

    const [data, setdata] = useState({
        id:'',
        name:''
    })

    useEffect(() => {
        const edit = state.find(data=> props.match.params.id== data.id)
        setdata(edit)
    }, [state,SelectedUser])
    console.log("dataa",data);

    const eventChange = e => {
        e.preventDefault()
        setdata({...data,name:e.target.value})
    }

    const handleClick = e => {
        e.preventDefault()
        dispatch(editUser(data))
        history.push("/");
    }
    return (
        <Form>
        <FormGroup>
            <Label> Name </Label>
            <Input type="text" value={data.name} onChange={eventChange} placeholder="EnterName"> </Input>
        </FormGroup>
        <Button type="submit" onClick={handleClick}> Edit </Button>
        
        <Link to="/" className="btn btn-danger ml-3"> Cancel </Link>

    </Form>
    )
}
