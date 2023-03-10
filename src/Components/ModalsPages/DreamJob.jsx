import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Box,Button,useDisclosure,Text
} from '@chakra-ui/react'

import { BsFillBriefcaseFill } from "react-icons/bs";
function DreamJob() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
                 <Box onClick={onOpen} >
                    <Box  m="auto" w="50px"  h="50px" borderRadius="200px"  bg="#99E1FF"  display="flex" alignItems="center" justifyContent="center ">
                    <BsFillBriefcaseFill fontSize="20px"/>
                    </Box>
                    <Box>
                        <Text>Dream Job</Text>
                    </Box>
             
                </Box>
               


            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <Text>Dream Job Page</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default DreamJob