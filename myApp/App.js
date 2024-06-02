import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, ScrollView, Dimensions } from 'react-native';


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
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}>
        <View style={styles.exercise}>
          <Text style={styles.codeText}>Exercise</Text>
          <Text style={styles.codeInnerText}>{'\n\n'}12 Task</Text>
          <Image source={require('./images/woman.png')}
            style={styles.codePic}/>
        </View>
        <View style={styles.study}>
          <Text style={styles.codeText}>Study</Text>
          <Text style={styles.codeInnerText}>{'\n\n'}12 Task</Text>
          <Image source={require('./images/study.png')}
            style={styles.codePic}/>
        </View>
        <View style={styles.code}>
          <Text style={styles.codeText}>Code</Text>
          <Text style={styles.codeInnerText}>{'\n\n'}13 Task</Text>
          <Image source={require('./images/images-2.png')}
            style={styles.codePic}/>
        </View>
        <View style={styles.cook}>
          <Text style={styles.codeText}>Cook</Text>
          <Text style={styles.codeInnerText}>{'\n\n'}13 Task</Text>
          <Image source={require('./images/images-3.png')}
          style={styles.cookPic}/>
        </View>
        <View style={styles.workout}>
          <Text style={styles.codeText}>Workout</Text>
          <Text style={styles.codeInnerText}>{'\n\n'}12 Task</Text>
          <Image source={require('./images/images.jpeg')}
            style={styles.codePic}/>
        </View>
        
        <View style={styles.clean}>
          <Text style={styles.codeText}>Clean</Text>
          <Text style={styles.codeInnerText}>{'\n\n'}10 Task</Text>
          <Image source={require('./images/clean.jpg.avif')}
          style={styles.cookPic}/>
        </View>
        
        <View style={styles.laundry}>
          <Text style={styles.codeText}>Laundry</Text>
          <Text style={styles.codeInnerText}>{'\n\n'}11 Task</Text>
          <Image source={require('./images/laundry.jpg.avif')}
            style={styles.codePic}/>
        </View>
        <View style={styles.work}>
          <Text style={styles.codeText}>Work</Text>
          <Text style={styles.codeInnerText}>{'\n\n'}30 Task</Text>
          <Image source={require('./images/images-5.png')}
          style={styles.cookPic}/>
        </View>
        </ScrollView>
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
    bottom: 0,
    left: 100
  },
  code: {
    flexDirection: 'column',
    borderRadius:20,
    backgroundColor: 'white',
    bottom: 0,
    padding: 0,
    right: -640,
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
  cook: {
    flexDirection: 'row',
    borderRadius:20,
    backgroundColor: 'white',
    bottom: 0,
    padding: 0,
    left: 243,
    width: 180,
    height: 200,
  },
  cookPic: {
    height: 100,
    width: 100,
    position: 'absolute',
    bottom: 15,
    right: 39,
  },
  workout: {
    flexDirection: 'column',
    borderRadius:20,
    backgroundColor: 'white',
    bottom: 0,
    padding: 0,
    right: 150,
    width: 187,
    height: 200,  
  },
  clean: {
    flexDirection: 'column',
    borderRadius:20,
    backgroundColor: 'white',
    bottom:0,
    padding: 0,
    left: -540,
    width: 180,
    height: 200,
  }, 
  laundry: {
    flexDirection: 'column',
    borderRadius:20,
    backgroundColor: 'white',
    bottom: 0,
    padding: 0,
    right: 930,
    width: 187,
    height: 200, 
  },
  work: {
    flexDirection: 'column',
    borderRadius: 20,
    backgroundColor: 'white',
    bottom:0,
    left: 148,
    width: 187,
    height: 200,
    marginRight: 153,
  },
  exercise: {
    flexDirection: 'column',
    borderRadius: 20,
    backgroundColor: 'white',
    bottom: 0,
    padding: 0,
    right: -1268,
    width: 187,
    height: 200,
  },
  study:{
    flexDirection: 'column',
    borderRadius: 20,
    backgroundColor: 'white',
    bottom: 0,
    padding: 0,
    right: 220,
    width: 187,
    height: 200,
    marginLeft: 40
  },
  scrollContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollView: {
    //marginVertical: 20,
    height: 220,  // Fixed height for the ScrollView
    bottom: 630
  },
});
