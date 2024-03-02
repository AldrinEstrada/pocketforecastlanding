import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer = () => {
    const router = useRouter();

    return (
        <Box bg="#5AC9A1" display="flex" alignItems="center" justifyContent="space-evenly" width='100vw' height='12vh'>
            <Box display="flex" alignItems="center">
                <Image
                    src="/images/pocketforecast.png"
                    width={65}
                    height={65}
                    alt='logo'
                />
                <Text fontWeight="bold" marginLeft="10px" color="white">PocketForecast</Text>
            </Box>

            <Box display="flex" alignItems="center">
                <Text marginRight="70px" fontWeight="bold" color="white">© Aldrin Estrada</Text>
                <Button bg="#BCE784" onClick={() => router.push('https://github.com/Civic86/Adv-final-Project.git')}>View Github Project</Button>
            </Box>
        </Box>
    );
};

export default Footer;