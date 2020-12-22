import React from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import LottieView from 'lottie-react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/Entypo';
import Posts from '../screens/Posts';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;



export default class Home extends React.Component {
    state = {
        popularSelected: true
    }
    onTabPressed = () => {
        this.setState({ popularSelected: !this.state.popularSelected })
    }
    render() {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    height: "100%",
                    backgroundColor: "#044244"
                }}
            >
                <View style={{
                    height: 260,
                    width: "100%",
                    paddingHorizontal: 35
                }}>
                    <View style={{
                        flexDirection: "row",
                        width: "100%",
                        paddingTop: 40,
                        alignItems: "center"
                    }}>
                        <View style={{
                            width: "50%"
                        }}>
                            <Image source={require('../images/Untitled.png')}
                                style={{ width: 20, height: 20 }} />
                        </View>
                        <View style={{
                            width: "50%",
                            alignItems: "flex-end",
                        }}>
                            <Icon name="dots-two-vertical"
                                size={22}
                                color="#d2d2d2"
                                style={{
                                    marginRight: -7,
                                    marginTop: 7
                                }} />
                        </View>
                    </View>
                    <TouchableOpacity style={{
                        flex: 1,
                        width: 300,
                        alignItems: 'center',
                        alignSelf: 'center',
                    }}>
                        <LottieView
                            style={{

                                alignSelf: 'center',
                            }}

                            source={require('../../assets/QR1.json')}
                            autoPlay
                            loop={true}
                            // speed={0.5}
                            onAnimationFinish={() => {
                                console.log('Animation Finished!');


                            }}
                        />
                        <View style={{
                            backgroundColor: '#3c636c',
                            width: 130,
                            marginVertical: 30,
                            borderColor: '#fff',
                            borderBottomEndRadius: 20,
                            
                            borderWidth: 3,
                            flex: 1,
                            borderTopStartRadius: 20,
                            alignSelf: 'center',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                fontSize: 45,
                                fontWeight: 'bold',
                                color: '#fff'
                            }}>
                                QR
                            </Text>
                        </View>
                    </TouchableOpacity>

                    {/* <Text style={{
                    fontFamily:"Bold",
                    fontSize:35,
                    color:"#FFF",
                    paddingTop:20,
                }}>Workout</Text>
                <Text style={{
                    fontFamily:"Bold",
                    fontSize:35,
                    color:"#FFF",
                    paddingBottom:10,
                }}>Body.</Text> */}


                    {/* <View style={{
                        flexDirection: "row",
                        borderColor: "#9ca1a2",
                        borderRadius: 20,
                        borderWidth: 0.2,
                        paddingVertical: 5,

                        alignItems: "center"
                    }}>
                        <TextInput
                            placeholder="search inispiration ..."
                            style={{
                                paddingHorizontal: 20,
                                fontFamily: "Medium",
                                fontSize: 11,
                                width: "90%",
                                color: "#9ca1a2"
                            }}
                        />
                        <Icon name="magnifying-glass"
                            size={15}
                            color="#9ca1a2" />
                    </View> */}

                </View>

                <View style={{
                    backgroundColor: "#FFF",
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    height: '100%',
                    paddingHorizontal: 35
                }}>
                    <View style={{
                        flexDirection: "row",
                        paddingTop: 20
                    }}>
                        <TouchableOpacity
                            onPress={this.onTabPressed}
                            style={{
                                borderBottomColor: this.state.popularSelected ? "#044244" : "#FFF",
                                borderBottomWidth: 4,
                                paddingVertical: 6
                            }}
                        >
                            <Text style={{
                                fontFamily: "Bold",
                                color: this.state.popularSelected ? "#044244" : "#9ca1a2"
                            }}>MOST POPULAR</Text>
                        </TouchableOpacity>


                        <TouchableOpacity
                            onPress={this.onTabPressed}
                            style={{
                                borderBottomColor: this.state.popularSelected ? "#FFF" : "#044244",
                                borderBottomWidth: 4,
                                paddingVertical: 6,
                                marginLeft: 30
                            }}
                        >
                            <Text style={{
                                fontFamily: "Bold",
                                color: this.state.popularSelected ? "#9ca1a2" : "#044244"
                            }}>RECENT</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        flexDirection: "row"
                    }}>

                        <Posts
                            style={{ backgroundColor: "#ffffff" }}
                            onPress={() => this.props.navigation.navigate('Detail')}
                            name="Hoa Sen University"
                            profile={require('../images/img4.png')}
                            photo={require('../images/hs.jpg')}
                            date="20/12/2020"
                        />

                        <View style={{
                            height: 160,
                            backgroundColor: "#3c636c",
                            width: 20,
                            marginLeft: 20,
                            marginTop: 120,
                            borderTopLeftRadius: 20,
                            borderBottomLeftRadius: 20
                        }}></View>

                    </View>

                    <View style={{
                        flexDirection: "row"
                    }}>

                        <View style={{
                            height: 160,
                            backgroundColor: "#3c636c",
                            width: 20,
                            marginLeft: -40,
                            marginRight: 20,
                            marginTop: 120,
                            borderTopRightRadius: 20,
                            borderBottomRightRadius: 20
                        }}>

                        </View>

                        <Posts
                            onPress={() => this.props.navigation.navigate('Detail')}
                            name="Yoga Training"
                            profile={require('../images/img3.png')}
                            photo={require('../images/yoga1.gif')}
                        />

                    </View>

                    <View style={{
                        flexDirection: "row"
                    }}>
                        <Posts
                            onPress={() => this.props.navigation.navigate('Detail')}
                            name="Cardio Training"
                            profile={require('../images/img2.png')}
                            photo={require('../images/cardio1.gif')}
                        />

                        <View style={{
                            height: 160,
                            backgroundColor: "#3c636c",
                            width: 20,
                            marginLeft: 20,
                            marginTop: 120,
                            borderTopLeftRadius: 20,
                            borderBottomLeftRadius: 20
                        }}>

                        </View>

                    </View>
                </View>

            </ScrollView>
        )
    }
}