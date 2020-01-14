import React, {Component} from 'react';
import {StyleSheet, Image, Dimensions, TouchableHighlight, Text, View} from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
import { Feather } from '@expo/vector-icons';
const Images = [
    {
        uri: "https://i.imgur.com/mxgtWKt.jpg",
        label: "Cat on a blue blanket"
    },

    {
        uri: "https://i.imgur.com/XCRnNWn.jpg",
        label: "A cat toy"
    },

    {
        uri: "https://i.imgur.com/dqQX1K0.jpg",
        label: "A close up of a dog"
    },

    {
        uri: "https://i.imgur.com/nZXbSbh.jpg",
        label: "Sheep next to a cat"
    },

    {
        uri: "https://i.imgur.com/mXCjefR.jpg",
        label: "Cat laying on the grass"
    },

    {
        uri: "https://i.imgur.com/AGyxRcc.jpg",
        label: "Bird sitting on a railing"
    }
];


export default class App extends Component {
    state = {
        clicks: 0,
        show:true
    };

    incrementNumber = () =>{
         this.setState({clicks:this.state.clicks+1});
          if(this.state.clicks===5){
            this.setState({clicks:0})
          }
    };

    decrementNumber = () =>{
      this.setState({clicks:this.state.clicks-1})
        if(this.state.clicks===0){
          this.setState({clicks: 0})
        }
    };

    render() {
      const image = Images[this.state.clicks];
        return (
            <View style={styles.container}>
                <Image source={{uri: image.uri}}
                       style={styles.image}>
                </Image>
                <Text style={styles.imageLabel}>{image.label}</Text>
                <TouchableHighlight style={styles.slideLeft} onPress={this.decrementNumber} >
                    <Feather name="arrow-left-circle"   size={40} color="white" />
                </TouchableHighlight>
                <TouchableHighlight style={styles.slideRight}  onPress={this.incrementNumber}>
                    <Feather name="arrow-right-circle" size={40} color="white" />
                </TouchableHighlight>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#abcdef',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
      width: SCREEN_WIDTH,
      flex:1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    imageLabel: {
      position: 'absolute',
      textAlign: 'center',
      backgroundColor: 'rgba(100, 100, 100, 0.5)',
      color: 'white',
      width: '100%',
      padding: 20,
      bottom: 100,
    },
    slideLeft: {
      position: 'absolute',
      width: 40,
      left: '2%',
      top: '50%',
      backgroundColor:'rgba(52, 52, 52, 0.8)',
      borderRadius: 50,
      alignItems:'center'
    },
    slideRight: {
      position: 'absolute',
      width: 40,
      alignItems:'center',
      backgroundColor:'rgba(52, 52, 52, 0.8)',
      borderRadius: 50,
      right: '2%',
      top: '50%',
    }

});
