import { Input as NativeBaseInput, IInputProps, FormControl} from 'native-base';

type Props = IInputProps & {
    errorMessage?: string | null
}

export function Input({ errorMessage = null, isInvalid, ...rest }: Props) {

    const invalid = !!errorMessage || isInvalid;

    return (
        <FormControl isInvalid={invalid} mb={4}>

            <NativeBaseInput
                bg="gray.700"//cor
                h={14}//altura
                px={4}//espaçamento interno
                borderWidth={0}//retira as bordas
                fontSize="md"//tamanho da fonte
                color="white"//cor do texto
                fontFamily="body"//fonte
                placeholderTextColor="gray.300"
                isInvalid={invalid} //verifica se o input é inválido
                _invalid={{ 
                    borderWidth: 1,
                    borderColor: "red.500"
                 }}
                _focus={{ 
                    bg: "gray.700",
                    borderWidth: 1,
                    borderColor: "green.500"
    
                 }}//fundo, borda e cor do input quando selecionado
                {...rest}//injeta propriedades do input
            />

            <FormControl.ErrorMessage _text={{ color: "green.500" }}>
                {errorMessage}
            </FormControl.ErrorMessage>

        </FormControl>
    );
}