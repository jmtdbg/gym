import { Button as NativeBaseButton, IButtonProps, Text} from 'native-base';

type Props = IButtonProps & {
    title: string;
    variant?: 'solid' | 'outline';
}
export function Button({title, variant = 'solid', ...rest}: Props) {
    return (
        <NativeBaseButton
            bg={variant === "outline" ? "transparent" : "gray.700"}//cor
            w="full"//largura
            h={14}//altura
            borderWidth={variant === "outline" ? 1 : 0}// bordas
            borderColor="green.500"
            rounded="sm"
            _pressed={{ 
                bg: variant === "outline" ? "gray.500" : "green.500"
             }}//cor de fundo do botao
            {...rest}//injeta propriedades do botão
            >
                <Text
                    color={variant === "outline" ? "green.500" : "white"}//cor
                    fontFamily="heading"//fonte
                    fontSize="sm"//tamanho da fonte
                >
                {title}
                </Text>
        </NativeBaseButton>
    );
}