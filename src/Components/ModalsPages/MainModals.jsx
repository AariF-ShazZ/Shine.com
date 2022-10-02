import React from 'react'
import {Box} from "@chakra-ui/react"
import CareerPath from './CareerPath'
import DreamJob from './DreamJob'
import Assessments from './Assessments'

function AssessmentsModals() {

    return (
        <div>
            <Box w="1535px" bg="#ffffff" h="250px" display="flex" alignItems="center" justifyContent="center">
                <Box w="500px" h="150px"  m="auto" display="flex" alignItems="center" justifyContent="space-around">
                    <Assessments />
                    <CareerPath />
                    <DreamJob />
                </Box>
            </Box>

        </div>
    )
}
export default AssessmentsModals