import React from 'react';
import {Text, StyleSheet, ScrollView, View} from 'react-native'

function Welcome() {
    return (
        <View style={styles.mainView}>
        <ScrollView style={styles.scrollView}>
        <Text style={styles.text1}>
            Welcome to Little Lemon {' '}
            <Text style={styles.text2}>
            {'\n '}
            {'\n '}
       
                Little Lemon is a charming neighborhood
                bistro that serves simple food and classic cocktails in a lively but 
                casual enviroment. Just adding more text. We would lobe to hear more about your experience with us!
            </Text>
        </Text>
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    text1:{
        textAlign:'center',
        // position:'absolute',
        // top:200,
    //    fontWeight:'bold',
       fontSize:32,
       color:'black',
       paddingLeft:7    
      
    },
    mainView:{
        flex:1,
        backgroundColor:'yellow'
    },
    text2:{
     fontSize:42  ,
     flexWrap: 'wrap'  },
     mainView:{
        flex:0.75,
     },
     scrollView:{
        indicatorStyle:'white'
     }
})

export default Welcome;