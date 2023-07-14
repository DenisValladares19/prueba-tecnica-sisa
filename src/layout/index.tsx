import { Layout, } from "antd";
import { FC, ReactNode } from "react"

interface Props {
    children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {

    const {Header,  Content, Footer } = Layout;

    
  return (
<Layout className="h-screen">
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="flex justify-between items-center w-full">
            <a href="#" className="text-white text-2xl">MyStore</a>
            <a href="#" className="text-white">Carrito</a>
        </div>
    </Header>
      <Content className="site-layout" style={{ padding: '0 50px' }}>
        
        <div style={{ padding: 24, minHeight: 380}}>{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>&copy; Denis Prueba Tecnica</Footer>
    </Layout>
  );
}

export default MainLayout