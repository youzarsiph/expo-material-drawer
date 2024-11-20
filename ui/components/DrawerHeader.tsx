import { DrawerHeaderProps as BaseProps } from '@react-navigation/drawer'
import { getHeaderTitle } from '@react-navigation/elements'
import { router } from 'expo-router'
import React from 'react'
import {
  Appbar,
  AppbarProps,
  IconButton,
  Searchbar,
  Tooltip,
} from 'react-native-paper'

interface DrawerHeaderProps extends AppbarProps {
  navProps: BaseProps
  withSearchBar?: boolean
}

const DrawerHeader = (props: DrawerHeaderProps) => (
  <Appbar.Header {...props}>
    {props.withSearchBar ? (
      <Searchbar
        value=""
        icon="menu"
        placeholder="Search..."
        onPress={() => router.push('/search')}
        style={{ margin: 8, marginBottom: 16 }}
        onIconPress={() => props.navProps.navigation.openDrawer()}
        right={(props) => (
          <IconButton
            {...props}
            icon="web"
            onPress={() => router.push('/explore')}
          />
        )}
      />
    ) : (
      <>
        <Tooltip title="Open drawer">
          <Appbar.Action
            icon="menu"
            onPress={() => props.navProps.navigation.openDrawer()}
          />
        </Tooltip>

        <Appbar.Content
          title={getHeaderTitle(
            props.navProps.options,
            props.navProps.route.name,
          )}
        />

        {props.navProps.options.headerRight
          ? props.navProps.options.headerRight({
              canGoBack: props.navProps.navigation.canGoBack(),
            })
          : undefined}
      </>
    )}
  </Appbar.Header>
)

export default DrawerHeader
