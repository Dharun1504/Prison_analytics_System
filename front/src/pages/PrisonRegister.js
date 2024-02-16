import React from 'react';
import { Form, Input, Radio, message } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/PrisonRegisterStyles.css'; 

const RegisterPrison = () => {
  const onFinishHandler = async (values) => {
    try {

      const formattedValues = {
        prison_id:values.Prison_id,
        prison_name:values.Prison_name,
        type_prison: values.type_prison,
        capacity: values.capacity,
        location: values.location,
        juvenile: values.juvenile,
        block_warden: values.block_warden,
        block_name: values.block_name,
        block_capacity: values.block_capacity,
        no_of_rooms: values.no_of_rooms,
      };

      const res = await axios.post('/api/v2/prisons/register', formattedValues);

      if (res.data.success) {
        message.success('Prison Registered Successfully!');
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error('Something went wrong');
    }
  };

  return (
    <div className='main1'>
      <header className="header2">
          <h1 className="header-text2"><em>Prison Management System</em></h1>
        </header>
    <div className='register-container11'>
      <div className='register-form-container11'>
        <Form  onFinish={onFinishHandler} className='Register-form11'>
          <h1 className='text-center11'><em>Prison Register</em></h1>

          <Form.Item label='Prison Id' name='Prison_id' rules={[{ required: true, message: ' Prison id is required' }]}>
            <Input className='input-field11' placeholder='Enter Prison id' />
          </Form.Item>

          <Form.Item label='Prison Name' name='Prison_name' rules={[{ required: true, message: 'Prison Name is required' }]}>
            <Input className='input-field11' placeholder='Enter Prison Name' />
          </Form.Item>

          <Form.Item label='Type of Prison' name='type_prison' rules={[{ required: true, message: 'Type of Prison is required' }]}>
            <Input className='input-field11' placeholder='Enter Type of Prison' />
          </Form.Item>

          <Form.Item label='Capacity' name='capacity' rules={[{ required: true, message: 'Capacity is required' }]}>
            <Input type='number' className='input-field11' placeholder='Enter Capacity' />
          </Form.Item>

          <Form.Item label='Location' name='location' rules={[{ required: true, message: 'Location is required' }]}>
            <Input className='input-field11' placeholder='Enter Location' />
          </Form.Item>

          <Form.Item label='Juvenile' name='juvenile' rules={[{ required: true, message: 'Juvenile is required' }]}>
            <Radio.Group className='radio-group11'>
              <Radio value='Yes'>Yes</Radio>
              <Radio value='No'>No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label='Block Warden' name='block_warden'>
            <Input className='input-field11' placeholder='Enter Block Warden' />
          </Form.Item>

          <Form.Item label='Block Name' name='block_name'>
            <Input className='input-field11' placeholder='Enter Block Name' />
          </Form.Item>

          <Form.Item label='Block Capacity' name='block_capacity'>
            <Input type='number' className='input-field11' placeholder='Enter Block Capacity' />
          </Form.Item>

          <Form.Item label='No. of Rooms' name='no_of_rooms'>
            <Input type='number' className='input-field11' placeholder='Enter No. of Rooms' />
          </Form.Item>

          <Form.Item className='text-center11'>
            <button className='btn btn-primary register-button'>REGISTER</button>
          </Form.Item>

        </Form>
      </div>
      <nav className="sidebar3">
          <div className='link-container2'>
            <p><em>OPTIONS</em></p>
          </div>
          <div className="link-container22">
            <Link to="/Register" className="sidebar-link1">
             <em>Add Prisoner Details</em> 
            </Link>
          </div>
          <div className="link-container22">
            <Link to="/queryresult1" className="sidebar-link1">
              <em>Analysis 1</em>
            </Link>
          </div>
          <div className="link-container22">
            <Link to="/queryresult2" className="sidebar-link1">
              <em>Analysis 2</em>
            </Link>
          </div>
          <div className="link-container22">
            <Link to="/queryresult3" className="sidebar-link1">
              <em>Analysis 3</em>
            </Link>
          </div>
          <div className="link-container22">
            <Link to="/queryresult4" className="sidebar-link1">
              <em>Analysis 4</em>
            </Link>
          </div>
          <div className="link-container22">
            <Link to="/queryresult5" className="sidebar-link">
              <em>Analysis 5</em>
            </Link>
          </div>
          <div className="link-container22">
            <Link to="/" className="sidebar-link">
              <em>HomePage</em>
            </Link>
          </div>
        
        </nav>
    </div>
    </div>
  );
};

export default RegisterPrison;
