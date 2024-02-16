import React, { useState } from "react";
import { Form, DatePicker, Select, Button, Table } from "antd";
import '../styles/Query3Styles.css'; 

const { Option } = Select;

const Query3 = () => {
  const [queryResult, setQueryResult] = useState([]);
  const [form] = Form.useForm();

  const handleQuerySubmit = async () => {
    try {
      const values = await form.validateFields();
      const { startDate, endDate} = values;

      const apiUrl = `/api/prisondetails/query3?startDate=${startDate.format(
        "YYYY-MM-DD"
      )}&endDate=${endDate.format("YYYY-MM-DD")}`;

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
      <h2>Query 3: </h2>
      <Form form={form} onFinish={handleQuerySubmit}>
        <Form.Item name="startDate" label="Enter the Start Date">
          <DatePicker style={{ width: "40%" }} />
        </Form.Item>

        <Form.Item name="endDate" label="Enter the End Date">
          <DatePicker style={{ width: "40%" }} />
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

export default Query3;
