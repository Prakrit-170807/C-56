import * as React from 'react';
import {Text , View , Button, StyleSheet,} from 'react-native'
import SoundBUTTON from './sound'
import HEADING from './Apphead'

export default class App extends React.Component {
  render(){
    return(
      <View style={styles.all}>
        <HEADING/>
        <SoundBUTTON/>
      </View>
    )
  }
 }

const styles = StyleSheet.create({
  all:{
    backgroundColor: "black"
  }
})


