import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Homepage = () => {
   const goToLandingPage = () => {
      Actions.landingpage()
   }
   return (
      <TouchableOpacity style = {{ margin: 128 }} onPress = {goToLandingPage}>
         <Text>Back to LANDINGPAGE!</Text>
      </TouchableOpacity>
   )
}
export default Homepage