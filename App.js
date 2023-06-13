import { StyleSheet, View } from 'react-native';
import Welcome from './componets/Welcome';
import MenuItems from './componets/Menu';
import Header from './componets/Header';
import Footer from './componets/Footer';
import FlatListMenu from './componets/Flatlist'
import FlatlistMenuPrices from './componets/FlatlistMenuPrices';
import SectionListExercise from './componets/SectionListExercise';
import Form from './componets/Form'
import FeedbackForm from './componets/virtualKeyboard'
import LoginScreen from './componets/LoginIn';
import ToggleMenu from './componets/toogleMenu';
// import Welcome from './componets/img'
import ImgExercise from './componets/ImgExercise';
// import ColorScheme from './componets/ColorScheme';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer style= {styles.container}>
      <Stack.Navigator 
      initialRouteName="Menu"
      screenOptions={{headerStyle:{backgroundColor: '#fbdabb'}}}
      >
      <Stack.Screen 
      options={{title: 'Home'}}
      name = 'Welcome' component={Welcome}/>
      <Stack.Screen name = 'Menu' component={ImgExercise}/>
      <Stack.Screen name = 'Login' component={LoginScreen}/>
      
      </Stack.Navigator>
    {/* <View > */}
      {/* <Header/> */}
      {/* <LoginScreen/> */}
      {/* <FeedbackForm/> */}
      {/* <Form/> */}
      {/* <Footer/> */}
     {/* { <ColorScheme/>} */}
      {/* <Welcome/> */}
      {/* <FlatListMenu/> */}
      {/* <MenuItems/> */}
      {/* <FlatlistMenuPrices/> */}
      {/* <SectionListExercise/> */}
      {/* <ToggleMenu/> */}
      {/* <ImgExercise/> */}
    
 
    {/* </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'green'
  },
});
