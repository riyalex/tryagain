import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SIGN_img from './SIGN_img';
import { NavLink } from 'react-router-dom'

const Home = () => {

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        date: "",
        password: ""
    })

    const [data,setData] = useState([]);
    console.log(inpval);
    
    const getdata = (e) => {
         //console.log(e.target.value);

    

    const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }

    const addData = (e) => {
        e.preventDefault();
    
    
        const { name, email, date, password } = inpval;
        if (name === "") {
            alert(' Name field is required!',{
                position: "top-center",
            });
        } else if (email === "") {
            alert('Email field is required',{
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            alert('please enter valid email address',{
                position: "top-center",
            });
        } else if (date === "") {
            alert('date field is required',{
                position: "top-center",
            });
        } else if (password === "") {
            alert('password field is required',{
                position: "top-center",
            });
        } else if (password.length < 5) {
            alert('password length should be greater than five',{
                position: "top-center",
            });
        } else {
            console.log("Data added successfully")

             localStorage.setItem("lawusers",JSON.stringify([...data,inpval]));
        }
    }

  return (
    <>
        <div className="container mt-3">
            <section className='d-flex justify-content-between'>
                <div className='left_data mt-3 p-3' style={{ width: "100%" }}>
                    <h3 className='text-center col-lg-6'>Log In Details</h3>

    <Form>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Control type="date" onChange={getdata} name='date' placeholder="Enter Date of Birth" />
      </Form.Group>

      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
        <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
      </Form.Group>
      <Button variant="primary" className="mb-3 col-lg-6" onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
        {/*Submit*/}
        <NavLink to="/login">Log In</NavLink>
      </Button>
    </Form>
    {/*<p className='mt-3'>Already Have an Account <span><NavLink to="/login">Log In</NavLink></span> </p>*/}
                </div>
                <SIGN_img />
            </section>
        </div>
    </>
  )
}

export default Home;