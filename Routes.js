import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import LandingPage from './LandingPage.js'
import Homepage from './Homepage.js'
import Transaction from './Transaction.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "landingpage" component = {LandingPage} title = "LandingPage" initial = {true} />
         <Scene key = "homepage" component = {Homepage} title = "Homepage" />
         <Scene key = "transaction" component = {Transaction} title = "Transaction" />
      </Scene>
   </Router>
)
export default Routes