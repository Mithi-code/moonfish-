import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Select } from 'antd';

const UserDetails = () => {
  const { Option } = Select;
  const usersData = useSelector((state) => state.users);
  const users = usersData.users;
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelect = (value) => {
    const user = users.find((user) => user.name === value);
    setSelectedUser(user);
  };

  console.log(users)

  return (
    <div>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a user"
        optionFilterProp="children"
        onSelect={handleUserSelect}
      >
        {users.map((user) => (
          <Option key={user.name} value={user.name}>
            {user.name}
          </Option>
        ))}
      </Select>
      {selectedUser && (
        <div>
          <h2>User Details</h2>
          <p>Name: {selectedUser.name}</p>
          <p>Email: {selectedUser.email}</p>
          <p>Number: {selectedUser.number}</p>
          {selectedUser.imageUrl && <img src={selectedUser.imageUrl} alt="User" />}
        </div>
      )}
    </div>
  );
};

export default UserDetails;
