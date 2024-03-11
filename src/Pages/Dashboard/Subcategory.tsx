/* eslint-disable react-hooks/rules-of-hooks */
import {
  Avatar,
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import img from "../../assets/Images/Preparatory-stage.jpg";
import ModelDash from "../../Shared/ModelDash";
import { CgClose } from "react-icons/cg";
import { ChangeEvent, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { BiEdit, BiShowAlt } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
const Subcategory = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const onChangeHandlerImg = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      // setUser((prevUser) => ({ ...prevUser, Media: file }));
    }
  };
  return (
    <Box>
      <Box className="flex justify-end">
        <ModelDash ButtonName="Add Subcategory" title="Create A Category">
          <>
            <FormControl mb={4}>
              <FormLabel>Subcategory name</FormLabel>
              <Input placeholder="Course name" />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Category</FormLabel>
              <Select placeholder="Select Category" border={"1px solid"}>
                <option value="option1">Primary</option>
                <option value="option2">Preparage</option>
                <option value="option3">High</option>
              </Select>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Description</FormLabel>
              <Input placeholder="Description" />
            </FormControl>
            <FormLabel>Image</FormLabel>
            <div
              className="w-[100%] bg-white rounded-lg 
                flex flex-col justify-center items-center border-2 border-dotted"
            >
              {selectedImage ? (
                <div className="relative  py-5">
                  <img
                    className="w-[100%] h-[160px]"
                    src={URL.createObjectURL(selectedImage)}
                    alt="Selected"
                  />
                  <p
                    onClick={() => setSelectedImage(null)}
                    className="cursor-pointer w-[25px] h-[25px] absolute top-2 -right-4 w-25 h-25 bg-[#000] text-white rounded-bl-xl rounded-tr-xl flex justify-center items-center"
                  >
                    <CgClose />
                  </p>
                </div>
              ) : (
                <>
                  <FormControl>
                    <Input
                      height="423%"
                      opacity={0}
                      type="file"
                      className="v"
                      placeholder="photo"
                      name="identifier"
                      onChange={onChangeHandlerImg}
                      bg={useColorModeValue("white", "white")}
                      autoComplete="off"
                    />
                  </FormControl>
                  <p className="text-2xl font-medium">Upload Imge</p>
                  <em className=" text-gray-500">
                    (Upload only jpg, jpeg, and png images, please)
                  </em>
                  <FiUploadCloud className="mb-8 mt-4 text-2xl" />
                </>
              )}
            </div>
          </>
        </ModelDash>
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
          <TableCaption>Categories</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Subcategory Name</Th>
              <Th>Category Name</Th>
              <Th>Describtion</Th>
              <Th>Image</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>Data Structure</Td>
              <Td>Primary</Td>
              <Td>Lorem ipsum dolor sit amet ...</Td>
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
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>ID</Th>
              <Th>Subcategory Name</Th>
              <Th>Category Name</Th>
              <Th>Describtion</Th>
              <Th>Image</Th>
              <Th>Actions</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Subcategory;
