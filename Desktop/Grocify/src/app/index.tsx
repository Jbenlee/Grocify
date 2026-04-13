import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.fullname}> Joven Lee M. Bua</Text>
       <Text style={styles.yrandsection}> BSIT - 2A</Text>
     
      
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"black",
    
  },
  fullname:{
    color:"white",
    fontSize:30,
    
  },
  yrandsection:{
    color: "white",
    fontSize: 30

  }


});



