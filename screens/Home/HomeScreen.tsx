import styles from './styles';
import React, { Component } from 'react';
import { Text, View, Dimensions, ImageBackground, Image, SafeAreaView, ScrollView } from 'react-native';
import Video from 'react-native-video';



class HomeScreen extends Component {
  video: Video;
  
  render() {
 
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <Video source={require('./broadchurch.mp4')}   // Can be a URL or a local file.
                ref={(ref: Video) => { this.video = ref }}                                    // Store reference
                //onBuffer={this.onBuffer}                // Callback when remote video is buffering
                //onError={this.videoError}               // Callback when video cannot be loaded
                style={styles.backgroundVideo} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;