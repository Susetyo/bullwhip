import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, useForm } from '@inertiajs/inertia-react';
import {Table, Button, Space} from 'antd';
import { DeleteFilled, PlusCircleOutlined} from '@ant-design/icons';

export default function List({auth,errors,users}){
  const {get, delete:destroy} = useForm();
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title:'Address',
      dataIndex: 'address',
      key:'address'
    },
    {
      title:'Phone Number',
      dataIndex: 'phone_number',
      key:'phone_number'
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={()=>onDelete(record.id)} shape="circle" icon={<DeleteFilled />} />
        </Space>
      ),
    },
  ];

  const onAdd = () => get(route('users.create'));
  const onDelete = (id) => destroy(route('users.destroy',[parseInt(id)]));
  
  return (
    <Authenticated
        auth={auth}
        errors={errors}
        header={<h1 className="font-semibold text-2xl text-white leading-tight">List Users</h1>}
    >
        <Head title="List Users" />
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                  <Table columns={columns} dataSource={users} />
                  <Button
                    onClick={onAdd}
                    size='large'
                    className='bottom-8 right-8'
                    style={{position:'fixed'}} 
                    shape='circle' 
                    icon={<PlusCircleOutlined />} />
                </div>
            </div>
        </div>
    </Authenticated>
  );
}