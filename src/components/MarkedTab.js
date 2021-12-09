import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MarkList from "../containers/MarkListContainer";
import CtfDetail from "../containers/CtfDetailContainer";

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MarkList" component={MarkList} />
      <Stack.Screen name="CtfDetail" component={CtfDetail} />
    </Stack.Navigator>
  );
};
