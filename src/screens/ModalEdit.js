import React from 'react'
import {
    View, Text, TouchableHighlight, StyleSheet,
    Dimensions, TouchableOpacity, ScrollView,
    TextInput,
} from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

class ModalEdit extends React.Component {
    
    render() {
        const { navigate } = this.props.navigation; 
        
        return (
            <View style={styles.container}>

                <View>
                    <Text style={{
                        textAlign: 'left',
                        color: '#fff',
                        fontWeight: 'bold', fontSize: 35,
                        paddingBottom:height * 0.0439,//30h
                    }}>
                        Edit QR
                        </Text>
                </View>
                <ScrollView>
                    <Text style={{
                        color: '#fff',
                        fontWeight: 'bold',
                        textAlign: 'left',
                        paddingBottom:10,
                        fontSize: width * 0.0486//20w
                    }}>
                        <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      
      
    />
                        
                        
                    </Text>
                   
                </ScrollView>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    paddingTop:10,
                }}>
                    <View>
                        <TouchableHighlight
                            onPress={this.props.onPress}
                            underlayColor="#fff"
                            style={{
                                width: width*0.4866,//200w
                                elevation: 2,
                                backgroundColor: "#fff",
                                paddingVertical: 13,
                                borderRadius: 25,

                            }}>
                            <Text style={{
                                fontWeight: "bold",
                                color: "#044244",
                                textAlign: "center",
                                fontSize: 20
                            }}>
                                Cancel
                            </Text>
                        </TouchableHighlight>
                    </View>
                    

                </View>

            </View>

        )
    }
}
export default ModalEdit;

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        marginTop: height * 0.1171,//80h
        backgroundColor: "#728c8e",
        height: height * 0.73206,//500h
        elevation: 30,
        width: width * 0.876,//360w
        borderRadius: 20,
        flexDirection: "column",
        justifyContent: 'space-between',
        padding: 25,
    },

})