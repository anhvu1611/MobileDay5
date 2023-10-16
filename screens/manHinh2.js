import React , {useState} from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';


export default function App() {

  const [image, setImage] = useState(require('./assets/vs_blue.png'))

  return (
    <View style={styles.container}>
      <View style={{flex: 3, flexDirection:'row'}}>
        <Image
          source={image}
          style={{width:112, height:132}}
        />
        <Text style={{margin: 20}}>Điện Thoại Vsmart Joy 3 {"\n"}Hàng chính hãng</Text>
      </View>
      <View style={{flex: 10, backgroundColor:'#C4C4C4'}}>
        <Text style={{fontSize: 18, fontWeight: 400, margin: 5}}>Chon 1 mau ben duoi:</Text>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Pressable style={{width:100, height:100, backgroundColor:'#C5F1FB', margin:3}} 
            onPress={()=>{
              console.log(2)
              setImage(require('./assets/vs_blue.png'))
            }}
          />
          <Pressable style={{width:100, height:100, backgroundColor:'red', margin:3}} 
            onPress={()=>{ 
              console.log(1)
              setImage(require('./assets/vs_red.png'))
            }}
          />
          <Pressable style={{width:100, height:100, backgroundColor:'black', margin:3}} 
            onPress={()=>{
              setImage(require('./assets/vs_black.png'))
            }}
          />
          <Pressable style={{width:100, height:100, backgroundColor:'#234896', margin:3}} 
            onPress={()=>{
              setImage(require('./assets/vs_silver.png'))
            }}
          />
        </View>
        <Pressable
          style={{backgroundColor:'rgba(25, 82, 226, 0.58)', height: 44, fontSize: 20, color: 'white', justifyContent: 'center', alignItems:'center', marginHorizontal: 20, borderRadius:10}}
        >XONG</Pressable>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
