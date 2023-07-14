import { Button, Checkbox, Table } from "antd"
import MainLayout from "./layout"
import { ColumnType } from "antd/es/table"
import useApi from "./hooks/useApi"
import { useEffect } from "react";

function App() {
  const [stateFetch, fetchData] = useApi();

  useEffect(() => {
    fetchData({
      method: 'GET',
      url: "http://localhost:8085/products"
    })
  }, [])


  const column: ColumnType<any>[] = [
    {
      title: "Producto",
    },
    {
      title: "Descripción",
    },
    {
      title: "Precio",
    },
    {
      title: "Seleccionar",
      render: () => <Checkbox></Checkbox>,
      align: "center"
    }

  ]


  return (
    <MainLayout>
      <div className="flex justify-end mb-2">
        <Button type="text">COMPRAR</Button>
      </div>
      <Table columns={column} loading={stateFetch.isLoading} dataSource={[1, 2, 3]} />
    </MainLayout>
  )
}

export default App
