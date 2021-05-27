import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import UsersContext from "../../context/UserContext";

export default function UserForm({ route, navigation }) {
  const [user, setUser] = useState(route.params ? route.params : {});
  const { dispatch } = useContext(UsersContext )
  return (
    <View style={styles.form}>
      <Text style={styles.text}>Nome</Text>
      <TextInput
        style={styles.input}
        onChangeText={(name) => setUser({ ...user, name })}
        placeholder="Informe o Nome"
        value={user.name}
      />
      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={(email) => setUser({ ...user, email })}
        placeholder="Informe o Email"
        value={user.email}
      />
      <Text style={styles.text}>URL do Avatar</Text>
      <TextInput
        style={styles.input}
        onChangeText={(avatarUrl) => setUser({ ...user, avatarUrl })}
        placeholder="Informe a URl do Avatar"
        value={user.avatarUrl}
      />
      <Button 
        title="Salvar"
        onPress={() => {
          dispatch({
            type: user.id ? 'updateUser' : 'createUser',
            payload: user,
          })
          navigation.goBack()
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 15,
  },

  text: {
    fontSize: 18,
  },

  input: {
    height: 40,
    padding: 5,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
  },
});
