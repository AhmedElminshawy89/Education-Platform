/* eslint-disable @typescript-eslint/no-unused-vars */
import { CgClose } from "react-icons/cg";
import { ChangeEvent, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  FormControl,
  FormLabel,
  Textarea,
  Input,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";
const AddAdmin = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const onChangeHandlerImg = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      // setUser((prevUser) => ({ ...prevUser, Media: file }));
    }
  };
  return (
    <Box className="flex flex-col text-2xl  rounded-xl ">
      <>
        <Box className="flex gap-3 sm:flex-row flex-col">
          <FormControl mb={4}>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="Course name" border={"1px solid"} />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Last name" border={"1px solid"} />
          </FormControl>
        </Box>
        <Box className="flex gap-3 sm:flex-row flex-col">
          <FormControl mb={4}>
            <FormLabel>Phone</FormLabel>
            <Input placeholder="Phone" border={"1px solid"} />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Age</FormLabel>
            <Input placeholder="Age" border={"1px solid"} />
          </FormControl>
        </Box>
        <FormControl mb={4}>
            <FormLabel>Email</FormLabel>
            <Input placeholder="Email" type="email" border={"1px solid"} />
          </FormControl>
          <Box className="flex gap-3 sm:flex-row flex-col">
          <FormControl mb={4}>
            <FormLabel>Password</FormLabel>
            <Input placeholder="Password" type="password" border={"1px solid"} />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Confoirm Password</FormLabel>
            <Input placeholder="Confoirm Password" type="password" border={"1px solid"} />
          </FormControl>
        </Box>
        <FormLabel>Image</FormLabel>
        <div
          className="w-[100%] bg-transparent text-center  rounded-lg 
        flex flex-col justify-center items-center border-2 border-dotted border-primary"
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
                  bg={useColorModeValue("transparent", "transparent")}
                  autoComplete="off"
                />
              </FormControl>
              <p className="text-2xl font-medium">Upload Image</p>
              <em className=" text-gray-500">
                (Upload only jpg, jpeg, and png images, please)
              </em>
              <FiUploadCloud className="mb-8 mt-4 text-2xl" />
            </>
          )}
        </div>
      </>
      <Box className="flex justify-end mt-4">
      <button className="text-white bg-primary px-4  py-2 rounded-lg duration-300 hover:bg-blue-950 text-xl">Add Course</button>
      </Box>
    </Box>
  );
};

export default AddAdmin;
