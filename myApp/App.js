import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, ScrollView } from 'react-native';


export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.head}>Hello, Devs </Text>
          <Text>14 Task Today</Text>
          <Image 
          source={require('./images/ProfileImage.png')}
          style={styles.profilePic}/>
        </View>
        <View style={styles.search}>
          <TextInput 
          placeholder='Search'
          placeholderTextColor={'black'}
          style={styles.searchBox}
          />
          <Image source={require('./images/mynaui_search.png')} style={styles.searchIcon}/>
          <Image source={require('./images/Filter.png')} style={styles.filterIcon}/>
        </View>
        <Text style={styles.cat}>Categories</Text>
        <View style={styles.container}>
          <Image 
          source={require('./images/Categories card-2.png')} 
          style={styles.catPic}/>
          <Image source={require('./images/Categories card.png')}
          style={styles.study}/>
        </View>
        <View style={styles.code}>
          <Text style={styles.codeText}>Code</Text>
          <Text style={styles.codeInnerText}>{'\n\n'}13 Task</Text>
          <Image source={require('./images/images-2.png')}
            style={styles.codePic}/>
        </View>
        <StatusBar style="auto" />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0e2d3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  head: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  heading: {
    paddingBottom: 700,
    paddingRight: 210,
  },
  profilePic: {
    position: 'absolute',
    left: 330,
    top: 0,
  },
  searchBox: {
    borderRadius: 18,
    height: 53,
    width: 290,
    backgroundColor: 'white',
    right: 45,
    fontWeight: 'bold',
    color: 'blue',
    paddingLeft: 49
  },
  search: {
    bottom: 670,
  },
  searchIcon: {
    position: 'absolute',
    left: -30,
    top: 14,
  },
  filterIcon: {
    position: 'absolute',
    left: 287,
    height: 50,
  },
  cat: {
   fontWeight: 'bold',
   fontSize: 20,
   paddingRight: 270,
   bottom: 630,
  },
  catPic: {
    right: 100,
    bottom: 630,
  },
  study: {
    bottom: 822,
    left: 120
  },
  code: {
    flexDirection: 'row',
    borderRadius:20,
    backgroundColor: 'white',
    bottom:815,
    padding: 90,
    right: 100,
    width: 187,
    height: 200,
  },
  codePic: {
    height: 100,
    width: 100,
    position: 'absolute',
    bottom: 15,
    right: 39,
  },
  codeText: {
    position: 'absolute',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  codeInnerText: {
    position: 'absolute',
    fontSize: 12,
    fontWeight: 'condensedBold',
    paddingLeft: 20,
    padding: 14,
  },
});
