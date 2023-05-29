// import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { VStack, Image, Center, Text, Heading, ScrollView } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup' ;

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

type FormDataProps = {
    name: string;
    email: string;
    password: string;
    password_confirm: string;
}
//validacoes do formulario
const signUpSchema = yup.object({
    name: yup.string().required('Informe o nome.'),
    email: yup.string().required('Informe o e-mail.').email('E-mail inválido.'),
    password: yup.string().required('Informe a senha.').min(6, 'A senha deve ter pelo menos 6 dígitos.'),
    password_confirm: yup.string().required('Confirme a senha.').oneOf([yup.ref('password')], 'A confirmação da senha não confere'),
});

export function SignUp() {
    // const [name, setName] = useState('');
    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        resolver: yupResolver(signUpSchema)
        
        //     defaultValues: {
        //         name: 'Johnny'
        //     }
        }//atribui valor incial ao campo
    );

    const navigation = useNavigation(); 

    function handleGoBack() {
        navigation.goBack();
    }

    function handleSignUp({ name, email, password, password_confirm }: FormDataProps) {
        // console.log(name);
        console.log({ name, email, password, password_confirm });
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <VStack flex={1} px={10} pb={16}>
                <Image 
                    source={BackgroundImg}
                    defaultSource={BackgroundImg}
                    alt="Pessoas Treinando"
                    resizeMode="contain"
                    position="absolute"
                />
                <Center my={24}>
                    <LogoSvg />
                    <Text color="gray.100" fontSize="sm">
                        Treine sua mente e corpo.
                    </Text>
                </Center>
                <Center>
                <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
                    Crie sua Conta
                </Heading>

                <Controller 
                    control={control}
                    name="name"
                    render={({field: { onChange, value } }) => (
                        <Input 
                            placeholder="Nome"
                            onChangeText={onChange}
                            value={value}
                            errorMessage={errors.name?.message}
                        />
                    )}
                />

                <Controller 
                    control={control}
                    name="email"
                    render={({field: { onChange, value } }) => (
                        <Input 
                            placeholder="E-mail"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onChangeText={onChange}
                            value={value}
                            errorMessage={errors.email?.message}
                        />
                    )}
                />

                <Controller 
                    control={control}
                    name="password"
                    render={({field: { onChange, value } }) => (
                        <Input 
                            placeholder='Senha'
                            secureTextEntry
                            onChangeText={onChange}
                            value={value}
                            errorMessage={errors.password?.message}
                        />
                    )}
                />

                <Controller 
                    control={control}
                    name="password_confirm"
                    render={({field: { onChange, value } }) => (
                        <Input 
                            placeholder='Confirme a senha'
                            secureTextEntry
                            onChangeText={onChange}
                            value={value}
                            onSubmitEditing={handleSubmit(handleSignUp)} //possibilita submeter o formulario  com o teclado ativo
                            returnKeyType="send" //muda botao de envio do teclado
                            errorMessage={errors.password_confirm?.message}
                        />
                    )}
                />
                
                <Button 
                    title="Criar e acessar"
                    onPress={handleSubmit(handleSignUp)}
                />

                </Center>
                                   
                <Button 
                    title="Voltar para o login" 
                    variant="outline" 
                    mt={12}
                    onPress={handleGoBack}
                />

            </VStack>
        </ScrollView>
    );
}