import React from "react";
import { Container, VStack, Text, Button, IconButton, HStack, Image } from "@chakra-ui/react";
import { FaRocket, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">
          Welcome to My Website
        </Text>
        <Text fontSize="xl">This is a simple React application using Chakra UI and React Icons.</Text>
        <Image src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MHx8fHwxNzE2NzE4NTM1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Developer Workspace" boxSize="300px" objectFit="cover" borderRadius="md" />
        <HStack spacing={4}>
          <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
        </HStack>
        <Button colorScheme="teal" size="lg" leftIcon={<FaRocket />}>
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
