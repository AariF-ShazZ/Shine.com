import React from 'react'
import {Box,Heading,Text} from "@chakra-ui/react"

// import { IoLocationOutline } from "react-icons/io";
import { TbPaperBag } from "react-icons/tb";
const JobLeft = ({title,company_name,salary,id,location}) => {
  return (
    <Box w="500px" bg="#ffffff" display="flex" alignItems="center" justifyContent="flex-end">
      {/* style={{backgroundColor:"red" , padding:"10px", margin :"10px" }} */}
        {/* {title} */}
        <Box  w="400px" bg="#ffffff" display="flex" alignItems="center" justifyContent="center">
          <Box w="390px" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" m="5% 0%" h="280px" bg="#ffffff" p="20px 25px"> 
            <Heading fontSize="25px"  w="200px" >{title}</Heading>
            <Heading fontSize="16px"  w="200px" pl="-10px" m="20px 0px">{company_name}</Heading>
            <Box m='20px 0px'>
              <Box display="flex" alignItems="center" m='20px 0px'>
                {/* <IoLocationOutline/> */}
                <TbPaperBag fontSize="30px"/>
                {/* <BsBell/> */}
                <Text ml="20px">{location}</Text>
              </Box>
              <Box display="flex" alignItems="center">
                <TbPaperBag fontSize="30px"/>
                <Text ml="20px">{salary}</Text>
              </Box>
            </Box>
          </Box>
        </Box>
    </Box>
  )
}

export default JobLeft