import React from 'react';
import { Box, Text, Button} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
  return (
    <Box bg="#5AC9A1" display="flex" alignItems="center" justifyContent="space-evenly" width='100vw' height='9vh'>
        
        <Box display="flex" alignItems="center" >
            <Image
            src="/images/pocketforecast.png"
            width={65}
            height={65}
            alt='logo'
            />
            <Text fontWeight="bold" marginLeft="10px" color="white">PocketForecast</Text>
        </Box>

        <Box display="flex" alignItems="center" spacing={2}>
            <Text marginRight="70px" fontWeight="bold" color="white">About</Text>
            <Text marginRight="70px" fontWeight="bold" color="white">Pricing</Text>
            <Text fontWeight="bold" marginRight="70px" color="white">Support</Text>
            <Button bg="#BCE784">Sign Up</Button>
        </Box>
        


        
    </Box>
  );
};

export default Nav;

