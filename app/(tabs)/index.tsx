import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const IndexPage = () => {
  return (
   <SafeAreaView className="flex-1 items-center justify-center bg-white dark:bg-black">
     <Text className="text-red-500 dark:text-white">Hello, Hexaa!</Text>
   </SafeAreaView>
  )
}

export default IndexPage