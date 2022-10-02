import React from 'react'
import { useState } from 'react'
import CompaniesHiring from './CompaniesHiring'
import CompaniesLogo from "./CompaniesLogo"
import { Box,Button } from "@chakra-ui/react"
export default function MainCompaniesHiring() {
  const [state, setState] = useState(true)


  return (
    <div>

      <Box>
        <Box bg="red" w="300px" m="auto">
          <Button onClick={() => setState(true)}>COOL PLACE TO WORK</Button>
          <Button onClick={() => setState(false)}>TOP COMPANIES HIRING</Button>
        </Box>
      </Box>
     <Box>
     {/* <CompaniesHiring />  */}
     {
        state == true ? <CompaniesHiring /> : <CompaniesLogo/>
      }
     </Box>
    </div>
  )
}
