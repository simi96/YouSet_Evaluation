import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Button from '@mui/material/Button';

import { minAge, maxAge, userInfo, RowData, UserInfo, ErrorValidation, errorInfo, validEmail } from '../constants';
import './styles.css';
import { submitData } from '../services/formData';

export const FormComponent = (props: RowData) => {

    // Function to handle form fields change
    const handleUserInfoChange = (e: any, key: string) => {
        const updatedUserInfo = {...userData, [key] : e.target.value};
        updateUserData(updatedUserInfo);
    }

    // function to submit form data
    const submitFormData = () => {
        const newErrorInfo = {...errorInfo};
        // checks for error on age
        if(userData.age < minAge || userData.age > maxAge)
            newErrorInfo.ageError = true;

        // checks for error on email address
        let validId = validEmail(userData.email)

        if(!validId)
            newErrorInfo.emailError = true;
        
        updateErrorData(newErrorInfo);
        if(newErrorInfo.ageError || newErrorInfo.emailError)
            return;
        
        submitData(props.rowInfo, userData).then(resp =>
            console.log(resp),
            err => {
                console.log(err);
            });
        }

    const [userData, updateUserData] = useState<UserInfo>(userInfo);
    const [errorData, updateErrorData] = useState<ErrorValidation>(errorInfo);

    const submitDisabled = Object.values(userData).every(val =>
        val.toString().length > 0 );

    return (
        <>
        <div className = 'formFieldClass'>
        <TextField id = "email-input" name = "email" error = {errorData.emailError} helperText = {errorData.emailError ? "Please enter valid email id" : ""}
        value = {userData.email} label = "What's your email?" type="text" required onChange = {(e) => (handleUserInfoChange(e, 'email'))}/>
        <br/>

        <TextField className = 'formFieldClass' id = "age-input" type = 'number' error = {errorData.ageError} helperText = {errorData.ageError ? "Please enter valid age" : ""} required name = "age" label="How old are you?" onChange = {(e) => (handleUserInfoChange(e, 'age'))}/> 
        <br/> <br/>

        <FormControl>
        <FormLabel id = "gender">What is your gender?</FormLabel>
        <RadioGroup
        row name = "radio-buttons-group" onChange = {(e) => handleUserInfoChange(e, 'gender')}
        >
        <FormControlLabel value = "female" control = {<Radio />} label = "Female" />
        <FormControlLabel value = "male" control = {<Radio />} label = "Male" />
        <FormControlLabel value = "other" control = {<Radio />} label = "Other" />
        </RadioGroup>
        </FormControl>
        </div>
        
        <div className = 'submit-btn'>
        <Button  variant="contained" disabled = {!submitDisabled}
        onClick = {submitFormData} >Submit</Button>
        </div>
        </>
    )
}