import React from 'react'
import { Box, Heading, Text } from "@chakra-ui/react"

// import { IoLocationOutline } from "react-icons/io";
import { TbPaperBag } from "react-icons/tb";
const JobRight = ({ title, company_name, salary, id, location, job_type, Job_Description, Schedule }) => {
    return (
        <div>
            <Box w="900px" m="0% 5%"  h="1000px" b="10px solid gray" >
                {/* style={{backgroundColor:"red" , padding:"10px", margin :"10px" }} */}
                {/* {title} */}
                <Box w="820px" m="auto"  display="flex" alignItems="center" justifyContent="center">
                    <Box w="800px" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" m="5% 0%" h="280px" bg="#f3fbfd" p="20px 25px">
                        <Heading fontSize="25px" w="200px" >{title}</Heading>
                        <Heading fontSize="16px" w="200px" pl="-10px" m="20px 0px">{company_name}</Heading>
                        <Box m='20px 0px'>
                            <Box display="flex" alignItems="center" m='20px 0px'>

                                <TbPaperBag fontSize="30px" />

                                <Text ml="20px">{location}</Text>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <TbPaperBag fontSize="30px" />
                                <Text ml="20px">{salary}</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box w="800px" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" m="auto" h="650px" bg="#ffffff" p="20px 25px">
                    <Box  m="20px" >
                        <Heading  textAlign="left"fontSize="20px" m="15px 0px">Job Type</Heading>
                        <Text textAlign="left">{job_type}</Text>
                    </Box>
                    <Box m="20px" >
                        <Heading textAlign="left"  fontSize="20px" m="15px 0px">Schedule</Heading>
                        <Text textAlign="left">{Schedule}</Text>
                    </Box>
                    <Box  m="20px" >
                        <Heading textAlign="left" fontSize="20px" m="15px 0px">Job Description</Heading>
                        <Text textAlign="left">{Job_Description}</Text>
                    </Box>
                    
                </Box>
            </Box>
        </div>
    )
}

export default JobRight