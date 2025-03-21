import React from 'react'
import { Drawer } from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { DrawerContent, DrawerHeader } from '@/lib'

const DrawerLayout = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <Drawer
      drawerContent={(props) => (
        <DrawerContent
          navProps={props}
          showDivider={false}
          children={undefined}
        />
      )}
      screenOptions={{
        header: (props) => (
          <DrawerHeader
            navProps={props}
            children={undefined}
            withSearchBar
            searchBarProps={{ value: '', placeholder: 'Search...' }}
          />
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
