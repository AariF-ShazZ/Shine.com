import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Box,Button,Lorem,useDisclosure,Text
} from '@chakra-ui/react'
import { TbArrowsRightLeft } from "react-icons/tb";
function CareerPath() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
        <Box>
                 <Box onClick={onOpen} >
                    <Box   m="auto" w="50px"  borderRadius="200px" h="50px" bg="#FFCED7"  display="flex" alignItems="center" justifyContent="center ">
                        <TbArrowsRightLeft fontSize="20px"/>
                    </Box>
                    <Box>
                        <Text>Career Path</Text>
                    </Box>
               
                </Box>
               
               


            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <Text>Career Path Page</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            </Box>
        </>
    )
}
export default CareerPath