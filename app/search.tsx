import { ScrollView, useColorScheme, View } from 'react-native'
import { Icon, Text, useTheme } from 'react-native-paper'

import { Colors } from '@/ui'

const Search = () => {
  const theme = useTheme()
  const colorScheme = useColorScheme()

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          height: 250,
          marginBottom: 16,
          backgroundColor: theme.colors.primaryContainer,
        }}
      >
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}
        >
          <Icon
            source="magnify"
            size={150}
            color={theme.colors.onPrimaryContainer}
          />
        </View>

        <View
          style={{
            paddingHorizontal: 8,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Icon
            source="database"
            size={75}
            color={Colors[colorScheme ?? 'light'].red.primary}
          />
          <Icon
            source="api"
            size={75}
            color={Colors[colorScheme ?? 'light'].olive.primary}
          />
        </View>
      </View>

      <View style={{ padding: 16 }}>
        <Text variant="displaySmall" style={{ fontWeight: 'bold' }}>
          Search
        </Text>
        <Text variant="bodyLarge">
          This app includes example code to help you get started.
        </Text>
      </View>
    </ScrollView>
  )
}

export default Search
