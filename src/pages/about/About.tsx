import { FC } from "react";

import { Box, Flex } from "@chakra-ui/react";

import {  Content, MarkdownFile, useContent } from "shared/content/Content";
import { Education } from "pages/about/education/Education";
import { Experience } from "pages/about/experience/Experience";
import { Skills } from "pages/about/skills/Skills";

export const About: FC = () => {
    const content = useContent(MarkdownFile.About);

    return (
        <Box>
            <Flex
                direction={{ base: "column", md: "row" }}
                gap={{ base: 10, md: 6, lg: 12 }}
                mt="16"
                justifyContent="space-between"
            >
                <Box flex="0.6" flexShrink="0" overflow="hidden">
                    <Education />
                </Box>
                <Box flex="0.6" overflow="hidden">
                    <Experience />
                </Box>
            </Flex>
            <Box pt="16">
                <Skills />
            </Box>
        </Box>
    );
};
