import Loader from "@/components/shared/loader"
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import Task from "@/components/tasks/task"
import TaskActions from "@/components/tasks/task-actions"
import { fetcher } from "@/services/config"
import useUserGlobalStore from "@/store/useUserGlobalStore"
import { ICategory, ITask } from "@/types"
import { getGreeting } from "@/utils/helpers"
import { Box, Text } from "@/utils/theme"
import { format } from "date-fns"
import React from "react"
import { FlatList } from "react-native"
import { ZoomInEasyDown } from "react-native-reanimated"

import useSWR from "swr"

const today = new Date()

const greeting = getGreeting({ hour: new Date().getHours() })

const HomeScreen = () => {
  const { user } = useUserGlobalStore()

  const {
    data: tasks,
    isLoading,
    mutate: mutateTasks,
  } = useSWR<ITask[]>("tasks/", fetcher)

  if (isLoading || !tasks) {
    return <Loader />
  }

  return (
    <SafeAreaWrapper>
      <Box flex={1} mx="4">
        <Text
          variant="textXl"
          fontWeight="500"
        >
          Good {greeting}, {user?.name}
        </Text>
        <Text variant="textXl" fontWeight="500">
          It’s {format(today, "eeee, LLL dd")} - You have {tasks.length} tasks
        </Text>
        <Box height={26} />
        <TaskActions categoryId="" />
        <Box height={26} />
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <Task task={item} />
          )}
          ItemSeparatorComponent={() => <Box height={14} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item._id}
        />
      </Box>
    </SafeAreaWrapper>
  )
}

export default HomeScreen