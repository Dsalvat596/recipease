import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './Home';

const Stack = createNativeStackNavigator();

const Router: FC = () => {
  const renderStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="main"
          component={HomeScreen}
          options={{
            headerShown: true,
            title: 'AYY CHOLO',
          }}
        />
      </Stack.Navigator>
    );
  };
  return renderStack();
};

export default Router;
