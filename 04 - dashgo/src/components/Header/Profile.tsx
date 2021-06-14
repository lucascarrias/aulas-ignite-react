import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Lucas Carrias</Text>
          <Text color="gray.300" fontSize="small">
            lucascarrias@outlook.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Lucas Carrias"
        src="https://avatars.githubusercontent.com/u/24925816"
      />
    </Flex>
  );
}
