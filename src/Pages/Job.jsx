import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import JobLeft from "../Components/JobLeft";
import JobRight from "../Components/JobRight";
import axios from 'axios'
import { Box, Button } from "@chakra-ui/react"

const Job = () => {
  const { getData, data } = useContext(DataContext)
  console.log(data[0]?.id)
  useEffect(() => {
    if (data.length === 0) {
      getData()
    }
  }, [data.length,getData])
  const [current, setCurrent] = useState(data[0]?.id)
  const [right, setRight] = useState()

  const rightData = (id) => {
    axios.get(`https://eager-scarf.cyclic.app/jobdata/${id}`)
      .then((r) => setRight(r.data))
      .catch((e) => console.log(data))
  }
  
  useEffect(() => {
    if (data.length !== 0) {
      rightData(current)
    }
  }, [current,data.length])

  const activeStyle = {
    border: "3px solid  #8652ff"
  }
  const defaultStyle = {
    // border: "2px solid aqua"
  }

  const handleFilter = (q) => {
    getData(q)
  }
  return (
    <div>
      <Box w="1520px" m="7% 0% 3% 0%" display="flex" alignItems="center" justifyContent="flex-end">
        <Box w="450px"  display="flex" alignItems="center" justifyContent="space-around">
          <Button bg="#8652ff" color="#ffffff" onClick={() => handleFilter("React developer")}>React</Button>
          <Button bg="#8652ff" color="#ffffff" onClick={() => handleFilter("Software Developer")}>Software Developer</Button>
          <Button bg="#8652ff" color="#ffffff" onClick={() => handleFilter("Node")}>Node</Button>
        </Box>
      </Box>
      <div style={{ display: "flex" }}>
        <div>
          {
            data.length !== 0 && data.map(({ company_name, id, title, salary, location }) => {
              return (
                <div
                  key={id}
                  onClick={() => setCurrent(id)}
                  style={
                    current === id ? activeStyle : defaultStyle
                  }
                >
                  <JobLeft company_name={company_name} location={location} salary={salary} key={id} title={title} />
                </div>
              )
            })
          }
        </div>
        <div>
          {right && <JobRight job_type={right.job_type} Job_Description={right.Job_Description} Schedule={right.Schedule} company_name={right.company_name} salary={right.salary} id={right.id} location={right.location} title={right.title} />}
        </div>
      </div>
    </div>
  )
}

export default Job