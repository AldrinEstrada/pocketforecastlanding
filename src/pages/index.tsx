import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import * as React from 'react'
import { ChakraProvider, Box, Flex, Grid, GridItem, SimpleGrid, Stack, HStack, VStack, Button, Text, Image, Card, CardHeader, CardBody, CardFooter, Heading, Input } from '@chakra-ui/react'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import Nav from '@/components/Nav';
import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <ChakraProvider>
      <Head>
        <title>Welcome To PocketForecast</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/pocketforecast.png" />
      </Head>
      <main className={styles.main}>
        <Nav/>
        <Box display="flex" alignItems="center" justifyContent="center" marginTop="70px">
          <Box width="750px" height="750px">
            <Spline scene="https://prod.spline.design/VbqsawjhuOAeC2gl/scene.splinecode" />
          </Box>
          <Box justifyContent="center" marginLeft="-60px">
            <Text fontSize={40} fontWeight="bold" width="350px" marginBottom="15px">Be the very best in any weather.</Text>
            <Text width="300px" marginBottom="40px">With PocketForecast, turn any weather fun and exciting. Not only does it provide information, PocketForecast gives you the information you need to learn more about your Pokemon buddies.</Text>
            <Button bg="#BCE784">Select Plan</Button>
          </Box>

        </Box>

        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' display="flex"  justifyContent="center" marginTop="90px">
          <Card width="380px">
            <CardHeader>
              <Heading size='md'> Trainer</Heading>
              <Heading size='md'> Free</Heading>

            </CardHeader>
            <CardBody>
              <Box width="300px" height="300px" >
                <Spline scene="https://prod.spline.design/9txorNJGcziOMrnk/scene.splinecode" />
              </Box>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  See weather updates and live weather feed
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  View Pokemon related to weather
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Access Pokedex and information about every Pokemon
                </ListItem>
              </List>
            </CardBody>

            <CardFooter>
              <Button bg="#BCE784">Select Plan</Button>
            </CardFooter>
          </Card>
          <Card width="380px">
            <CardHeader>
              <Heading size='md'> Leader</Heading>
              <Heading size='md'> $9.99</Heading>
            </CardHeader>
            <CardBody>
              <Box width="300px" height="300px" >
                <Spline scene="https://prod.spline.design/6rRYKFhwjFsJAnek/scene.splinecode" />
              </Box>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  See weather updates and live weather feed
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  View Pokemon related to weather
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Access Pokedex and information about every Pokemon
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Be able to catch Pokemon that pop in your app
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Store up to 100 pokemon under your profile
                </ListItem>
              </List>
            </CardBody>
            <CardFooter>
              <Button bg="#BCE784">Select Plan</Button>
            </CardFooter>
          </Card>
          <Card width="380px">
            <CardHeader>
              <Heading size='md'> Champion</Heading>
              <Heading size='md'> $12.99</Heading>
            </CardHeader>
            <CardBody>
              <Box width="300px" height="300px" >
                <Spline scene="https://prod.spline.design/k8qRLCXnxF7v0HKl/scene.splinecode" />
              </Box>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  See weather updates and live weather feed
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  View Pokemon related to weather
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Access Pokedex and information about every Pokemon
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Be able to catch Pokemon that pop in your app
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Store up to 250 pokemon under your profile
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Challenge other pokemon trainers under the Leader and Champion tier subscription
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Access from all platforms
                </ListItem>
              </List>
            </CardBody>
            <CardFooter>
              <Button bg="#BCE784">Select Plan</Button>
            </CardFooter>
          </Card>
        </SimpleGrid>

        <Box display="flex" alignItems="center" justifyContent="center" marginTop="90px">
          <Box justifyContent="center" marginLeft="-60px">
            <Text fontSize={40} fontWeight="bold" width="350px" marginBottom="15px">It's in your nature.</Text>
            <Text width="300px" marginBottom="40px">Whether any storm with the best team on your side. In PocketForecast, battle trainers or trade pokemon that you catch in any weather. Learn more abou the weather in the coming days with our forecast and also see the possible Pokemon that can appear.</Text>
            <Button bg="#BCE784">Start your journey</Button>
          </Box>

          <Box width="350px" height="350px">
            <Spline scene="https://prod.spline.design/IU8zsdMF7f9eYzYo/scene.splinecode" />
          </Box>

        </Box>

        <Box display="flex" alignItems="center" justifyContent="center" marginTop="80px">
          <Box>
            <Text fontSize={25} fontWeight="bold" width="350px" marginBottom="15px">Subscribe to our Newsletter</Text>
            <Text>Sign up to get weekly updates and news</Text>
          </Box>
          <Input width="300px" placeholder='Email' />
          <Button bg="#BCE784">Subscribe</Button>
        </Box>
      </main>
    </ChakraProvider>
  )
}