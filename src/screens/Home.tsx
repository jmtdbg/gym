import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { VStack, HStack, FlatList, Heading, Text } from "native-base";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { ExerciseCard } from "@components/ExerciseCard";

export function Home() {

    const [ groups, setGroups ] = useState(['costas', 'Bíceps', 'Tríceps', 'ombro']);
    const [ exercises, setExercises ] = useState(['puxada frontal', 'remada curvada', 'remada unilateral', 'levantamento terra']);
    const [ groupSelected, setGroupSelected ] = useState('costas');

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleOPenExerciseDetails() {
        navigation.navigate('exercise');
    }

    return (
        <VStack flex={1}>{/* caixa na vertical ocupando todo espaço restante */}
            
            <HomeHeader />
            {/* lista semelhante ao foreach*/}
            <FlatList 
                data={groups} //dados
                keyExtractor={item => item} // chave: valor
                renderItem={({ item }) => (
                    <Group 
                    name={item} 
                    isActive={groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()} 
                    onPress={() => setGroupSelected(item)}
                /> 
                )}
                horizontal //horizontal
                showsHorizontalScrollIndicator={false} //nao exibe a barrinha
                _contentContainerStyle={{ px: 6 }} // paddim interno 
                my={5} //margem vertical
                maxH={10} // garante que so vai ocupar altura de 10
                minH={10} // garante que so vai ocupar altura de 10
            />

            <VStack flex={1} px={8}>
                <HStack justifyContent="space-between" mb={5}>
                    <Heading color="gray.200" fontSize="md" fontFamily="heading">
                        Exercícios
                    </Heading>

                    <Text color="gray.200" fontSize="sm">
                        { exercises.length }
                    </Text>

                </HStack>
                
                <FlatList 
                    data={exercises}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                    <ExerciseCard 
                        onPress={handleOPenExerciseDetails}
                    /> 
                    )} 
                    showsVerticalScrollIndicator = {false}
                    _contentContainerStyle = {{ paddingBottom: 20 }}
                />
                
            </VStack>
        </VStack>
    );
}