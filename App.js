import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';

function App() {
  const [form,setForm] = useState({});
  const [errors,setErrors] = useState({});

  const setField = (field,value)=>{
    setForm({
      ...form,
      [field]:value
    })
  }

  const handleSubmit = e=>{
    e.preventDefault()
    const {name}=form
    const newErrors={}
    if(!name || name=='') newErrors.name='cannot be blank'
    else if(name.length>10)newErrors.name='Name is too long'
  

  if(Object.keys(newErrors).length>0)
  {
    setErrors(newErrors)
  }
  else{
    alert("Thank you");
  }
}



  return (
    <div className='App d-flex flex-column align-items-center'>
      <h1>CSE</h1>
      <Form style={{width:'300px'}}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' onChange={e=>setField('name',e.target.value)}
            isInvalid={!!errors.name}>

            </Form.Control>
            <Form.Control.Feedback type='invalid'>
            {errors.name}
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Year</Form.Label>
          <Form.Control as='select'>
            <option value=''>select year of study</option>
            <option value='First'>FIRST</option>
            <option value='Second'>SECOND</option>
            <option value='Third'>THIRD</option>
            <option value='Final'>FINAL</option>
          </Form.Control>
        </Form.Group>
        
        <Form.Group><br></br>
          <Button type='submit' onClick={handleSubmit}>SUBMIT</Button>
        </Form.Group>
      </Form>
    </div>
    
  );
}

export default App;
