import { useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import { Center, Heading, ScrollView, Skeleton, Text, VStack, useToast } from "native-base";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from 'expo-file-system';


import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

const PHOTO_SIZE = 33;

export function Profile() {

    const [photoIsLoading, setPhotoIsLoading] = useState(false);
    const [userPhoto, setUserPhoto] = useState('https://github.com/jmtdbg.png');

    const toast = useToast();

    async function handleUserPhotoSelect() {
        
        setPhotoIsLoading(true);

        try {
            const photoSelected = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
                aspect: [4, 4],
                allowsEditing: true
                
            }); //acessa a galeria de fotos
    

            //console.log(photoSelected);
    
            if (photoSelected.canceled) {
                return;
            }

            if (photoSelected.assets[0].uri) {
                const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri);
                // console.log(photoInfo);

                //ver bug nao valida o tamanho da foto
                // if(photoInfo.size && (photoInfo.size / 1024 / 1024) > 5) {
                //     // return Alert.alert("Essa imagem é muito grande. Escolha uma de até 5MB");
                //     return toast.show({
                //         title: 'Imagem é muito grande. Escolha uma de até 5MB',
                //         placement: 'top',
                //         duration: 3000,
                //         bgColor: 'red.500',
                //     })
                // }

                if (photoInfo.exists && photoInfo.size / 1024 / 1024 > 0.05) {
                    return toast.show({
                      title: 'A imagem deve ter no máximo 3MB',
                      placement: 'top',
                      duration: 3000,
                      bgColor: 'red.500',
                    });
                }
                
                setUserPhoto(photoSelected.assets[0].uri);
            }

        } catch (error) {
            console.log(error);     
        } finally {
            setPhotoIsLoading(false);
        }
    }

    return (
        <VStack flex={1}>
            
            <ScreenHeader title="Profile"/>

            <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
                <Center mt={6} px={10}>
                    {
                        photoIsLoading ?
                            <Skeleton 
                                w={PHOTO_SIZE} 
                                h={PHOTO_SIZE} 
                                rounded="full" 
                                startColor="gray.500"
                                endColor="gray.400"
                            />
                        :
                            <UserPhoto 
                                source={{ uri: userPhoto }}
                                alt="Imagem do Usuário"
                                size={PHOTO_SIZE}
                    />
                    }

                    <TouchableOpacity onPress={handleUserPhotoSelect}>
                        <Text color="green.500" fontWeight="bold" fontSize="md" mt={2} mb={8}>
                            Alterar foto
                        </Text>
                    </TouchableOpacity>

                    <Input 
                        bg="gray.600"
                        placeholder="Nome"
                    />
                    <Input 
                        bg="gray.600"
                        placeholder="E-mail"
                        // value="jmtdbg@gmail.com"
                        isDisabled //desabilita a edição
                    />

                    
                    <Heading color="gray.200" fontSize="md" mb={2} alignSelf="flex-start" mt={12} fontFamily="heading">
                        Auterar senha
                    </Heading>
                    
                    <Input 
                        bg="gray.600"
                        placeholder="Senha antiga"
                        secureTextEntry
                    />
                    <Input 
                        bg="gray.600"
                        placeholder="Nova senha"
                        secureTextEntry
                    />
                    <Input 
                        bg="gray.600"
                        placeholder="Confirme a nova senha"
                        secureTextEntry
                    />

                    <Button 
                       title="Atualizar"
                       mt={4} 
                    />
                </Center>
            </ScrollView>
        </VStack>
    );
}