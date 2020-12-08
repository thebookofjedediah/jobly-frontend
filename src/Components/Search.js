import React from 'react';
import { Form, Button, Input } from 'reactstrap';


const Search = (props) => {
    const {changeHandler, submitHandler, formData} = props;
    return (
        <Form inline onSubmit={submitHandler}>
            <Input onChange={changeHandler} type="text" id="search" name="search" placeholder="search..." />
            <Button>Submit</Button>
        </Form>
    )
}

export default Search;