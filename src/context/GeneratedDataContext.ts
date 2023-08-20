import { createContext } from 'react'
import { MyContextType } from '@/types'

export const GeneratedDataContext = createContext<MyContextType | undefined | any>(null);
