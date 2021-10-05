import * as React from 'react';
import {Text , View , StyleSheet} from 'react-native'

class HEDING extends React.Component {
    render(){
      return(
        <View >
          <Text style={styles.tel}>
            C-56
          </Text>
        </View>
      )
    }
}

const styles = StyleSheet.create ({
    tel: {
        marginTop: 50,
        backgroundColor: 'black',
        color: 'white',
        textAlign:"center", 
        fontSize:30
    }
})

export default HEDING;