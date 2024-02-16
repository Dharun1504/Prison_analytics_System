import React, { useState } from "react";
import { Form, DatePicker, Select, Button, Table } from "antd";
import '../styles/Query1Styles.css'; 

const { Option } = Select;

const Query1 = () => {
  const [queryResult, setQueryResult] = useState([]);
  const [form] = Form.useForm();

  const handleQuerySubmit = async () => {
    try {
      const values = await form.validateFields();
      const { startDate, endDate, selectedPrison, selectedGender } = values;

      const apiUrl = `/api/prisondetails/query1?startDate=${startDate.format(
        "YYYY-MM-DD"
      )}&endDate=${endDate.format("YYYY-MM-DD")}&prison=${selectedPrison}&gender=${selectedGender}`;

      const response = await fetch(apiUrl);
      const data = await response.json();
      setQueryResult(data);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  const columns = [
    { title: "Prisoner Name", dataIndex: "prisoner_name", key: "prisoner_name" },
    { title: "Prison Name", dataIndex: "prison_name", key: "prison_name" },
  ];

  return (
    <div className="query1-container">
      <h2 className="header334" style={{fontSize:'30px',color:"black",right:"200px"}} ><em>Query 1</em> </h2>
      <Form form={form} className='form' onFinish={handleQuerySubmit}>
        <Form.Item name="startDate" label="Enter the Start Date">
          <DatePicker style={{ width: "40%",right: '-400px' }} />
        </Form.Item>

        <Form.Item name="endDate" label="Enter the End Date" >
          <DatePicker style={{ width: "40%",right: '-407px' }} />
        </Form.Item>

        <Form.Item name="selectedPrison" label="Select Prison Name">
          <Select style={{ width: "40%",right: '-405px' }}>
            <Option value="Chennai Juvenile">Chennai Juvenile</Option>
            <Option value="Madurai Juvenile">Madurai Juvenile</Option>
            <Option value="Erkaud Juvenile">Erkaud Juvenile</Option>
            <Option value="Chennai Central Jail">Chennai Central Jail</Option>
            <Option value="Madurai Central Jail">Madurai Central Jail</Option>
            <Option value="Puzhal Jail">Puzhal Jail</Option>
          </Select>
        </Form.Item>

        <Form.Item name="selectedGender" label="Select Gender">
          <Select style={{ width: "40%",right: '-440px' }}>
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "40%" ,right:' -490px'}}>
            Submit
          </Button>
        </Form.Item>
      </Form>

      {queryResult.length > 0 && (
        <div>
          <h3>Query Result:</h3>
          <Table columns={columns} dataSource={queryResult} />
        </div>
      )}
    </div>
  );
};

export default Query1;
