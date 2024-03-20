
import React, { useState } from 'react'
import SafeAreaWrapper from '@/components/shared/safe-area-wrapper'
import theme, { Box, Text } from '@/utils/theme'
import NavigateBack from '@/components/shared/navigate-back'
import { Pressable, TextInput } from 'react-native'
import { ICategory, ICategoryRequest, IColor, IIcon } from '@/types'
import { getColors, getIcons } from '@/utils/helpers'
import Button from '@/components/shared/button'
import axiosInstance from '@/services/config'

const COLORS = getColors()
const ICONS = getIcons()

const DEFAULT_COLOR = COLORS[0]
const DEFAULT_ICON = ICONS[0]

const CreateCategoryScreen = () => {
    const [newCategory, setNewCategory] = useState<
    Omit<ICategory, "_id" | "user" | "isEditable">>({
        name: "",
        color: DEFAULT_COLOR,
        icon: DEFAULT_ICON,
    })

    const createNewCategory = async () => {
        try {
            console.log("Created category")
        } catch (error) {
          console.log("error in createNewCategory", error)
          throw error
        }
      }

      const updateColor = (color: IColor) => {
        setNewCategory((prev) => {
          return {
            ...prev,
            color,
          }
        })
      }
      const updateIcon = (icon: IIcon) => {
        setNewCategory((prev) => {
          return {
            ...prev,
            icon,
          }
        })
      }

  return (
    <SafeAreaWrapper>
        <Box flex={1} mx='4'>
            <Box height={16}/>
            <Box flexDirection='row' justifyContent='space-between' alignItems='center'>
                <NavigateBack/>
            </Box>

            <Box height={16}/>
            <Box bg="gray250" borderRadius='rounded-2xl'>
                <TextInput
                    style={{
                        fontSize: 20,
                        lineHeight: 26,
                        padding: 16,
                    }}
                    maxLength={36}
                    placeholder='Create new list'
                    placeholderTextColor={theme.colors.gray5}
                    onChangeText={(text)=>{
                        setNewCategory(prev=> {
                            return {
                                ...prev,
                                name: text,
                            }
                        })
                    }}
                />
            </Box>
            
            <Box bg="gray250" p="4" borderRadius='rounded-2xl'>
                <Box bg="white" width={80} p='2' mb="4" borderRadius='rounded-2xl' alignItems='center'>
                    <Text variant='textBase' fontWeight='600' color={newCategory.color.name as any}>Colors</Text>
                </Box>
                <Box flexDirection="row" justifyContent="space-evenly">
                    {COLORS.map((_color) => {
                    return (
                        <Pressable
                        key={_color.id}
                        onPress={() => {updateColor(_color)}}
                        >
                        <Box
                            style={{
                            backgroundColor: _color.code,
                            }}
                            width={24}
                            height={24}
                            borderRadius="rounded-2xl"
                        ></Box>
                        </Pressable>
                    )
                    })}
                </Box>
            </Box>
                        
            <Box bg="gray250" p="4" borderRadius='rounded-2xl'>
                <Box bg="white" width={80} p='2' mb="4" borderRadius='rounded-2xl' alignItems='center'>
                    <Text variant='textBase' fontWeight='600' color={newCategory.color.name as any}>{newCategory.icon.symbol}</Text>
                </Box>
                <Box flexDirection="row" justifyContent="space-evenly">
                    {ICONS.map((icon) => {
                    return (
                        <Pressable
                        key={icon.id}
                        onPress={() => {updateIcon(icon)}}
                        >
                        <Box
                            width={24}
                            height={24}
                            borderRadius="rounded-2xl"
                        >
                            <Text>{icon.symbol}</Text>
                        </Box>
                        </Pressable>
                    )
                    })}
                </Box>
            </Box>
        
            <Box style={{marginTop: "100%"}}>
            <Button label="Create New Category" onPress={createNewCategory}/>
            </Box>
        </Box>
        

    </SafeAreaWrapper>
  )
}

export default CreateCategoryScreen