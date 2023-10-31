import React , {useState} from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';


export default function App({navigation}) {

  const[image, setImage] = useState(require('../assets/vs_blue.png'))
  const[color, setColor] = useState("Xanh")
  const[price, setPrice] = useState("1.590.000đ")
  return (
    <View style={styles.container}>
      <View style={{flex: 3, flexDirection:'row'}}>
        <Image
          source={image}
          style={{width:112, height:132}}
        />
        <Text style={{margin: 20}}>Điện Thoại Vsmart Joy 3 {"\n"}Hàng chính hãng {"\n"}Màu: {color} {"\n"} Giá: {price}</Text>
      </View>
      <View style={{flex: 10, backgroundColor:'#C4C4C4'}}>
        <Text style={{fontSize: 18, fontWeight: 400, margin: 5}}>Chon 1 mau ben duoi:</Text>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Pressable style={{width:100, height:100, backgroundColor:'#234896', margin:3}} 
            onPress={()=>{
              setImage(require('../assets/vs_blue.png'))
              setColor("Xanh")
              setPrice("1.780.000đ")
            }}
          />
          <Pressable style={{width:100, height:100, backgroundColor:'red', margin:3}} 
            onPress={()=>{ 
              setImage(require('../assets/vs_red.png'))
              setColor("Đỏ")
              setPrice("1.690.000đ")
            }}
          />
          <Pressable style={{width:100, height:100, backgroundColor:'black', margin:3}} 
            onPress={()=>{
              setImage(require('../assets/vs_black.png'))
              setColor("Đen")
              setPrice("2.190.000đ")
            }}
          />
          <Pressable style={{width:100, height:100, backgroundColor:'#C5F1FB', margin:3}} 
            onPress={()=>{
              setImage(require('../assets/vs_silver.png'))
              setColor("Bạc")
              setPrice("1.780.000đ")
            }}
          />
        </View>
        <Pressable
          onPress={()=>navigation.navigate('manHinh3', image)}
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
