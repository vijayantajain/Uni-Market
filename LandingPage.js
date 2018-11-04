import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const LandingPage = () => {
   const goToTransaction = () => {
      Actions.transaction()
   }
   const goToHomepage = () => {
       Actions.homepage()
   }
   return (
       [
        <TouchableOpacity key={0} style = {{ margin: 128 }} onPress = {goToTransaction}>
            <Text>Click for TRANSACTION!</Text>
        </TouchableOpacity>,
        <TouchableOpacity key={1} style = {{ margin: 128 }} onPress = {goToHomepage}>
            <Text>Click for HOMEPAGE!</Text>
        </TouchableOpacity>
       ]
   )
}
export default LandingPage