import React, { useContext } from 'react';
import DumbTableComponent from "@/components/DataTable/DumbTable"
import { GeneratedDataContext } from '@/context/GeneratedDataContext'

const DataTable: React.FC = () => {
   const { data } = useContext(GeneratedDataContext);

  return <DumbTableComponent data={data?.data}/>
};

export default DataTable;
