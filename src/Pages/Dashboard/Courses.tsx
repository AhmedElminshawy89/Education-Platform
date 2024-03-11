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

const Courses = () => {
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
          <TableCaption>Courses</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Course Name</Th>
              <Th>Describtion</Th>
              <Th>Category Name</Th>
              <Th>Subcategory Name</Th>
              <Th>Video Count</Th>
              <Th>Image</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>New Course</Td>
              <Td>Lorem ipsum dolor sit amet ...</Td>
              <Td>Primary</Td>
              <Td>Data Structure</Td>
              <Td>5</Td>
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
            <Tr>
              <Td>1</Td>
              <Td>New Course</Td>
              <Td>Lorem ipsum dolor sit amet ...</Td>
              <Td>Primary</Td>
              <Td>Data Structure</Td>
              <Td>5</Td>
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
            <Tr>
              <Td>1</Td>
              <Td>New Course</Td>
              <Td>Lorem ipsum dolor sit amet ...</Td>
              <Td>Primary</Td>
              <Td>Data Structure</Td>
              <Td>5</Td>
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
            <Tr>
              <Td>1</Td>
              <Td>New Course</Td>
              <Td>Lorem ipsum dolor sit amet ...</Td>
              <Td>Primary</Td>
              <Td>Data Structure</Td>
              <Td>5</Td>
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
              <Th>ID</Th>
              <Th>Course Name</Th>
              <Th>Describtion</Th>
              <Th>Category Name</Th>
              <Th>Subcategory Name</Th>
              <Th>Video Count</Th>
              <Th>Image</Th>
              <Th>Actions</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Courses;
