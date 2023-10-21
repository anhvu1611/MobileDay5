import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{alignItems:'center'}}>
        <Image
          source={require('../assets/vs_blue.png')}
          style={{width:301, height: 361}}
        />
      </View>
      <View style={{}}>
        <View style={{justifyContent: 'center', alignItems:'center'}}>
          <Text style={{fontSize: 15, fontWeight: 400, }}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        </View>
        <View>
          <View style={{flexDirection:'row', justifyContent:'space-between', paddingTop: 10}}>
            <View style={{flexDirection: 'row'}}>
              <Image 
                source={require('../assets/star.png')}
                style={{width:23, height: 25}}
              />
              <Image 
                source={require('../assets/star.png')}
                style={{width:23, height: 25}}
              />
              <Image 
                source={require('../assets/star.png')}
                style={{width:23, height: 25}}
              />
              <Image 
                source={require('../assets/star.png')}
                style={{width:23, height: 25}}
              />
              <Image 
                source={require('../assets/star.png')}
                style={{width:23, height: 25}}
              />
            </View>
            <Text>(Xem 828 danh gia)</Text>
          </View>
          <View style={{flexDirection:'row', marginTop: 10}}>
            <Text style={{fontSize:18, fontWeight: 700}}>1.780.000d</Text>
            <Text style={{marginLeft: 30}}>1.780.000d</Text>
          </View>
          <View style={{flexDirection:'row', marginTop: 10}}>
            <Text style={{color: 'red', fontSize: 12, fontWeight: 700}}>O dau re hon hoan tien</Text>
            <Image 
              source={require('../assets/hoi.png')}
              style={{width: 20, height:20, marginLeft:10}}
            />
          </View>
          <View style={{borderWidth:1, height:38, borderRadius: 10, flexDirection:'row', justifyContent:'center', alignItems: 'center'}}>
            <Text>4 MAU - CHON MAU</Text>
            <Image
              source={require('../assets/vector.png')}
              style={{width:14, height:14, position:'absolute', right:20}}
            />
          </View>
          <View style={{justifyContent:'center', alignItems:'center', backgroundColor:'red', height: 44, marginTop: 50, borderRadius:10}}>
            <Text style={{color:'white', fontSize: 20, fontWeight:700}}>CHON MUA</Text>  
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
});
