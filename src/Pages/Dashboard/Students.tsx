/* eslint-disable react-hooks/rules-of-hooks */
import {
  Avatar,
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import img from "../../assets/Images/me.jpg";
const Category = () => {
  return (
    <Box>
      <TableContainer
        bg={"white"}
        borderRadius={"10px"}
        p={2}
        color={"#000"}
        fontSize={"18px"}
        my={12}
      >
        <Table variant="simple">
          <TableCaption>Students</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Student Name</Th>
              <Th>Country</Th>
              <Th>City</Th>
              <Th>Age</Th>
              <Th>Gender</Th>
              <Th>Email</Th>
              <Th>Image</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>Ahmed Elsaied</Td>
              <Td>Egypt</Td>
              <Td>Desouq</Td>
              <Td>23</Td>
              <Td>Male</Td>
              <Td>ahmd@gmail.com</Td>
              <Td>
                <Avatar src={img} />
              </Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
            <Th>ID</Th>
              <Th>Student Name</Th>
              <Th>Country</Th>
              <Th>City</Th>
              <Th>Age</Th>
              <Th>Gender</Th>
              <Th>Email</Th>
              <Th>Image</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Category;
