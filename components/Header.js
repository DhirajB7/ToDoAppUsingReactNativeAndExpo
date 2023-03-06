import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
        <Text style={styles.title}>To Do List</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer:{
        height:80,
        paddingTop:38,
        backgroundColor:"teal"
    },
    title:{
        color:"white",
        fontSize:24,
        textAlign:'center'
    }
})

export default Header