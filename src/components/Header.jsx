import React from "react";
import { Box, Center, Flex, HStack, Image } from "@chakra-ui/react";

export const Header = () => {
    const logo = require("../images/Logo2.png");

    return (
        <Flex>
            <HStack>
                <Image src={logo}></Image>
            </HStack>
        </Flex>
    );
};
