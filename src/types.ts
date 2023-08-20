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