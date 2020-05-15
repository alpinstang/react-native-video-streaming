import React, { Component } from 'react';
import Orientation from "react-native-orientation";
import Navigator from "./navigation/navigator";
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

interface Props {}
export default class App extends Component<Props> {
  componentDidMount = () => {
    Orientation.lockToPortrait;
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <PaperProvider>
            <Navigator />
          </PaperProvider>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
