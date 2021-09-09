import React, {useState} from 'react';
import {Text, Button, SafeAreaView} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AppStack = createNativeStackNavigator();

export default () => {
  // const { isAuthorized, setIsAuthorized } = useAuthProviderContext();
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        {isAuthorized && <Text>IS_AUTHORIZED</Text>}
        <AppStack.Navigator>
          {isAuthorized ? (
            <AppStack.Screen
              name="LoggedInScreen"
              component={() => <Text>LOGGED_IN</Text>}
            />
          ) : (
            <AppStack.Screen
              name="LoggedOutScreen"
              component={() => (
                <>
                  <Button
                    title="LOGIN"
                    onPress={() => {
                      setIsAuthorized(true);
                    }}
                  />
                </>
              )}
            />
          )}
        </AppStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
