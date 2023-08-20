import React, { useState } from 'react';
import DumbForm from '@/components/FormData/DumbForm'
import DataGenerator, { generateUserData } from '@/pages/api/generate-data'
import { FormDataType } from '@/types'

const FormData: React.FC = () => {
  const handleSubmit = (values: FormDataType) => {

  };

  return <DumbForm handleSubmit={handleSubmit}/>
};

export default FormData;
