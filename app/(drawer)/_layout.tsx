import React from 'react'
import { Drawer } from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { DrawerContent, DrawerHeader } from '@/ui'

const DrawerLayout = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <Drawer
      drawerContent={(props) => (
        <DrawerContent
          navProps={props}
          showDivider={false}
          children={undefined}
          title="Expo Material Drawer"
        />
      )}
      screenOptions={{
        header: (props) => (
          <DrawerHeader navProps={props} children={undefined} withSearchBar />
        ),
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: 'Home',
          title: 'Home',
        }}
      />
      <Drawer.Screen
        name="explore"
        options={{
          drawerLabel: 'Explore',
          title: 'Explore',
        }}
      />
    </Drawer>
  </GestureHandlerRootView>
)

export default DrawerLayout
