import React, { useState, useContext } from 'react';
import { Container, Form, Button, Input } from 'reactstrap';
import JoblyApi from "../JoblyApi";
import UserContext from '../context/UserContext';

const Profile = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const [userForm, setUserForm] = useState({
      firstName: currentUser.firstName || "",
      lastName: currentUser.lastName || "",
      email: currentUser.email || "",
      username: currentUser.username,
      password: "",
      errors: [],
      saveConfirmed: false
    });
  
    async function submitHandler(evt) {
      evt.preventDefault();
  
      try {
        let profileData = {
          firstName: userForm.firstName || undefined,
          lastName: userForm.lastName || undefined,
          email: userForm.email || undefined,
          password: userForm.password
        };
  
        let username = userForm.username;
        let updatedUser = await JoblyApi.saveProfile(username, profileData);
        console.log("UPDATED USER", updatedUser)
        setUserForm(f => ({
          ...f,
          errors: [],
          saveConfirmed: true,
          password: ""
        }));
        setCurrentUser(updatedUser);
      } catch (errors) {
        setUserForm(f => ({ ...f, errors }));
      }
    }
  
    function changeHandler(e) {
      const { name, value } = e.target;
      setUserForm(f => ({
        ...f,
        [name]: value,
        errors: []
      }));
    }

    return (
        <Container>
            <h1>Edit profile for: {currentUser.username}</h1>
            <Form onSubmit={submitHandler}>
                <Input onChange={changeHandler} value={userForm.firstName} type="text" id="firstName" name="firstName" placeholder="firstName" />
                <Input onChange={changeHandler} value={userForm.lastName} type="text" id="lastName" name="lastName" placeholder="lastName" />
                <Input onChange={changeHandler} value={userForm.email} type="text" id="email" name="email" placeholder="email" />
                <Input onChange={changeHandler} value={userForm.password} type="text" id="password" name="password" placeholder="password" />
                <Button>Submit</Button>
            </Form>
        </Container>
    )
}

export default Profile;