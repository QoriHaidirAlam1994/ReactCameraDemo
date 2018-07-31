import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {
    StackNavigator
} from 'react-navigation';
import { RNCamera } from 'react-native-camera';
import { connect } from 'react-redux';
import { addToCamera } from '../actions';

class CreateCamera extends Component {

    static navigationOptions = {
        title: 'Welcome',
    };

    constructor() {
        super();
    }

    handleCreate(value) {
        this.props.dispatch(addToCamera)
            .then(res => {
                alert('OK Update');
            })
            .catch(err => {
                alert('OK Gagal');
            })
    }

    takePicture = async function () {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options)
            console.log(data.uri);
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                />
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center', }}>
                    <TouchableOpacity
                        onPress={this.handleCreate.bind(this)}
                        style={styles.capture}
                    >
                        <Text style={{ fontSize: 14 }}> SNAP </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    }
});

const mapStateToProps = (state) => ({
    camera: state.cameraReducer
})

export default connect(mapStateToProps)(CreateCamera)