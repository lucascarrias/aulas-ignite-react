import { Flex, Text, Input, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import React from "react";
import {
  RiNotification2Line,
  RiSearch2Line,
  RiUserAddLine,
} from "react-icons/ri";

export function Header() {
  return (
    <Flex
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
      as="header"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        dashgo
        <Text color="pink.500" as="span" ml="1">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Buscar na plataforma"
          _placeholder={{
            color: "gray.400",
          }}
        />

        <Icon as={RiSearch2Line} fontSize="20" />
      </Flex>

      <Flex align="center" ml="auto">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="greay.700"
        >
          <Icon as={RiNotification2Line} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Lucas Carrias</Text>
            <Text color="gray.300" fontSize="small">
              lucascarrias@outlook.com
            </Text>
          </Box>

          <Avatar size="md" name="Lucas Carrias" src="https://avatars.githubusercontent.com/u/24925816"/>
        </Flex>
      </Flex>
    </Flex>
  );
}
