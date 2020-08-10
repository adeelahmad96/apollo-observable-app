import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../queries/index';
import { useDispatch, useSelector } from 'react-redux';
import { insertUser } from '../state/user';
import { StateInterface } from '../interfaces/index';
import { ping } from '../state/pingPong';

export const AddUser = () => {
  const [name, setName] = useState('');
  const [addUser, { data }] = useMutation(ADD_USER);
  const dispatch = useDispatch();
  const users = useSelector((state: StateInterface) => state.addUser.users);
  const buttonClick: any = React.useRef(null);

  useEffect(() => {
      dispatch(insertUser(data?.insert_users?.returning));
  },[data, dispatch]);

  useEffect(() => {
    dispatch(ping(true));
  }, [dispatch]);

  const handleClick = () => {
    addUser({ variables: { name }})
  }

  return (
      <div>
          <div>
            <input
            style={{width: '30%', marginRight: '75px', marginTop: '50px'}}
            aria-label="Color"
            value={name}
            onChange={e => setName(e.target.value)}
            />
            <button ref={buttonClick} onClick= { handleClick }>Add User</button>
          </div>
          <div>
              {
                  users?.map((user => user.name))
              }
          </div>
      </div>
  );
}