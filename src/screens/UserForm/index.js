import React, { useState } from "react";
import { Text } from "react-native";

export default function UserForm({ route, navigation }) {
  const [user, setUser] = useState(route.params ? route.params : {});
  return <Text>{user.id}</Text>;
}
