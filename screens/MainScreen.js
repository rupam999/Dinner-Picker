import React from 'react';
import {
  ActivityIndicator, StyleSheet, View, Text, Image, Dimensions
} from 'react-native';
import { 
  Header,
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export class Slogan extends React.Component{
    render(){
        return(
            <Text style={ styles.foodSlogan }>Today's Dinner @</Text>
        );
    }
}

export class Human extends React.Component{
  render(){
    return(
      <View>
        <Image
          source={{uri: 'https://rupamcompany.000webhostapp.com/Dwindle/human.png'}}
          style={styles.HumanCheer}
        />
      </View>
    );
  }
}

export class ResturantStyleScreen extends React.Component{
    render() {
      return (
        <>
            <View>
                <Image
                    source={{uri: 'https://rupamcompany.000webhostapp.com/Dwindle/dummyLogo.png'}}
                    style={styles.LogoStyle}
                />
                <Text style={styles.CompanyNameTitle}>FOOD</Text>
            </View>
        </>
      )
    };
}


function ShowResturent(){
  let randomNumber = Math.floor(Math.random() * 9) + 1;
  if(randomNumber === 1){
    return(
        <View style={{ position: 'relative',top: -180, left: '-7%', }}>
            <Slogan />
            <Text style={styles.ResturentNameKrishnapa}>Krishnapa</Text>
            <Human />
        </View>
    );
  } else if(randomNumber === 2){
    return(
        <View style={{ position: 'relative',top: -180, left: '-7%', }}>
            <Slogan />
            <Text style={styles.ResturentNameMahadev}>Mahadev</Text>
            <Human />
        </View>
    );
  } else if(randomNumber === 3){
    return(
        <View style={{ position: 'relative',top: -180, left: '-7%', }}>
            <Slogan />
            <Text style={styles.ResturentNameCapital}>Capital One</Text>
            <Human />
        </View>
    );
  } else if(randomNumber === 4){
    return(
        <View style={{ position: 'relative',top: -180, left: '-7%', }}>
            <Slogan />
            <Text style={styles.ResturentNameAlzaik}>AlZaik</Text>
            <Human />
        </View>
    );
  } else if(randomNumber === 5){
    return(
        <View style={{ position: 'relative',top: -180, left: '-7%', }}>
            <Slogan />
            <Text style={styles.ResturentNameGabru}>Gabru</Text>
            <Human />
        </View>
    );
  } else if(randomNumber === 6){
    return(
        <View style={{ position: 'relative',top: -180, left: '-7%', }}>
            <Slogan />
            <Text style={styles.ResturentNameNepali}>Nepali Momo</Text>
            <Human />
        </View>
    );
  } else if(randomNumber === 7){
    return(
        <View style={{ position: 'relative',top: -180, left: '-7%', }}>
            <Slogan />
            <Text style={styles.ResturentNameBombeyDine}>Bombey Dine</Text>
            <Human />
        </View>
    );
  } else if(randomNumber === 8){
    return(
        <View style={{ position: 'relative',top: -180, left: '-7%', }}>
            <Slogan />
            <Text style={styles.ResturentNameParadise}>Paradise Biriyani</Text>
            <Human />
        </View>
    );
  } else if(randomNumber === 9){
    return(
        <View style={{ position: 'relative',top: -180, left: '-7%', }}>
            <Slogan />
            <Text style={styles.ResturentNameBadshai}>Badshai</Text>
            <Human />
        </View>
    );
  } else {
    return(
        <View style={{ position: 'relative',top: -180, left: '-7%', }}>
            <Slogan />
            <Text style={styles.ResturentNameDifferent}>Try Different Today</Text>
            <Human />
        </View>
    );
  } 
}

export class Loading extends React.Component{

  constructor(props) {
    super(props);
    this.state ={ timer: 5}
  }
  
  componentDidMount(){
    this.interval = setInterval(
      () => this.setState((prevState)=> ({ timer: prevState.timer - 1 })),
      1000
    );
  }
  
  componentDidUpdate(){
    if(this.state.timer === 0){ 
      clearInterval(this.interval);
      ShowResturent();
    }
  }
  
  componentWillUnmount(){
   clearInterval(this.interval);
  }
  

  render(){
    return(
      <View style={{ position: 'relative', marginTop: '80%', left: '35%', }}>
        {this.state.timer == 0 ? null : <Text style={ styles.counterStyle }> {this.state.timer} </Text> }
        {this.state.timer == 0 ? ShowResturent(): 
          <View>
            <Text style={{ color: '#fff', position: 'relative', left: '-10.5%', top: -120, fontSize: 18, }}>Finding Best Resturant</Text> 
          </View>
        }
      </View>
    )
  }
}

export class Head extends React.Component{
  render(){
    return(
      <Header style={{ width: 0, height: 0 }} iosBarStyle={"light-content"} androidStatusBarColor='#191C25'>
      </Header>
    )
  }
}

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return(
        <View style={{ justifyContent:'center', alignItems: 'center' }}>
          <ActivityIndicator size={40} />
        </View>
      )
    }

    return (
      <LinearGradient colors={['#191C25','#2D2F34', '#545453']} style={{ flex: 1 }}>
        <Head />
        <ResturantStyleScreen />
        <Loading />
      </LinearGradient>
    );
  }
}


const styles = StyleSheet.create({
  HeaderStyle: {
    backgroundColor: '#c5c5c5',
  },
  Loader: {
    position: 'relative',
    marginTop: '80%',
    left: '35%',
  },
  counterStyle:{
    color: 'green',
    fontSize: 125,
    position: 'relative',
    left: '-6.5%',
    top: -110,
  },
  ResturentName:{
    color: '#fff',
    fontSize: 30,
  },
  LogoStyle: {
    width: '15%',
    height:50,
    position: 'relative',
    top: '130%',
    left: '38%',
  },
  CompanyNameTitle: {
    color: '#fff',
    position: 'relative',
    top: '125%',
    left: '42%',
    fontSize: 15,
  },
  foodSlogan: {
    color: '#fff',
    fontSize: 20,
  },
  ResturentNameDifferent: {
    color: '#fff',
    fontSize: 30,
    position: 'relative',
    left: -50,
    top: 10,
  },
  HumanCheer: {
    position: 'relative',
    left: '-5%',
    top: '17%',
    width: screenWidth/2.5 + 50,
    height: screenHeight/2.4,
  },
  ResturentNameBadshai: {
    color: '#fff',
    fontSize: 30,
    position: 'relative',
    left: '4%',
    top: 10,
  },
  ResturentNameParadise: {
    color: '#fff',
    fontSize: 30,
    position: 'relative',
    left: '-10%',
    top: 10,
  },
  ResturentNameBombeyDine: {
    color: '#fff',
    fontSize: 30,
    position: 'relative',
    left: '-4.5%',
    top: 10,
  },
  ResturentNameNepali: {
    color: '#fff',
    fontSize: 30,
    position: 'relative',
    left: '-4.5%',
    top: 10,
  },
  ResturentNameGabru: {
    color: '#fff',
    fontSize: 30,
    position: 'relative',
    left: '7.5%',
    top: 10,
  },
  ResturentNameAlzaik: {
    color: '#fff',
    fontSize: 30,
    position: 'relative',
    left: '7.5%',
    top: 10,
  },
  ResturentNameCapital: {
    color: '#fff',
    fontSize: 30,
    position: 'relative',
    left: '-1%',
    top: 10,
  },
  ResturentNameMahadev: {
    color: '#fff',
    fontSize: 30,
    position: 'relative',
    left: '3.5%',
    top: 10,
  },
  ResturentNameKrishnapa: {
    color: '#fff',
    fontSize: 30,
    position: 'relative',
    left: '2%',
    top: 10,
  },
});