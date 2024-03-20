import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box } from '@/components/utils/theme'
import Button from '@/components/shared/button'
import { useNavigation } from '@react-navigation/native'
import { AuthScreenNavigationType } from '@/navigation/types'
import SafeAreaWrapper from '@/components/shared/safe-area-wrapper'

const SignUpScreen = () => {

    const navigation=useNavigation<AuthScreenNavigationType<"SignUp">>()
    const navigateToSignInScreen = () => {
      navigation.navigate("SignIn")
    }

  return (
    <SafeAreaWrapper>
      <Box>
          <Text>Sign In Screen</Text>
          <Button label="Navigate to Sign Up" onPress={navigateToSignInScreen}/>
      </Box>
    </SafeAreaWrapper>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({})