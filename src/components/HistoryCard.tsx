import {HStack, Heading, Text, VStack } from 'native-base';

type Props =  {
    
}

export function HistoryCard() {
    return ( 
        <HStack w="full" px={5} py={4} mb={3} bg="gray.600" rounded="md" alignItems="center" justifyContent="space-between">
        
            <VStack mr={5} flex={1}>

                <Heading fontSize="md" color="white" textTransform="capitalize" fontFamily="heading" numberOfLines={1}>
                    costas
                </Heading>

                <Text fontSize="lg" color="gray.100" numberOfLines={1}>
                    puxada frontal 
                </Text>

            </VStack>

            <Text fontSize="md" color="gray.300">
                08:56
            </Text>

        </HStack>
            
    );
}