import {Scroll} from "@react-three/drei";
import {Box, Button, ChakraProvider, extendTheme, Heading, Text, ThemeConfig} from "@chakra-ui/react";
import {motion} from "framer-motion";

const config: ThemeConfig = {
    initialColorMode: 'dark',
}

const theme = extendTheme({config, styles: {global: {body: {bg: 'gray.900'}}}})

function HTMLContent() {
    return (
        <Scroll html>
            <ChakraProvider theme={theme}>
                <Box w={"100vw"} h={"100vh"} display={"flex"} flexDirection={"column"} alignItems={"center"}>
                    <Heading as={motion.h1} marginY={"30"} fontSize={"xxx-large"} fontWeight={"bold"} initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0, transition: {delay: 0.5}}} >Voici votre nouveau téléphone.</Heading>
                    <Text as={motion.p} initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0, transition: {delay: 0.75}}}>Le meilleur en terme de performance, de design et d'innovation.</Text>
                    <Text as={motion.p} initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0, transition: {delay: 1}}}>Le tout dans un seul et même appareil.</Text>
                    <Text as={motion.p} initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0, transition: {delay: 1.25}}}>Bienvenue dans le futur du smartphone.</Text>
                </Box>
                <Box as={motion.div} w={"100vw"} h={"100vh"} initial={{opacity: 0, y: 50}} whileInView={{ opacity: 1, y:0 }}>
                    <Box w={"30%"} margin={"16"}>
                        <Heading as={motion.h2} fontSize={"xx-large"} fontWeight={"bold"} marginBottom={"12"}>Un écran exceptionnel</Heading>
                        <Text as={motion.p} initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0, transition: {delay: 0.75}}}>Cet écran AMOLED 4k 120Hz avec une restitution fidèle des couleurs rendra votre vidéo ou votre jeu vidéo encore plus beau que ce que vous pouvez imaginer.
                            Sans oublier sa vitre Gorilla Glass qui peut endurer les chocs les plus violents allant jusqu'à 130km/h.</Text>
                    </Box>
                </Box>
                <Box as={motion.div} w={"100vw"} h={"100vh"} initial={{opacity: 0, y: 50}} whileInView={{ opacity: 1, y:0 }} display={"flex"} flexDirection={"column"} alignItems={"flex-end"}>
                    <Box w={"50%"} margin={"16"}>
                        <Heading as={motion.h2} fontSize={"xx-large"} fontWeight={"bold"} marginBottom={"12"}>Des performances hors du commun</Heading>
                        <Text as={motion.p} initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0, transition: {delay: 0.75}}}>Oubliez les ralentissements, la batterie qui ne tient qu'1 demi-journée à peine et les crashs constants dès que plus de deux applis sont ouvertes en même temps.
                            Avec le tout nouveau processeur à technologie propriétaire Blinklizard réservé aux machines les plus exigeantes, vous aurez l'impression d'avoir un PC gaming dans le creux de votre main.
                        </Text>
                    </Box>
                </Box>
                <Box as={motion.div} w={"100vw"} h={"100vh"} initial={{opacity: 0, y: 50}} whileInView={{ opacity: 1, y:0 }}>
                    <Box w={"60%"} margin={"16"}>
                        <Heading as={motion.h2} fontSize={"xx-large"} fontWeight={"bold"} marginBottom={"12"}>Un appareil photo professionnel avec un niveau de détail hallucinant.</Heading>
                        <Text as={motion.p} initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0, transition: {delay: 0.75}}}>Avec un capteur 50% plus grand que la concurrence en moyenne, et une optimisation logicielle de chaque pixel, difficile de faire mieux que cet appareil à double objectif. Le capteur principal de 64 mégapixels et l'objectif télescopique pouvant zoomer jusqu'à 6x vous offre l'opportunité de réaliser des clichés dignes d'une exposition.</Text>
                    </Box>
                </Box>
                <Box as={motion.div} w={"100vw"} h={"100vh"} initial={{opacity: 0, y: 50}} whileInView={{ opacity: 1, y:0 }} display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"6"}>
                    <Heading as={motion.h2} fontSize={"xxx-large"} fontWeight={"bold"} marginBottom={"8"}>Alors, qu'attendez-vous ?</Heading>
                    <Text as={motion.p} initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0, transition: {delay: 0.75}}}>Le smartphone de vos rêves est disponible dès maintenant. Commandez-le aujourd'hui et recevez-le dans les 24h.</Text>
                    <Button as={motion.button} colorScheme='green' initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0, transition: {delay: 1}}}>Commander</Button>
                </Box>
            </ChakraProvider>
            </Scroll>
    );
}

export default HTMLContent;