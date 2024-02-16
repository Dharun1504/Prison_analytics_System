import { Form, Input, Radio, message, DatePicker } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/RegisterStyles.css';

const RegisterPrisoner = () => {
  const onFinishHandler = async (values) => {
    try {
      const formattedValues = {
        name: values.name,
        age: values.age,
        gender: values.gender,
        date_of_birth: values.date_of_birth.format('YYYY-MM-DD'),
        type_of_crime: values.type_of_crime,
        sentence: values.sentence,
        identification_mark: values.identification_mark,
        prison_id:values.prison_id,
        education: values.education,
        address: values.address,
        marital: values.marital,
        ID: values.ID,
        visitorName: null,
        visitorNoOfTimes: null,
        visitorRelation: null,
        visitorMaterialsBought: null,
        causeOfDeath: null,
        aliveStatus: true,
        healthIssue: values.healthIssue,
        paroleNoOfTimesAccepted: null,
        paroleNoOfTimesRejected: null,
        paroleReason: null,
        paroleDuration: null,
        paroleStatus: null,
        entered_date: values.entered_date.format('YYYY-MM-DD'), // Add entered_date
        released_date: values.released_date.format('YYYY-MM-DD')
      };

      const res = await axios.post('/api/v1/prisoners/register', formattedValues);

      if (res.data.success) {
        message.success('Prisoner Registered Successfully!');
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error('Something went wrong');
    }
  };

  return (
    <div className='main'>
       <header className="header1">
          <h1 className="header-text1"><em>Prison Management System</em></h1>
        </header>
    <div className='register-container'>
      <div className='register-form-container'>
        <Form  onFinish={onFinishHandler} className='Register-form'>
          <h1 className='text-center'><em>Prisoner Register</em></h1>

          <Form.Item label='Name' name='name' rules={[{ required: true, message: 'Name is required' }]}>
            <Input className='input-field' placeholder='Enter Name' />
          </Form.Item>

          <Form.Item label='Age' name='age' rules={[{ required: true, message: 'Age is required' }]}>
            <Input type='number' className='input-field' placeholder='Enter Age' />
          </Form.Item>

          <Form.Item label='Gender' name='gender' rules={[{ required: true, message: 'Gender is required' }]}>
            <Radio.Group className='radio-group'>
              <Radio value='Male'>Male</Radio>
              <Radio value='Female'>Female</Radio>
              <Radio value='Other'>Other</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label='Date of Birth' name='date_of_birth' rules={[{ required: true, message: 'Date of Birth is required' }]}>
            <DatePicker className='input-field' />
          </Form.Item>

          <Form.Item label='Crime' name='type_of_crime'>
            <Input className='input-field' placeholder='Enter Crime Type' />
          </Form.Item>

          <Form.Item label='Sentence' name='sentence'>
            <Input type='number' className='input-field' placeholder='Enter Sentence Duration' />
          </Form.Item>

          <Form.Item label='Identification Mark' name='identification_mark'>
            <Input className='input-field' placeholder='Enter Identification Mark' />
          </Form.Item>

          <Form.Item label='Prison Id' name='prison_id'>
            <Input type='number' className='input-field' placeholder='Enter Prison ID' />
          </Form.Item>

          <Form.Item label='Education' name='education'>
            <Input className='input-field' placeholder='Enter Education' />
          </Form.Item>

          <Form.Item label='Address' name='address'>
            <Input className='input-field' placeholder='Enter Address' />
          </Form.Item>

          <Form.Item label='Marital Status' name='marital'>
            <Input className='input-field' placeholder='Enter Marital Status' />
          </Form.Item>

          <Form.Item label='ID' name='ID'>
            <Input className='input-field' placeholder='Enter ID' />
          </Form.Item>

          <Form.Item label='Health Issue' name='healthIssue'>
            <Input className='input-field' placeholder='Enter Health Issue' />
          </Form.Item>

        
          <Form.Item label='Entered Date' name='entered_date'>
            <DatePicker className='input-field' />
          </Form.Item>

          <Form.Item label='Released Date' name='released_date'>
            <DatePicker className='input-field' />
          </Form.Item>

          <Form.Item className='text-center'>
            <button className='btn btn-primary register-button' type='submit'>
              REGISTER
            </button>
          </Form.Item>
        </Form>
      </div>
      <nav className="sidebar2">
          <div className='link-container11'>
            <p><em>OPTIONS</em></p>
          </div>
          <div className="link-container1">
            <Link to="/PrisonRegister" className="sidebar-link1">
             <em>Add Prison Details</em> 
            </Link>
          </div>
          <div className="link-container1">
            <Link to="/queryresult1" className="sidebar-link1">
              <em>Analysis 1</em>
            </Link>
          </div>
          <div className="link-container1">
            <Link to="/queryresult2" className="sidebar-link1">
              <em>Analysis 2</em>
            </Link>
          </div>
          <div className="link-container1">
            <Link to="/queryresult3" className="sidebar-link1">
              <em>Analysis 3</em>
            </Link>
          </div>
          <div className="link-container1">
            <Link to="/queryresult4" className="sidebar-link1">
              <em>Analysis 4</em>
            </Link>
          </div>
          <div className="link-container1">
            <Link to="/queryresult5" className="sidebar-link">
              <em>Analysis 5</em>
            </Link>
          </div>
          <div className="link-container1">
            <Link to="/" className="sidebar-link">
              <em>HomePage</em>
            </Link>
          </div>
        
        </nav>
    </div>
    </div>
  );
};

export default RegisterPrisoner;
