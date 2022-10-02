import React from 'react'
import { AiOutlineMobile,AiOutlineUser } from "react-icons/ai";
import { TbPhoneCall } from "react-icons/tb";
import { Box } from '@chakra-ui/react'
export default function TopNavbar() {

  return (
    <div>
    <Box mw="1320px" bg="#f2f3f8" h="40px" className='TopNavbar'>
        <Box w="1270px" m="auto" h="100%" display="flex" justifyContent="flex-end" alignItems="center" className='container'>
            <Box  w="430px" display="flex" justifyContent="space-between" alignItems="center" className='container-items'>
                <Box w="30%" display="flex" justifyContent="space-around" alignItems="center"  className='download-box'>
                    <Box className='download-app'>
                        <AiOutlineMobile/>
                    </Box>
                    <Box className='download-text'>
                        <h3>Download App</h3>
                    </Box>
                </Box>
                <Box w="30%" mr="-10%" display="flex" justifyContent="space-around" alignItems="center" className='Employers-item'>
                        <Box>
                            <AiOutlineUser/>
                        </Box>
                        <Box>
                            <h3>For Employers</h3>
                        </Box>
                </Box>
                <Box w="30%"  display="flex" justifyContent="space-around" alignItems="center" className='help-items'>
                    <Box >
                        <TbPhoneCall/>
                    </Box>
                    <Box ml="-50%">
                        <h3>Help</h3>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
    </div> 
  )

}
