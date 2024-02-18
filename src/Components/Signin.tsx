/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { ChangeEvent, useCallback, useState } from "react";
import {
  Input,
  FormHelperText,
  Button,
  Text,
  FormControl,
  useColorModeValue,
} from "@chakra-ui/react";
import { UserState } from "../Interface/index";

const Signin: React.FC = () => {

  const [user, setUser] = useState<UserState>({
    identifier: "",
    password: "",
  });
  const [isEmail, setIsEmail] = useState<boolean | string>(false);
  const [isPassword, setIsPassword] = useState<boolean | string>(false);

  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      setUser((prevUser) => ({ ...prevUser, [name]: value }));

      if (name === "identifier") {
        if (!value.trim() || !/\S+@\S+\.\S+/.test(value)) {
          setIsEmail(
            !value.trim() ? "Email is required" : "Invalid email address"
          );
        } else {
          setIsEmail(false);
        }
      } else if (name === "password") {
        const isLengthValid = value.length >= 8;
        const hasUppercase = /[A-Z]/.test(value);
        const hasLowercase = /[a-z]/.test(value);
        const hasNumber = /\d/.test(value);
        // const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(value);

        if (
          !value.trim() ||
          !(isLengthValid && hasUppercase && hasLowercase && hasNumber)
        ) {
          setIsPassword(
            !value.trim()
              ? false
              : "Password must be at least 8 characters and meet additional criteria (uppercase, lowercase, number)."
          );
        } else {
          setIsPassword(false);
        }
      }
    },
    []
  );

  const onBlurHandler = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      if (name === "identifier" && !value.trim()) {
        setIsEmail("Email is required");
      } else if (name === "password" && !value.trim()) {
        setIsPassword("Password is required");
      }
    },
    []
  );
  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      if (!user.identifier.trim()) {
        setIsEmail("Email is required");
      }
      if (!user.password.trim()) {
        setIsPassword("Password is required");
        return;
      }
      console.log(user)
    },
    [ user]
  );
  return (
    <form className="sign-in-form" onSubmit={handleSubmit}>
      <Text className="title" color={useColorModeValue("black.500", "white")}>
        Sign In
      </Text>
      <FormControl>
        <Input
          type="text"
          className="input"
          placeholder="Email"
          name="identifier"
          isInvalid={!!isEmail}
          onBlur={onBlurHandler}
          value={user.identifier}
          onChange={onChangeHandler}
          bg={useColorModeValue("#eee", "white")}
          autoComplete="off"
        />
        {isEmail && (
          <FormHelperText
            color={"red.500"}
            fontSize={"18px"}
            fontWeight={"500"}
          >
            {isEmail}
          </FormHelperText>
        )}
      </FormControl>
      <FormControl>
        <Input
          className="input"
          type="password"
          placeholder="Password"
          name="password"
          isInvalid={!!isPassword}
          onBlur={onBlurHandler}
          value={user.password}
          onChange={onChangeHandler}
          bg={useColorModeValue("#eee", "white")}
          autoComplete="off"
        />
        {isPassword && (
          <FormHelperText
            color={"red.500"}
            fontSize={"18px"}
            fontWeight={"500"}
          >
            {isPassword}
          </FormHelperText>
        )}
      </FormControl>
      <div className="box-btn">
        <Button
          type="submit"
          mt={"25px"}
          bg={
            isEmail || isPassword
              ? "red.500"
              : useColorModeValue("#010851", "orange.400")
          }
          color={"white"}
          // isLoading={loading}
          _hover={{
            bg:
              isEmail || isPassword
                ? "red.400"
                : useColorModeValue("#010851", "orange.500"),
          }}
        >
        Login
        </Button>
      </div>
    </form>
  );
};

export default React.memo(Signin);
