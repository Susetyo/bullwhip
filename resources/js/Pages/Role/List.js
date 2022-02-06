import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import {Table, Button, Space} from 'antd';
import { EditFilled, DeleteFilled} from '@ant-design/icons';

export default function List({auth,errors,roles}){
  console.log(roles,'roles')

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
          <Button shape="circle" icon={<EditFilled />} />
          <Button shape="circle" icon={<DeleteFilled />} />
        </Space>
      ),
    },
  ];


  return (
    <Authenticated
        auth={auth}
        errors={errors}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">List Roles</h2>}
    >
        <Head title="List Roles" />

        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                  <Table columns={columns} dataSource={roles} />
                </div>
            </div>
        </div>
    </Authenticated>
  );
}