import { Box } from "@chakra-ui/react/box";
import { Heading } from "@chakra-ui/react/typography";
import React from "react";

export const NotFound = () => {
  return (
    <Box as="main" w={400} mx="auto" mt="20">
      <Heading as='h1' size='xl'>
        404エラー
      </Heading>
      <Box>ページが見つかりませんでした。</Box>
    </Box>
)};