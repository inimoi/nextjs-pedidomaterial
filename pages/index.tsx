
import { NextPage } from 'next'

import { Button, } from '@nextui-org/react';
import {Layout} from '../components/layouts';


const HomePage: NextPage = () => {
  return (
    <Layout titulo='Pedido Material'>
      <h1>Hola Mundo</h1>
      
      <Button color="gradient">
        Aceptar
      </Button>
    </Layout>
  )
}



export default HomePage

