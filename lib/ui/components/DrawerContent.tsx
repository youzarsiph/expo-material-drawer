import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { router } from 'expo-router'
import React from 'react'
import { Image, View } from 'react-native'
import {
  Drawer,
  DrawerSectionProps,
  IconButton,
  Surface,
  Text,
  useTheme,
} from 'react-native-paper'

interface DrawerContentProps extends DrawerSectionProps {
  navProps: DrawerContentComponentProps
}

const DrawerContent = (props: DrawerContentProps) => {
  const theme = useTheme()

  return (
    <Drawer.Section {...props} style={{ gap: 4, paddingTop: 32 }}>
      <Surface
        elevation={0}
        style={{
          gap: 16,
          backgroundColor: theme.colors.secondaryContainer,
          marginBottom: 16,
          paddingHorizontal: 16,
          paddingVertical: 32,
        }}
      >
        <View
          style={{
            gap: 16,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Image
            style={{ height: 75, width: 75, borderRadius: 100 }}
            source={require('@/assets/images/react-logo.png')}
          />

          <IconButton icon="plus" onPress={() => {}} />
        </View>

        <Text variant="titleMedium">Yousuf Abu Shanab</Text>
      </Surface>

      <Drawer.Item label="My Profile" icon="account" onPress={() => {}} />
      <Drawer.Item
        label="New Group"
        icon="account-multiple"
        onPress={() => {}}
      />
      <Drawer.Item label="Contacts" icon="contacts" onPress={() => {}} />
      <Drawer.Item label="Calls" icon="phone" onPress={() => {}} />
      <Drawer.Item
        label="Saved Messages"
        icon="bookmark-multiple"
        onPress={() => {}}
      />
      <Drawer.Item
        label="Settings"
        icon="cog"
        onPress={() => router.push('/explore')}
      />
      <Drawer.Item
        label="Invite friends"
        icon="account-plus"
        onPress={() => {}}
      />
    </Drawer.Section>
  )
}

export default DrawerContent
