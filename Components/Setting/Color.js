import React from 'react';
import styles from "../../assets/Style/Style";
import {settings} from "../../assets/Constant/AppSettings";
import {Text, View, TouchableOpacity} from 'react-native';

const ColorSetting = (props) => {
    return (
        <View style={styles.colorSettingContainer}>
            <TouchableOpacity style={{backgroundColor: settings.color.red, flex: 3}} onPress={() => props.changeSetting('color', settings.color.red)}><Text>{null}</Text></TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: settings.color.blue, flex: 3}} onPress={() => props.changeSetting('color', settings.color.blue)}><Text>{null}</Text></TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: settings.color.gold, flex: 3}} onPress={() => props.changeSetting('color', settings.color.gold)}><Text>{null}</Text></TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: settings.color.grey, flex: 3}} onPress={() => props.changeSetting('color', settings.color.grey)}><Text>{null}</Text></TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: settings.color.green, flex: 3}} onPress={() => props.changeSetting('color', settings.color.green)}><Text>{null}</Text></TouchableOpacity>
        </View>
    )
};

export default ColorSetting

