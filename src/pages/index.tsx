import DataTable from '@/components/DataTable'
import Header from '@/components/Header'
import FormData from "@/components/FormData"

export default function Home(){
    return (
    <div>
      <Header />
      <main>
        <FormData />
        <DataTable />
      </main>
      <footer>
        <p>&copy; 2023 Your App</p>
      </footer>
    </div>
  );

}