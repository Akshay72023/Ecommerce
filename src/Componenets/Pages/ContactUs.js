import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const ContactUs = ()  => {
  const nameRef=useRef('')
  const emailRef=useRef('')
  const numberRef=useRef('')

  const submitHandler =(e)=>{
    e.preventDefault()
    const data = {
      name:nameRef.current.value,
      email:emailRef.current.value,
      mobilenumber:numberRef.current.value

    }
    console.log(data)

     fetch('https://ecommerce-97bb3-default-rtdb.firebaseio.com/contactInfo.json',{
      method:'POST',
      body:JSON.stringify(data),
      headers:{
        'Content-Type':'application/json'
      }
})

    nameRef.current.value='';
    emailRef.current.value='';
    numberRef.current.value = '';

  }

  return (
    <div style={{margin:'5%',paddingBottom:'10%'}}>
       <Form onSubmit={submitHandler}>
       <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" ref={nameRef} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="mobileNumber">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="number" placeholder="Enter mobile number" ref={numberRef} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </div>
  )
}

export default ContactUs;