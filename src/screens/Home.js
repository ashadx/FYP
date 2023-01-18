import { View, Text, Button } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'




const Home = () => {
  return (
    <LinearGradient colors={[ '#0F8F9F','#7CCFD9']} style={{height:'100%'}}>
      <InputField Placeholder='Enter Name'/>
      <CustomButton title='Send'/>
      
      </LinearGradient>
  )
}

export default Home