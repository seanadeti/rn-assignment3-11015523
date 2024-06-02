import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, ScrollView, FlatList } from 'react-native';


export default function App() {

  return (
        
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style={styles.container}>
        
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
        
        </SafeAreaView>
        
        <View style={styles.task}>
        <Text style={styles.taskText}> Ongoing Task</Text> 
        <FlatList 
        style={styles.list}
        contentContainerStyle={styles.contentContainer}
          data={[
            { key : "1", text : "Mobile Web Development" }, 
            { key : "2", text : "Web Development" },
	          { key : "3", text : "Push Ups" }, 
            { key : "4", text : "Design New Logo" },
            { key : "5", text : "Team Meeting" }, 
            { key : "6", text : "Client Presentation" },
            { key : "7", text : "Database Backup" }, 
            { key : "8", text : "SEO Optimization" },
            { key : "9", text : "Social Media Management" }, 
            { key : "10", text : "Market Research" },
            { key : "11", text : "Code Review" },
            { key : "12", text : "Update Portfolio" },
            { key : "13", text : "User Testing" },
            { key : "14", text : "Bug Fixing" },
            { key : "15", text : "Product Testing" },
          ]}
          renderItem={ ({item}) => (<View style={styles.item}>
            <Text style={styles.itemText}>{item.text}</Text>
          </View>)}
        />  
        </View>
        </ScrollView>
      </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0e2d3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingTop:90,
  },
  head: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  heading: {
    paddingBottom: 0,
    paddingRight: 210,
    bottom: 0,
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
    bottom: -25,
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
   bottom: -60,
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
  scrollView: {  
    bottom: -151,
    //paddingBottom: 800,
    paddingTop: 0,
    marginBottom:0,
    bottom: -80
  },
  taskText: {
    fontWeight:'bold',
    fontSize: 20,
    bottom: 300,
    right: -7,
  },
  scrollContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ongoingTaskList: {
    bottom: 600,
  },
  task: {
    flex: 1,
    paddingTop: 30,
    padding: 0,
    bottom: 20,
    top:400
  },
  list: {
    flexGrow: 0,
    bottom: 280,
    marginBottom: 160
  },
  item: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
    height: 160,
    width: 380,
    borderWidth: 0.3,
    borderColor: '#fbf9f7',

  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontWeight:'500',
    paddingTop: 50
  },
});
