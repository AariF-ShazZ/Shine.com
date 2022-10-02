import React from 'react'
// import { TrendingNavbarData } from '../DataFolder/Index'

import { Box, Text } from "@chakra-ui/react"
import { Link } from 'react-router-dom'

const TrendingNavbarData =[
  {
      id:1,
      name:"React JS"
  },
  {
      id:2,
      name:"Full-Stack Developer "
  },
  {
      id:3,
      name:"Accountant"
  },
  {
      id:4,
      name:"Operations"
  },
  {
      id:5,
      name:"Engineering"
  }
]
export default function TrendingNavbar() {
  return (
    <div>
      <Box>
        <Box>
          <Text></Text>
          {
            TrendingNavbarData.map((item) => <Link key={item.id}>{item.name}</Link>)
          }
        </Box>
      </Box>
    </div>
  )
}
