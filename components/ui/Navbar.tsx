import React from 'react'

import { useTheme, Text, Spacer } from '@nextui-org/react';
import Image from 'next/image';
import iconoPrincipal from '../../public/iconMain.jpg'


export const Navbar = () => {

  const { theme }= useTheme();
  

  return (
    <div style={{
        display:"flex",
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'start',
        backgroundColor:theme?.colors.gray900.value,
        padding:'0px 20px',
    }}>
      <Image src={iconoPrincipal}
        alt='el icono de la app' 
        height={70}
        width={70}
      
      />
      <Text color='red' h2>I</Text>
      <Text color='black' h3>nicio</Text>
      <Spacer/>
      <Text color='red' h2>P</Text>
      <Text color='black' h3>edido material</Text>
      <Spacer/>
      <Text color='red' h2>C</Text>
      <Text color='black' h3>ontacto</Text>
      <Spacer/>
      <Text color='red' h2>Q</Text>
      <Text color='black' h3>uienes somos</Text>
      <Spacer css={{
        flex:1,
      }}/>
      <Text color='red' h3>Usuario</Text>
    </div>
  )
}


