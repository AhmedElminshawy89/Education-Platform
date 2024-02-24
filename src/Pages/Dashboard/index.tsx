import {
  Avatar,
  Box,
  Flex,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Text,
} from "@chakra-ui/react";
import img from "../../assets/Images/Preparatory-stage.jpg";
import { PiChalkboardTeacher, PiStudent } from "react-icons/pi";
import { MdCategory } from "react-icons/md";
import { LuActivitySquare } from "react-icons/lu";

const Dashboard = () => {
  return (
    <Box>
      <Box className="flex items-center justify-between flex-wrap gap-8">
        <Box className="bg-white flex-1 p-4 rounded-xl">
          <Flex alignItems={"center"} gap={8} justifyContent={'space-between'}>
            <Box>
              <Text className=" text-[#67748e] text-2xl font-semibold">
                Students
              </Text>
              <Text className="text-[#344767] text-lg font-medium">2,300</Text>
            </Box>
            <Box className="bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg p-2 rounded-lg">
              <PiStudent className="text-4xl text-white" />
            </Box>
          </Flex>
        </Box>
        <Box className="bg-white flex-1 p-4 rounded-xl">
          <Flex alignItems={"center"} gap={8} justifyContent={'space-between'}>
            <Box>
              <Text className=" text-[#67748e] text-2xl font-semibold">
                Courses
              </Text>
              <Text className="text-[#344767] text-lg font-medium">300</Text>
            </Box>
            <Box className="bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg p-2 rounded-lg">
              <PiChalkboardTeacher  className="text-4xl text-white" />
            </Box>
          </Flex>
        </Box>
        <Box className="bg-white flex-1 p-4 rounded-xl">
          <Flex alignItems={"center"} gap={8} justifyContent={'space-between'}>
            <Box>
              <Text className=" text-[#67748e] text-2xl font-semibold">
                Categories
              </Text>
              <Text className="text-[#344767] text-lg font-medium">4</Text>
            </Box>
            <Box className="bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg p-2 rounded-lg">
              <MdCategory className="text-4xl text-white" />
            </Box>
          </Flex>
        </Box>
        <Box className="bg-white flex-1 p-4 rounded-xl">
          <Flex alignItems={"center"} gap={8} justifyContent={'space-between'}>
            <Box>
              <Text className=" text-[#67748e] text-2xl font-semibold">
                Actions
              </Text>
              <Text className="text-[#344767] text-lg font-medium">105</Text>
            </Box>
            <Box className="bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg p-2 rounded-lg">
              <LuActivitySquare className="text-4xl text-white" />
            </Box>
          </Flex>
        </Box>
      </Box>
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
              <Th>Video Count</Th>
              <Th>Image</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>New Course</Td>
              <Td>Lorem ipsum dolor sit amet ...</Td>
              <Td>Primary</Td>
              <Td>5</Td>
              <Td>
                <Avatar src={img} />
              </Td>
            </Tr>
            <Tr>
              <Td>1</Td>
              <Td>New Course</Td>
              <Td>Lorem ipsum dolor sit amet ...</Td>
              <Td>Primary</Td>
              <Td>5</Td>
              <Td>
                <Avatar src={img} />
              </Td>
            </Tr>
            <Tr>
              <Td>1</Td>
              <Td>New Course</Td>
              <Td>Lorem ipsum dolor sit amet ...</Td>
              <Td>Primary</Td>
              <Td>5</Td>
              <Td>
                <Avatar src={img} />
              </Td>
            </Tr>{" "}
            <Tr>
              <Td>1</Td>
              <Td>New Course</Td>
              <Td>Lorem ipsum dolor sit amet ...</Td>
              <Td>Primary</Td>
              <Td>5</Td>
              <Td>
                <Avatar src={img} />
              </Td>
            </Tr>{" "}
            <Tr>
              <Td>1</Td>
              <Td>New Course</Td>
              <Td>Lorem ipsum dolor sit amet ...</Td>
              <Td>Primary</Td>
              <Td>5</Td>
              <Td>
                <Avatar src={img} />
              </Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>ID</Th>
              <Th>Course Name</Th>
              <Th>Describtion</Th>
              <Th>Category Name</Th>
              <Th>Video Count</Th>
              <Th>Image</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Dashboard;
