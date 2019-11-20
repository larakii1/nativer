import React from 'react';
import { StyleSheet, Text,ImageBackground } from 'react-native';
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs"
import {FontAwesome5} from "@expo/vector-icons";
import {JournalScreen , MeasuresScreen , TreatmentScreen , ProfileScreen} from "./screens";
// export default function App() {

//   return (
  
//       <ImageBackground source = {
//         require('./assets/mojave-day.jpg')} style={styles.container}> 
        
//         <Text style={{color: 'white', fontSize:20}}>Bienvenue</Text>
        
//       </ImageBackground>

   
//   );
// }

const TabNavigator = createBottomTabNavigator(

{

  Journal: {
      screen: JournalScreen,
      navigationOptions:{
        tabBarIcon: () => <FontAwesome5 name ="book-medical" size={24} color="#CDCCCE"/>
      }

  },

Measures: {

screen : MeasuresScreen,
navigationOptions: {

  tabBarIcon:() => <FontAwesome5 name="heartbeat" size={24} color="#CDCCCE" />

}

},
Treatment : {
  screen : TreatmentScreen,
  navigationOptions: {
    tabBarIcon:() => <FontAwesome5 name ="band-aid" size={24} color="#CDCCCE"/> 
  }

},
Profile:{
  screen: ProfileScreen,
  navigationOptions: {
    tabBarIcon : () => <FontAwesome5 name="user" size={24} color ="#CDCCCE"/>
  }
}
},
{
tabBarOptions: {
  showLabel: false
}
}





);
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
   
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// const text = StyleSheet.create({
//   container:{
// color:  'white' }
// })


export default createAppContainer(TabNavigator);