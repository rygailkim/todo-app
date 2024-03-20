import { ICategory } from "@/types"
import { Box, Text } from "@/utils/theme"
import React from "react"

import { Entypo } from "@expo/vector-icons"
import { Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { CategoriesNavigationType } from "@/navigation/types"
import { FadeInRight, FadeInLeft } from "react-native-reanimated"

type CategoryProps = {
  category: ICategory
}

const Category = ({ category }: CategoryProps) => {

  return (
      <Pressable>
        <Box bg="lightGray" p="4" borderRadius="rounded-5xl">
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box flexDirection="row">
              <Text variant="textBase" fontWeight="600" mr="3">
                {category.icon.symbol}
              </Text>
              <Text variant="textBase" fontWeight="600">
                {category.name}
              </Text>
            </Box>
            <Pressable>
              <Entypo name="dots-three-vertical" size={16} />
            </Pressable>
          </Box>
        </Box>
      </Pressable>
   )
}

export default Category