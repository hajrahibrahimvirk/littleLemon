import React from 'react';
import { Image, View ,StyleSheet, Text} from 'react-native';

function ImgExercise() {
    return (
        <View style={styles.main}>
        <View style={styles.container}>
           <View style={styles.imageWrapper}>
        <Image
          source={require('../img/littleLemonBackground.png')}
          resizeMode="cover"
          style={styles.logo}
        />
      </View>
            <Text style={styles.welcomeText}>
                Little Lemon
            </Text>
            
        </View>
        <Text style={styles.text}>
        Little Lemon is a charming neighborhood
                bistro that serves simple food and classic cocktails in a lively but 
                casual enviroment. Just adding more text. We would lobe to hear more about your experience with us!
        </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    logo:{
        height:100,
        width:100,
        borderColor:'black',
        // borderWidth:10,
        borderLeftWidth: 2, // Adjust the value as per your requirement
        borderRightWidth: 2, // Adjust the value as per your requirement
        
    },
    imageWrapper: {
        borderColor: '#EDEFEE',
        borderLeftWidth: 2,
        borderRightWidth: 2,
      },
    container:{
        flex:0.1,
        padding:10,
        margin:10,
        flexDirection:'row',
        alignItems:'center',
    },
    main:{
        flex:1,
        alignItems:'center',
        alignContent:'center',
        textAlign:'justify'

    },

    welcomeText:{
        fontSize:30,
        marginLeft:10,
        color:'#EDEFEE',
        marginBottom:-10
    },
    text:{
        
        fontSize:25,
        marginTop:52,
        color:'#EDEFEE',
        marginLeft:10
        
    }
})

export default ImgExercise;