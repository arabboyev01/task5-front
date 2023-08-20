import DataTable from '@/components/DataTable'
import Header from '@/components/Header'
import FormData from '@/components/FormData'
import { General } from '@/global'

export default function Home() {
    return (
        <div>
            <Header/>
            <General>
                <FormData/>
            </General>
            <DataTable/>
            <footer>
                <p>&copy; 2023 Your App</p>
            </footer>
        </div>
    );

}