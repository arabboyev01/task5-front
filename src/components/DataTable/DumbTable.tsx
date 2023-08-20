import React from 'react'
import { DataTableProps } from '@/types'
import { Table, Th } from '@/components/DataTable/Table.style'

const DumbTable: React.FC = () => (
    <Table>
      <thead>
        <tr>
          <Th>Index</Th>
          <Th>Identifier</Th>
          <Th>Name</Th>
          <Th>Address</Th>
          <Th>Phone</Th>
        </tr>
      </thead>
      <tbody>
        {/*{data.map((record, index) => (*/}
        {/*  <tr key={index}>*/}
        {/*    <Td>{index + 1}</Td>*/}
        {/*    <Td>{record.identifier}</Td>*/}
        {/*    <Td>{record.name}</Td>*/}
        {/*    <Td>{record.address}</Td>*/}
        {/*    <Td>{record.phone}</Td>*/}
        {/*  </tr>*/}
        {/*))}*/}
      </tbody>
    </Table>
);

export default DumbTable;