import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, useForm } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/Authenticated';
import Box from '@/Layouts/Box'

export default function Edit({auth,errors}) {
    const { data, setData, post, processing, errors:errosForm } = useForm({
        name: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('items.store'));
    };

    return (
        <Authenticated         
          auth={auth}
          errors={errors}
          header={<h1 className="font-semibold text-2xl text-white leading-tight">Add Item</h1>}
        >
          <Head title="Edit Role" />
            <div className="py-12">
              <Box>
                <ValidationErrors errors={errosForm} />
                <form className='px-4 py-4' onSubmit={submit}>
                    <Label className="text-white" forInput="name" value="Name" />
                    <Input
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />                      
                    <div className="flex items-center justify-end mt-4">
                        <Button className="ml-4" processing={processing}>
                            Submit
                        </Button>
                    </div>
                </form>
              </Box>
            </div>
        </Authenticated>
    );
}
