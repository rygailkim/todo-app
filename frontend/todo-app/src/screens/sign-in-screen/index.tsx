import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box } from '@/components/utils/theme'
import Button from '@/components/shared/button'
import { useNavigation } from '@react-navigation/native'
import { AuthScreenNavigationType } from '@/navigation/types'
import SafeAreaWrapper from '@/components/shared/safe-area-wrapper'

const SignInScreen = () => {

    const navigation=useNavigation<AuthScreenNavigationType<"SignIn">>()
    const navigateToSignUpScreen = () => {
      navigation.navigate("SignUp")
    }

  return (
    <SafeAreaWrapper>
      <Box>
          <Text>Sign In Screen</Text>
          <Button label="Navigate to Sign Up" onPress={navigateToSignUpScreen}/>
      </Box>
    </SafeAreaWrapper>
  )
}

export default SignInScreen

const styles = StyleSheet.create({})