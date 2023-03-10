import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Box, Button, useDisclosure, Text
} from '@chakra-ui/react'
// import { BiPaste } from "react-icons/ai";
import { BiPaste } from "react-icons/bi";
function Assessments() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Box onClick={onOpen}  bg="white">
                <Box m="auto" w="50px"  h="50px" borderRadius="200px" bg="#9cece0"  display="flex" alignItems="center" justifyContent="center ">
                    <BiPaste fontSize="20px" />
                </Box>
                <Box>
                    <Text>Assessments</Text>
                </Box>
            </Box>



            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalBody>
                        <Text>Assessment Page</Text>
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
export default Assessments