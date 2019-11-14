import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native'

export default class MenJa extends Component{
  render(){
    return(
      <ScrollView>
        <View style={{ padding: 32 }}>
            <Image source={ require('../../assets/sche.jpg') } style={{ height: 180, width: 180, alignSelf: 'center', margin: 20}} />

           <TextInput placeholder="Tentukan Jadwal" keyboardType="default" style={{ padding: 12, fontSize: 12, borderWidth: 2, borderRadius: 4, borderColor: 'purple', margin: 8 }} /> 

           <TouchableOpacity>
             <View style={{  padding: 18, margin: 7, marginTop: 17, backgroundColor: 'purple', alignItems: 'center', borderRadius: 8 }}>
               <Text style={{ color: 'white', fontSize: 10,  }}>Tambah Jadwal</Text>
             </View>
           </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}