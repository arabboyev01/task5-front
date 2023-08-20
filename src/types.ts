import React, { ReactNode } from 'react'


export interface ChildrenType {
  children: ReactNode;
}
export interface LoginFormData {
    handleSubmit: any
}

export interface UserRecord {
    identifier?: string;
    name?: string;
    address?: string;
    phone?: string;
}

export interface DataTableProps {
    data: UserRecord[];
}

export interface FormDataType {
    region: string
    errorRate: number
    seed: string

}

export interface MyContextType {
    data: any; // Define the type of your context data
    setData: React.Dispatch<React.SetStateAction<any>>;
}