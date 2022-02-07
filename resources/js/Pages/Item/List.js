import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, useForm } from '@inertiajs/inertia-react';
import {Table, Button, Space} from 'antd';
import { EditFilled, DeleteFilled, PlusCircleOutlined} from '@ant-design/icons';

export default function List({auth,errors,items}){
  const {get, delete:destroy} = useForm();
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
          <Button onClick={()=>onEdit(record.id)} shape="circle" icon={<EditFilled />} />
          <Button onClick={()=>onDelete(record.id)} shape="circle" icon={<DeleteFilled />} />
        </Space>
      ),
    },
  ];

  const onEdit = (id) => get(route('items.edit',[parseInt(id)]));
  const onAdd = () => get(route('items.create'));
  const onDelete = (id) => destroy(route('items.destroy',[parseInt(id)]));
  
  return (
    <Authenticated
        auth={auth}
        errors={errors}
        header={<h1 className="font-semibold text-2xl text-white leading-tight">List Item</h1>}
    >
        <Head title="List Roles" />
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                  <Table columns={columns} dataSource={items} />
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