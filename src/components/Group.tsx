import { Pressable, Text, IPressableProps } from "native-base";

type Props = IPressableProps & {
    name: string;
    isActive: boolean;
}

export function Group({ name, isActive, ...rest }: Props) {
    return (
        //exeto de toque mas sem opassidade
        <Pressable
            mr={3} //margem esquerda
            w={24} //largura
            h={10} //altura
            bg="gray.600"
            rounded="md" //cantos arredondados
            justifyContent="center" //alinhamento justicado no centro
            alignItems="center" //alinhamento dos itens no centro
            overflow="hidden" // manter dentro dos limites do botão
            isPressed={ isActive } //botão ativo ?
            _pressed={{ 
                borderColor: "green.500",
                borderWidth: 1
             }} // ao precionar acrescenta a borda
            { ...rest }
        >
            <Text
                color={isActive ? "green.500" : "gray.200"}
                textTransform="uppercase" //caixa alta
                fontSize="xs" //tamanho
                fontWeight="bold" //estilo
                >
                {name}
            </Text>
        </Pressable>
    );
    
}