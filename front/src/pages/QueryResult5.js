import React, { useState } from "react";
import { Form, DatePicker, Select, Button, Table } from "antd";
import '../styles/Query5Styles.css'; 

const { Option } = Select;

const Query5 = () => {
  const [queryResult, setQueryResult] = useState([]);
  const [form] = Form.useForm();

  const handleQuerySubmit = async () => {
    try {
      const values = await form.validateFields();
      const { selectedCrime} = values;

      const apiUrl = `/api/prisondetails/query5?&crime=${selectedCrime}`;

      const response = await fetch(apiUrl);
      const data = await response.json();
      setQueryResult(data);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  const columns = [
    { title: "Crime Name", dataIndex: "_id", key: "_id" },
    { title: "Count", dataIndex: "count", key: "count" },
  ];

  return (
    <div>
      <h2>Query 5: </h2>
      <Form form={form} onFinish={handleQuerySubmit}>
        <Form.Item name="selectedCrime" label="Select Crime Name">
          <Select style={{ width: "40%" }}>
            <Option value="Murder">Murder</Option>
            <Option value="Manslaughter">Manslaughter</Option>
            <Option value="Assault">Assault</Option>
            <Option value="Robbery">Robbery</Option>
            <Option value="Kidnapping">Kidnapping</Option>
            <Option value="Domestic Violence">Domestic Violence"</Option>
            <Option value="Burglary">Burglary</Option>
            <Option value="Theft">Theft</Option>
            <Option value="Acts of Terrorism">Acts of Terrorism</Option>
            <Option value="Vandalism">Vandalism</Option>
            <Option value="Drug Possession">Drug Possession</Option>
            <Option value="Drug Trafficking">Drug Trafficking</Option>
            <Option value="Manufacturing of Drugs">Manufacturing of Drugs</Option>
            <Option value="Fraud">Fraud</Option>
            <Option value="Online Fraud">Online Fraud</Option>
            <Option value="Identity Theft">Identity Theft</Option>
            <Option value="Money Laundering">Money Laundering</Option>
            <Option value="Insider Trading">Insider Trading</Option>
            <Option value="Rape">Rape</Option>
            <Option value="Sexual Assault">Sexual Assault</Option>
            <Option value="Driving Under the Influence (DUI)">Driving Under the Influence (DUI)</Option>
            <Option value="Reckless Driving">Reckless Driving</Option>
            <Option value="Hit and Run">Hit and Run</Option>
            <Option value="Hacking">Hacking</Option>
            
          </Select>
        </Form.Item>



        <Form.Item>
          <Button type="primary" htmlType="submit">
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

export default Query5;
