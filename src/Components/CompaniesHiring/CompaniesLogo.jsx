import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Box, Grid, Image,GridItem } from "@chakra-ui/react"
import { logodata1, logodata2 } from "../DataFolder/Index"
export default function CompaniesLogo() {
  return (
    <div>
      <Box pt="2%" alignContent="center" h="300px"className="slidingImage" mt="2%">
        <Carousel>
          <Carousel.Item interval={1000}>
            <Grid p="2%"  m="auto"  alignItems="center" w="1200px"  templateColumns='repeat(6, 1fr)' gap={3} >
              {
                logodata1.map((item) =>
                  
                   <GridItem boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" key={item.id} w='100%' h='20'  display="flex" alignItems="center" justifyContent="center"> <Image src={item.logo} alt=""></Image></GridItem>
               
                )
              }
            </Grid>
            {/* <Grid templateColumns='repeat(5, 1fr)' gap={6}>
              <GridItem w='100%' h='10' bg='blue.500'> <Image src={item.logo} alt=""></Image></GridItem>
              <GridItem w='100%' h='10' bg='blue.500' />
              <GridItem w='100%' h='10' bg='blue.500' />
              <GridItem w='100%' h='10' bg='blue.500' />
              <GridItem w='100%' h='10' bg='blue.500' />
            </Grid> */}
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <Grid p="2%" m="auto" w="1200px"  templateColumns='repeat(6, 1fr)' gap={6}>
              {
                logodata2.map((item) =>
                <GridItem boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" key={item.id} w='100%' h='20' display="flex" alignItems="center" justifyContent="center"> <Image src={item.logo} alt=""></Image></GridItem>
                )
              }
            </Grid>
          </Carousel.Item>

        </Carousel>
      </Box>
    </div>
  )
}
