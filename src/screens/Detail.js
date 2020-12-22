import React from 'react';
import { Text, View, ImageBackground, Image,Modal, TouchableOpacity } from 'react-native';
import Icon from "@expo/vector-icons/Entypo"
import LottieView from 'lottie-react-native';
import ModalEdit from '../screens/ModalEdit';
export default class Detail extends React.Component {
    state = {
        collectionSelected: true,
        modalVisible: false,
    }
    onTabPressed = () => {
        this.setState({ collectionSelected: !this.state.collectionSelected })
    }
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    };
    render() {
        const { modalVisible } = this.state;
        return (
            <View style={{
                backgroundColor: "#044244",
                height: "100%",
            }}>
                <View style={{
                    paddingHorizontal: 40,
                    backgroundColor: "#FFF",
                    height: "50%",
                    borderBottomLeftRadius: 50,
                    borderBottomRightRadius: 50
                }}>
                    <View style={{
                        flexDirection: "row",
                        width: "100%",
                        marginTop: 40
                    }}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}
                            style={{
                                width: "50%",
                            }}
                        >

                            <Icon
                                name="chevron-left"
                                size={24}
                                color="#044244"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={{
                            width: "50%",
                            alignItems: "flex-end"
                        }}
                            onPress={() => {                               
                                this.setModalVisible(true);
                            }}>
                        
                            <Icon
                                name="edit"
                                size={24}
                                color="#044244"
                            />
                        
                        </TouchableOpacity>
                        <View>
                            <Modal
                                animationType="fade"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                    Alert.alert("Modal is closed");
                                }}
                            >
                                <ModalEdit
                                    navigation={this.props.navigation}
                                    onPress={() => {
                                        this.setModalVisible(!modalVisible);
                                    }}
                                />
                            </Modal>
                        </View>
                    </View>
                    <LottieView
                            style={{
                                height:100,
                                alignSelf: 'center',
                            }}

                            source={require('../../assets/QR.json')}
                            autoPlay
                            loop={true}
                            // speed={0.5}
                            onAnimationFinish={() => {
                                console.log('Animation Finished!');


                            }}
                        />
                    {/* <Image
                        source={require('../images/p2.jpg')}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            alignSelf: "center",
                            marginVertical: 20
                        }}
                    /> */}
                    <Text style={{
                        fontSize: 22,
                        fontFamily: "Bold",
                        color: "#044244",
                        alignSelf: "center"
                    }}>
                        Hoa Sen University
                    </Text>
                    <Text style={{
                        fontFamily: "Medium",
                        fontSize: 16,
                        color: "#9ca1a2",
                        alignSelf: "center"
                    }}>
                        20/12/2020
                    </Text>


                    <View style={{
                        flexDirection: "row",
                        alignSelf: "center",
                        marginTop: 20
                    }}>
                        <View>
                            <Text style={{
                                fontFamily: "Bold",
                                fontSize: 15,
                                color: "#044244",
                                alignSelf: "center"
                            }}>Link</Text>
                            <Text style={{
                                fontFamily: "Medium",
                                fontSize: 16,
                                color: "#9ca1a2",
                                alignSelf: "center"
                            }}>
                                https://mlearning.hoasen.edu.vn/
                                </Text>
                        </View>

                        {/* <View style={{ marginHorizontal: 40 }}>
                            <Text style={{
                                fontFamily: "Bold",
                                fontSize: 15,
                                color: "#044244",
                                alignSelf: "center"
                            }}>2,107</Text>
                            <Text style={{
                                fontFamily: "Medium",
                                fontSize: 16,
                                color: "#9ca1a2",
                                alignSelf: "center"
                            }}>
                                followers
                                </Text>
                        </View>


                        <View>
                            <Text style={{
                                fontFamily: "Bold",
                                fontSize: 15,
                                color: "#044244",
                                alignSelf: "center"
                            }}>104</Text>
                            <Text style={{
                                fontFamily: "Medium",
                                fontSize: 16,
                                color: "#9ca1a2",
                                alignSelf: "center"
                            }}>
                                follows
                                </Text>
                        </View> */}
                    </View>
                </View>


                <View style={{
                    flexDirection: "row",
                    paddingHorizontal: 40,
                    paddingTop: 20
                }}>
                    <TouchableOpacity
                        onPress={this.onTabPressed}
                        style={{
                            borderBottomColor: this.state.collectionSelected ? "#FFF" : "#044244",
                            borderBottomWidth: 4,
                            paddingVertical: 6,
                        }}
                    >
                        <Text style={{
                            fontFamily: "Bold",
                            color: this.state.collectionSelected ? "#FFF" : "#9ca1a2"
                        }}>COLLECTIONS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.onTabPressed}
                        style={{
                            borderBottomColor: this.state.collectionSelected ? "#044244" : "#FFF",
                            borderBottomWidth: 4,
                            paddingVertical: 6,
                            marginLeft: 30
                        }}
                    >
                        <Text style={{
                            fontFamily: "Bold",
                            color: this.state.collectionSelected ? "#9ca1a2" : "#FFF"
                        }}>FEATURED</Text>
                    </TouchableOpacity>
                </View>


                <View style={{ flexDirection: "row" }}>
                    <View style={{
                        backgroundColor: "#728c8e",
                        height: 260,
                        width: 280,
                        marginHorizontal: 40,
                        borderRadius: 30,
                        marginTop: 30
                    }}>
                        <ImageBackground
                            source={require('../images/hs.jpg')}
                            style={{
                                width: 280,
                                height: 180
                            }}
                            imageStyle={{
                                borderRadius: 30
                            }}
                        >
                            <View style={{
                                width: "100%",
                                alignItems: "flex-end"
                            }}>
                                <TouchableOpacity style={{
                                    width: 40,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginTop: 25,
                                    borderRadius: 10,
                                    padding: 8,
                                    marginRight: 20,
                                    backgroundColor: "#6f8d90"
                                }}>
                                    <Icon
                                        name="edit"
                                        size={20}
                                        color="#FFF"
                                    />
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>

                        <View style={{
                            paddingVertical: 20,
                            paddingHorizontal: 30
                        }}>
                            <Text style={{
                                fontFamily: "Bold",
                                color: "#FFF",
                                fontSize: 15
                            }}>Hoa Sen University</Text>
                            <Text style={{
                                fontFamily: "Medium",
                                color: "#dedede",
                                fontSize: 12
                            }}>
                                20/12/2020
                            </Text>
                        </View>
                    </View>


                    <View style={{
                        height: 180,
                        backgroundColor: "#FFF",
                        width: 20,
                        marginLeft: -20,
                        marginTop: 70,
                        borderTopLeftRadius: 20,
                        borderBottomLeftRadius: 20
                    }}>

                    </View>
                </View>
            </View>
        )
    }
}