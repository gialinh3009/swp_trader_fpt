import React, { useEffect, useState } from "react";
import { Select, Space, Table, Tag, Button } from "antd";
import { Modal, Form, Input } from "antd";
import axios from "axios";
// api manager user

const UserDefaultData = {
  id: 0,
  userName: "",
  email: "",
  phone: "",
  status: "",
};

const ModalEdit = ({ isModalOpen, setIsModalOpen, data, setReload }) => {
  const [userData, setUserData] = useState(UserDefaultData);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  useEffect(() => {
    if (data) {
      setUserData({
        id: data.id,
        name: data.name,
        userName: data.userName,
        password: "",
        email: data.email,
        phoneNumber: data.phoneNumber,
        isActive: data.isActive,
      });
    }
  }, [data]);

  const handleUpdateUserData = async () => {
    // Kiểm tra thông tin cần thiết
    if (
      !userData.userName ||
      !userData.name ||
      !userData.email ||
      !userData.phoneNumber ||
      !userData.password
    ) {
      alert("Please fill in all required fields");
      return;
    }

    // Kiểm tra số điện thoại hợp lệ
    const phoneRegex = /^0\d{9}$/;
    if (!phoneRegex.test(userData.phoneNumber)) {
      alert("Phone number is invalid");
      return;
    }

    try {
      const endpoint = data
        ? `/User/UpdateUser/${data.id}`
        : "/User/CreateUser";
      const response = await axios[data ? "put" : "post"](endpoint, userData);

      if (response.status === 200 && response.data.isSucceed) {
        alert(data ? "Update successful" : "Create successful");
        setReload(true);
        setIsModalOpen(false);
      } else {
        alert("Operation failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      title={data ? "Update User" : "Create User"}
      visible={isModalOpen}
      onOk={handleUpdateUserData}
      onCancel={handleCancel}
    >
      <Form style={{ maxWidth: 600 }} layout="vertical" autoComplete="off">
        <Form.Item label="User Name">
          <Input
            value={userData.userName}
            onChange={handleChangeInput}
            name="userName"
          />
        </Form.Item>

        <Form.Item label="Name">
          <Input
            value={userData.name}
            onChange={handleChangeInput}
            name="name"
          />
        </Form.Item>

        <Form.Item label="Status">
          <Select
            onChange={(value) => setUserData({ ...userData, status: value })}
            value={userData.status}
          >
            <Select.Option value={true}>Active</Select.Option>
            <Select.Option value={false}>DeActive</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Email">
          <Input
            value={userData.email}
            onChange={handleChangeInput}
            name="email"
          />
        </Form.Item>

        <Form.Item label="Phone Number">
          <Input
            value={userData.phoneNumber}
            onChange={handleChangeInput}
            name="phone"
          />
        </Form.Item>

        <Form.Item label="Password">
          <Input.Password
            value={userData.password}
            onChange={handleChangeInput}
            name="password"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const DefaultData = [
  {
    id: 1,
    userName: "Nguyen Van A",
    email: "a@gmail.com",
    phone: "0123456789",
    status: true,
  },
  {
    id: 2,
    userName: "Tran Thi B",
    email: "b@gmail.com",
    phone: "0987654321",
    status: true,
  },
  {
    id: 3,
    userName: "Le Van C",
    email: "c@gmail.com",
    phone: "0912345678",
    status: true,
  },
  {
    id: 4,
    userName: "Pham Thi D",
    email: "d@gmail.com",
    phone: "0934567890",
    status: false,
  },
  {
    id: 5,
    userName: "Hoang Van E",
    email: "e@gmail.com",
    phone: "0945678901",
    status: false,
  },
  {
    id: 6,
    userName: "Ngo Thi F",
    email: "f@gmail.com",
    phone: "0901234567",
    status: true,
  },
  {
    id: 7,
    userName: "Vu Van G",
    email: "g@gmail.com",
    phone: "0923456789",
    status: true,
  },
  {
    id: 8,
    userName: "Do Thi H",
    email: "h@gmail.com",
    phone: "0912345678",
    status: true,
  },
  {
    id: 9,
    userName: "Nguyen Van I",
    email: "i@gmail.com",
    phone: "0934567890",
    status: true,
  },
  {
    id: 10,
    userName: "Le Thi J",
    email: "j@gmail.com",
    phone: "0945678901",
    status: false,
  },
  {
    id: 11,
    userName: "Pham Van K",
    email: "k@gmail.com",
    phone: "0987654321",
    status: false,
  },
  {
    id: 12,
    userName: "Tran Thi L",
    email: "l@gmail.com",
    phone: "0901234567",
    status: true,
  },
  {
    id: 13,
    userName: "Hoang Van M",
    email: "m@gmail.com",
    phone: "0923456789",
    status: true,
  },
];

const SalerManagementPage = () => {
  const [reload, setReload] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState(DefaultData);
  const [selectedItem, setSelectedItem] = useState({});
  const handleDeleteUser = async (id) => {};

  const columns = [
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
      width: "30%",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email Address",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let bgColor = status === true ? "green" : "volcano";
        let title = status === true ? "Active" : "DeActive";
        let key = status;
        return (
          <Tag color={bgColor} key={key}>
            {title.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              setIsModalOpen(true);
              setSelectedItem(record);
            }}
          >
            Edit
          </a>

          <a onClick={() => handleDeleteUser(record.id)}>Delete</a>
        </Space>
      ),
    },
  ];

  const handleFetchData = async () => {};

  useEffect(() => {
    handleFetchData();
  }, []);

  useEffect(() => {
    if (reload) {
      handleFetchData();
      let timeout = setTimeout(() => {
        setReload(false);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [reload]);

  return (
    <>
      <Table columns={columns} dataSource={data} />
      <ModalEdit
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        data={selectedItem}
        setReload={setReload}
      />
    </>
  );
};

export default SalerManagementPage;
