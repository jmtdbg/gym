import { TouchableOpacity } from 'react-native'
import { Heading, HStack, VStack, Text, Icon } from 'native-base';
import { UserPhoto } from './UserPhoto';

import { MaterialIcons } from '@expo/vector-icons';

export function HomeHeader() {
    return (
        <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">{/* cor do fundo, margem ou paddim topo, margem abaixo, margem horizontal e alinhamento dos itens */}
            <UserPhoto 
                source={{ uri: 'https://github.com/jmtdbg.png' }}
                alt="Imagem do Usuário"
                size={16}
                mr={4} /* margem a esquerda */
            />
        <VStack flex={1}>
            <Text color="gray.100" fontSize="md">
                Olá
            </Text>
            <Heading color="gray.100" fontSize="md" fontFamily="heading">
                Johnny
            </Heading>
        </VStack>

        <TouchableOpacity>{/* touch sem efeito de opacidade */}
            {/* ao utilizar a biblioteca externa de icones para customizar as propriedades */}
            <Icon 
            /* biblioteca de referencia */
                as={MaterialIcons} 
                name="logout" 
                color="gray.200"
                size={7}
            />
        </TouchableOpacity>
        </HStack>
    );
}