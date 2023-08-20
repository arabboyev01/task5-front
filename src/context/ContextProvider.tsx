import React, { useState } from 'react'
import { GeneratedDataContext } from '@/context/GeneratedDataContext'
import { ChildrenType } from '@/types'

export const ContextProvider: React.FC<ChildrenType> = ({ children }) => {
  const [data, setData] = useState<any>(null);

  return (
    <GeneratedDataContext.Provider value={{ data, setData }}>
      {children}
    </GeneratedDataContext.Provider>
  );
};