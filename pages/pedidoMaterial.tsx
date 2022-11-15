
import { GetStaticProps, NextPage } from 'next'
import { Layout } from '../components/layouts'
import { materialApi } from '../api'
import { Data, MaterialListResponse } from '../interfaces'
import Image from 'next/image'



interface Props {
    material:MaterialListResponse[],
 }


const pedidoMaterial:NextPage<Props>= ( {material} ) => {
    console.log(material);
    return (
        <Layout titulo='Pedido material'>
            <ul>
                {

                    material.map(({Id, Imagen, Descripcion})=>(
                        <li key={Id}>
                            {/* <Image src={Imagen} alt=" lo mejor" height="50" width="50" /> */}
                            <h3>{Descripcion}</h3>
                        </li>
                    ))
                           
                }
                
                
            </ul>
        </Layout>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (clx) => {

    const {data} = await  materialApi.get<Data>('/hello');
    

    return {
        props: {
            material: data.materialLista
        }
    }
}

export default pedidoMaterial
