import React from 'react';
import styles from "../../assets/Style/Style";
import {Text, View, TouchableOpacity} from 'react-native';

const PowNumbersKeypad = (props) => {
    let powNumbers = [];
    for(let index = 1; index <= 9; index++ ) {
        powNumbers.push(<View key={index} style={styles.row}><TouchableOpacity onPress={() => props.operation(index, index)}><Text style={styles.extraOpsBtn}>{index}</Text></TouchableOpacity></View>)
    }
    return (
        <View style={styles.extraOpsView}>
            {powNumbers}
        </View>
    )
};

export default PowNumbersKeypad

