import React from 'react'
import { Box,Image } from "@chakra-ui/react"
import {CompaniesHiringData} from "../DataFolder/Index"

export default function CompaniesHiring() {
    return (
        <div  >
           <Box w="1530px"  h="300px"  bg="#FAFAFA">
            <Box w="1320px" m="auto" h="300px" bg="#FAFAFA" display="flex" alignItems="center" justifyContent="space-between">
           {CompaniesHiringData.map((item) =>
                <Box w="240px"  bg="#FAFAFA" boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px" key={item.id}>
                    <Image w="100%" h="" src={item.img}/>
                        <Image w="100px" m="auto" h="70px" src={item.logo} alt="logoImage" />
                </Box>)
                }
           </Box>
           </Box>
        </div>
    )
}
