import React from 'react'
import { Image, Box, Stack, Input, Button } from '@chakra-ui/react'
import { IoIosSearch } from "react-icons/io";
import { BsBell, BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom';

const BottomNavbarData = [
    {
        id: 1,
        name: "HOME"
    },
    {
        id: 2,
        name: "JOBS"
    },
    {
        id: 3,
        name: "JOBS SEEKING ASSISTENCE"
    },
    {
        id: 4,
        name: "COURSES"
    },
    {
        id: 5,
        name: "CAREER GUIDANCE"
    },
    {
        id: 5,
        name: "BLOG"
    }
]


export default function MiddleNavbar({ data, setData, handleSubmit }) {
    return (
        <div>
            <Box mw="1320px" bg="#ffffff" h="50px" p="10px 0px">
                <Box className='middleNavbar-container' w="1270px" m="auto" bg="white" display="flex" justifyContent="space-between">
                    <Box className="left-Navbar" w="550px" display="flex" alignItems="center" >
                        <Link to="/">
                            <Stack
                                w="74px"
                                h="49px" >
                                <Image

                                    boxSize='100px'
                                    objectFit='cover'
                                    src='https://www.shine.com/next/static/images/shine-logo.png'
                                    alt='Shine.com_logo'

                                />
                            </Stack>
                        </Link>
                        <Box className='searchContainer' ml="15px" w="85%" display="flex" alignItems="center" justifyContent="space-between">
                            <Box className='inputBox'>
                                <Input placeholder='Job title,skills'
                                    value={data}
                                    onChange={(e) => setData(e.target.value)}
                                    border="none"
                                    padding="1.3rem"
                                    fontSize="1rem"
                                    color="#6d7883"
                                    bg="#ffffff"
                                    fontFamily="inherit"
                                    height="40px"
                                    w="422px"
                                    flex-grow="1"
                                    // boxShadow='xs'
                                    boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                                    mr="-2px"
                                />
                            </Box>
                            <Box onClick={handleSubmit} className='searchIcon' width="40px"
                                height="40px" display="flex"
                                bg="#8652ff"
                                border-top-left-radius="0"
                                border-bottom-left-radius="0"
                                alignItems="center" justifyContent="center"
                                ml="-10px"
                            >
                                <IoIosSearch color='#ffffff' fontSize="25px" />
                            </Box>
                        </Box>
                    </Box>
                    <Box className="right-Navbar" w="300px" display="flex" alignItems="center" justifyContent="space-around" pr="25px">
                        <Box>
                            <Button p="2px 20px" fontSize="14px" backgroundColor="transparent" border="1px solid #8652ff" color="#8652ff" ><Link to="/login">Login</Link></Button>
                        </Box>
                        <Box>
                            <Button p="0px 25px" fontSize="14px" bg="#8652ff" color="#ffffff">Register</Button>
                        </Box>
                        <Box>
                            <BsBell />
                        </Box>
                        <Box>
                            <BsCart3 />
                        </Box>
                    </Box>
                </Box>
                <Box m="16px 0px" mw="1320px" bg="#ffffff" h="50px"  boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" display="flex" alignItems="center" justifyContent="flex-start">
                    <Box w="620px" fontSize="14px" fontWeight="bold" fontFamily="sans-serif"   ml="9%" display="flex" alignItems="center" justifyContent="space-between">
                        {

                            BottomNavbarData.map((item) => <Link to="/job"  key={item.id}>{item.name}</Link>)

                        }
                    </Box>
                </Box>
            </Box>

        </div>
    )
}
