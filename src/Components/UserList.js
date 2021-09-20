import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import{
    ListGroup,
    ListGroupItem,
    Button
}from 'reactstrap'
import { delUser } from './userAction';

export const UserList = () => {

    const state = useSelector(state => state.user.users);
    const dispatch = useDispatch()

    return (
        <div>
            
        <ListGroup>
            {state.map(xx=>{
             return <ListGroupItem className="d-flex"> 
              <strong> {xx.name} </strong>
              <div className="mr-2">
                  <Link to={`/edit/${xx.id}`} className="btn btn-warning ml-2"> Edit </Link>
              </div>
      <Button color="danger ml-2" onClick={()=> { dispatch(delUser(xx.id)) }}> Delete </Button>

           </ListGroupItem>
            })}
           

        </ListGroup>

        </div>
    )
}
