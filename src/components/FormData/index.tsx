import React, { useContext } from 'react';
import DumbForm from '@/components/FormData/DumbForm'
import { FormDataType } from '@/types'
import { api } from '@/pages/api/generate-data'
import { GeneratedDataContext } from '@/context/GeneratedDataContext'

const FormData: React.FC = () => {
    const { setData } = useContext(GeneratedDataContext);
  const handleSubmit = (values: FormDataType) => {
    api.getGeneratedData("generate-data", values)
        .then(data => setData(data))
        .catch(err => console.log(err))
  };

  return <DumbForm handleSubmit={handleSubmit}/>
};

export default FormData;
