import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { router } from 'expo-router'
import React from 'react'
import { Drawer, DrawerSectionProps } from 'react-native-paper'

interface DrawerContentProps extends DrawerSectionProps {
  navProps: DrawerContentComponentProps
}

const DrawerContent = (props: DrawerContentProps) => (
  <Drawer.Section {...props} style={{ paddingTop: 32 }}>
    <Drawer.Item
      label="Home"
      icon="home"
      active={props.navProps.state.index === 0}
      onPress={() => router.push('/')}
    />
    <Drawer.Item
      label="Explore"
      icon="web"
      active={props.navProps.state.index === 1}
      onPress={() => router.push('/explore')}
    />
  </Drawer.Section>
)

export default DrawerContent
