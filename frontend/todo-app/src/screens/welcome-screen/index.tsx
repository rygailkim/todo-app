import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box } from '@/components/utils/theme'
import { useNavigation } from '@react-navigation/native'
import { AuthScreenNavigationType } from '@/navigation/types'
import Button from '@/components/shared/button'
import SafeAreaWrapper from '@/components/shared/safe-area-wrapper'

const WelcomeScreen = () => {
    const navigation = useNavigation<AuthScreenNavigationType<"Welcome">>()
    const navigateToSignInScreen = () => {
        navigation.navigate("SignIn")
    }
    const navigateToSignUpScreen = () => {
        navigation.navigate("SignUp")
    }

  return (
    <SafeAreaWrapper>
      <Box>
          <Text>Welcome Screen</Text>
          <Button label="Navigate to Sign In" onPress={navigateToSignInScreen}/>
          <Button label="Navigate to Sign Up" onPress={navigateToSignUpScreen}/>
    </Box>
   </SafeAreaWrapper>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})