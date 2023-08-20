import React, { useContext, useState } from 'react';
import DumbForm from '@/components/FormData/DumbForm'
import { FormDataType } from '@/types'
import { api } from '@/pages/api/generate-data'
import { GeneratedDataContext } from '@/context/GeneratedDataContext'

const FormData: React.FC = () => {
    const { setData } = useContext(GeneratedDataContext);
    const [loading, setLoading] = useState(false)
  const handleSubmit = (values: FormDataType) => {
        setLoading(true)
    api.getGeneratedData("generate-data", values)
        .then(data => {
            setData(data)
            setLoading(false)
        }).catch(err => console.log(err))
        .finally(() => setLoading(false))
  };

  return <DumbForm handleSubmit={handleSubmit} loading={loading}/>
};

export default FormData;
