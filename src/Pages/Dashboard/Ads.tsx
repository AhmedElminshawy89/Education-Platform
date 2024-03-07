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
import img from "../../assets/Images/Preparatory-stage.jpg";
import { MdOutlineDelete } from "react-icons/md";
import { BiEdit, BiShowAlt } from "react-icons/bi";

const Ads = () => {
  return (
    <Box>
      <TableContainer
        bg={"white"}
        borderRadius={"10px"}
        p={2}
        color={"#000"}
        fontSize={"18px"}
      >
        <Table variant="simple">
          <TableCaption>Advertisements</TableCaption>
          <Thead>
            <Tr>
              <Th>Ads name</Th>
              <Th>Category</Th>
              <Th>Description</Th>
              <Th>Images</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Course</Td>
              <Td>Primary</Td>
              <Td>Lorem ipsum dolor sit amet.....</Td>
              <Td>
                <Avatar src={img} />
              </Td>
              <Td>
                <Box className="flex gap-2">
                  <BiShowAlt className=" cursor-pointer text-2xl text-primary" />
                  <BiEdit className=" cursor-pointer text-2xl text-green-500" />
                  <MdOutlineDelete className=" cursor-pointer text-2xl text-red-500" />
                </Box>
              </Td>
            </Tr>{" "}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Ads name</Th>
              <Th>Category</Th>
              <Th>Description</Th>
              <Th>Images</Th>
              <Th>Actions</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Ads;
