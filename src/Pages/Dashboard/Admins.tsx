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

const Admins = () => {
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
          <TableCaption>Admins</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Email</Th>
              <Th>Images</Th>
              <Th>Phone</Th>
              <Th>Age</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>Ahmed</Td>
              <Td>Elsaied</Td>
              <Td>ahmed@gmail.com</Td>
              <Td>
                <Avatar src={img} />
              </Td>
              <Td>01286552467</Td>
              <Td>24</Td>

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
              <Td>Ahmed</Td>
              <Td>Elsaied</Td>
              <Td>ahmed@gmail.com</Td>
              <Td>
                <Avatar src={img} />
              </Td>
              <Td>01286552467</Td>
              <Td>24</Td>

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
              <Td>Ahmed</Td>
              <Td>Elsaied</Td>
              <Td>ahmed@gmail.com</Td>
              <Td>
                <Avatar src={img} />
              </Td>
              <Td>01286552467</Td>
              <Td>24</Td>

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
              <Td>Ahmed</Td>
              <Td>Elsaied</Td>
              <Td>ahmed@gmail.com</Td>
              <Td>
                <Avatar src={img} />
              </Td>
              <Td>01286552467</Td>
              <Td>24</Td>

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
              <Td>Ahmed</Td>
              <Td>Elsaied</Td>
              <Td>ahmed@gmail.com</Td>
              <Td>
                <Avatar src={img} />
              </Td>
              <Td>01286552467</Td>
              <Td>24</Td>

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
              <Td>Ahmed</Td>
              <Td>Elsaied</Td>
              <Td>ahmed@gmail.com</Td>
              <Td>
                <Avatar src={img} />
              </Td>
              <Td>01286552467</Td>
              <Td>24</Td>

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
              <Td>Ahmed</Td>
              <Td>Elsaied</Td>
              <Td>ahmed@gmail.com</Td>
              <Td>
                <Avatar src={img} />
              </Td>
              <Td>01286552467</Td>
              <Td>24</Td>

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

export default Admins;
