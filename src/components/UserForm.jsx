import React, { useState } from 'react';
import { Form, Input, Button, Upload, message } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../redux/userSlice'; 

const UserForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState('');

  const onFinish = (values) => {
    const userData = { ...values, imageUrl }; 
    dispatch(addUser(userData)); 
    message.success('User added successfully');
    navigate('/user-details');
  };

  const beforeUpload = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImageUrl(reader.result);
    };
    return false; 
  };

  return (
    <Form
      name="user_form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input placeholder="Name" />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="number"
        rules={[{ required: true, message: 'Please input your number!' }]}
      >
        <Input placeholder="Number" />
      </Form.Item>

      <Form.Item name="image">
        <Upload
          listType="picture"
          beforeUpload={beforeUpload}
          showUploadList={false} 
        >
          <Button>Upload Image</Button>
        </Upload>
        {imageUrl && <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%', marginTop: 10 }} />}
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserForm;
