import { StatusBar } from 'react-native';
import {NativeBaseProvider} from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Routes } from './src/routes';

import { THEME } from './src/theme';
import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoader] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
    {/* <View style={{ flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#202024' }}> */}
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {/* {fontsLoader ? <Text style={{ fontFamily: 'Roboto_700Bold'}}>Bem vindo ao NossoApp!</Text> : <View />} */}
      {/* {fontsLoader ?  <SignIn /> : <Loading />} */}
      {fontsLoader ?  <Routes /> : <Loading />}
    {/* </View> */}
    </NativeBaseProvider> 
  );
}
