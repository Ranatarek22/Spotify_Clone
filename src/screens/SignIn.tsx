import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import BackArrow from '../components/BackArrow';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../Navigation/StackNav';
import LinearGradient from 'react-native-linear-gradient';

const logo = require('../../assets/images/logo.png');
const hide = require('../../assets/images/Hide.png');

const SignIn = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View style={styles.nav}>
        <BackArrow />
        <Image source={logo} style={styles.logo} />
      </View>
      <View>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subTitle}>
          If You Need Any Support <Text style={styles.link}>Click Here</Text>
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter Username Or Email" style={styles.input} />
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input}
          />

          <Image source={hide} style={styles.eyeIcon} />
        </View>
      </View>
      <Text style={styles.recoveryText}>Recovery Password</Text>
      <View>
        <CustomButton
          title="Sign In"
          onPress={() => {
            navigation.navigate('ready');
          }}
        />
      </View>
      <View style={styles.loginWith}>
        <LinearGradient
          colors={['#D3D3D3', '#B0B0B0']}
          style={styles.line}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
        />

        <Text>OR</Text>
        <LinearGradient
          colors={['#D3D3D3', '#B0B0B0']}
          style={styles.line}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  logo: {
    width: 108,
    height: 40,
    resizeMode: 'contain',
    marginLeft: 90,
  },
  title: {
    fontFamily: 'Satoshi-Bold',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '15%',
    color: '#383838',
  },
  subTitle: {
    color: '#383838',
    fontFamily: 'Satoshi-Regular',
    fontSize: 15,
    textAlign: 'center',
    padding: 20,
  },
  link: {
    color: '#38B432',
  },
  nav: {
    flexDirection: 'row',
  },
  inputContainer: {
    width: '100%',
    marginVertical: 15,
  },
  input: {
    // backgroundColor: '#fff',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '100%',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
  },
  eyeIcon: {
    position: 'absolute',
    right: 20,
    color: '#666',
  },
  recoveryText: {
    alignSelf: 'flex-start',
    color: '#383838',
    fontSize: 14,
    marginBottom: 20,
  },
  loginWith: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:'8%'
  },
  line: {
    borderBottomColor: '#b6bcd4',
    borderBottomWidth: 1,
    marginVertical: 10,
    width: '40%',
    height: 2,
  },
});
export default SignIn;
