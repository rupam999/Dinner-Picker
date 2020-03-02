import React, { Component } from 'react';
import { 
  StyleSheet, View, Text, Dimensions, Image
} from 'react-native';
import { 
  Button, Header, Icon
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

import MainScreen from './screens/MainScreen';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export class Head extends React.Component{
  render(){
    return(
      <Header style={{ width: 0, height: 0 }} iosBarStyle={"light-content"} androidStatusBarColor='#191C25'>
      </Header>
    )
  }
}

export class FirstScreen extends Component{
  render() {
    return (
      <>
        <View>
          <Image
            source={{uri: 'https://rupamcompany.000webhostapp.com/Dwindle/food.png'}}
            style={styles.BigFoodImage}
          />
          <Text style={ styles.foodLogo }>FOOD</Text>
        </View>
        <View>
        <Image
            source={{uri: 'https://rupamcompany.000webhostapp.com/Dwindle/smallfood.png'}}
            style={styles.SmallFoodImage}
          />
        </View>
        <View>
          <Image
            source={{uri: 'https://rupamcompany.000webhostapp.com/Dwindle/dummyLogo.png'}}
            style={styles.LogoStyle}
          />
        </View>
      </>
    )
  };
}


export default class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      status:false
    }
  }

  ShowResturent = () =>{
    if(this.state.status == true) {
      this.setState({status: false})
    } else {
      this.setState({status: true})
    }
  }

  RefershRestarunt = () =>{
    if(this.state.status == true) {
      this.setState({status: true})
    } else {
      this.setState({status: true})
    }
  }

  ShowButton = () =>{
    return(
      <LinearGradient colors={['#191C25','#2D2F34', '#545453']} style={{height: screenHeight }}>
        <Head />
        <FirstScreen />
        <Button onPress={this.ShowResturent} style={ styles.MainButton }>
          <Text style={styles.findButton}>Start Finding Resturant</Text>
        </Button>
      </LinearGradient>
    );
  }

  MainScreenButton = () =>{
    return(
      <LinearGradient colors={['#191C25','#2D2F34', '#545453']} style={{ height: 0 }}>
        <Head />
        <LinearGradient colors={['#191C25','#2D2F34', '#545453']}>
          <Button onPress={this.ShowResturent} style={ styles.RefreshButton }>
            <Icon name={'home'} style={ styles.RefreshButtonIcon } />
          </Button>
          <Button onPress={this.RefershRestarunt} style={ styles.BackTOHomeButton }>
            <Icon name={'refresh'} style={ styles.BackTOHomeButtonIcon } />
          </Button>
        </LinearGradient>
      </LinearGradient>
    );
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        {this.state.status ? <MainScreen /> : this.ShowButton()}
        {this.state.status ? this.MainScreenButton() : <MainScreen />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer :{
    flex:1,
    width: screenWidth,
    height: screenHeight,
  },
  BigFoodImage: {
    width: screenWidth * 1.7,
    height: screenHeight * .90,
    position: 'relative',
    display: 'flex',
    left: '-2%',
    resizeMode: 'contain',
    alignSelf: 'stretch',
    transform: [{ rotate: '0deg' }],
    top: '-11%',
  },
  SmallFoodImage: {
    width: screenWidth * .80,
    height: screenHeight * .25,
    position: 'relative',
    display: 'flex',
    left: '-25%',
    resizeMode: 'contain',
    alignSelf: 'stretch',
    transform: [{ rotate: '0deg' }],
    top: '-135%',
  },
  LogoStyle: {
    width: 60,
    height: 60,
    position: 'relative',
    top: '-1320%',
    left: '-2.5%',
  },
  foodLogo: {
    position: 'relative',
    top: '-83%',
    left: '2.5%',
    color: '#fff',
  },
  MainButton: {
    position: 'relative',
    top: '-70%',
    borderRadius: 30,
    marginLeft: '7%',
    marginRight: '7%',
    backgroundColor: '#fff',
  },
  findButton: {
    position: 'relative',
    left: '215%',
    fontSize: 16,
  },
  RefreshButton: {
    backgroundColor: '#2D2F34',
    width: 50,
    position: 'relative',
    top: '-25%',
    borderRadius: 40,
    height: screenHeight/10,
    width: screenWidth/5,
    left: screenWidth/4.55,
  },
  RefreshButtonIcon: {
    color: '#fff',
    width: 80,
    height: 30,
    position: "relative",
    left: '15.5%',
  },
  BackTOHomeButton: {
    backgroundColor: '#2D2F34',
    width: 50,
    position: 'relative',
    top: '-45%',
    borderRadius: 40,
    height: screenHeight/10,
    width: screenWidth/5,
    left: screenWidth/1.65,
  },
  BackTOHomeButtonIcon: {
    color: '#fff',
    width: 80,
    height: 27,
    position: "relative",
    left: '17.5%',
  },
});