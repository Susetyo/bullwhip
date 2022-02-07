import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import {Table, Button, Space} from 'antd';
import { EditFilled, DeleteFilled, PlusCircleOutlined} from '@ant-design/icons';

export default function List({auth,errors,roles}){
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Role',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={()=>edit(record.id)} shape="circle" icon={<EditFilled />} />
          <Button shape="circle" icon={<DeleteFilled />} />
        </Space>
      ),
    },
  ];

  const edit = (id) => window.location = route('roles.edit',[parseInt(id)]);
  const add = () => window.location = route('roles.create');
  
  return (
    <Authenticated
        auth={auth}
        errors={errors}
        header={<h1 className="font-semibold text-2xl text-white leading-tight">List Roles</h1>}
    >
        <Head title="List Roles" />
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                  <Table columns={columns} dataSource={roles} />
                  <Button
                    onClick={add}
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