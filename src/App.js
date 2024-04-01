import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Layout } from 'antd';
import store from './store';
import UserForm from './components/UserForm';
import UserDetails from './components/UserDetails';

const { Content } = Layout;

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Content style={{ padding: '50px' }}>
            <Routes>
              <Route path="/" element={<UserForm />} />
              <Route path="/user-details" element={<UserDetails />} />
            </Routes>
          </Content>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
