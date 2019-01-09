import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from "../../assets/Style/Style";

const math = (props) => {
    let mathOperators = [];
    for(let i = 0; i <= 3; i++ ) {
        mathOperators.push(<View key={props.keys[i]} style={styles.row}><TouchableOpacity disabled={props.powStatus} onPress={() => props.operation(props.keys[i])}><Text style={props.powStatus ? styles.disabledBtn : styles.btn}>{props.keys[i]}</Text></TouchableOpacity></View>)
    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#222',
            borderRightWidth: 5,
            borderColor: props.borderColor
        }}>
            {mathOperators}
        </View>
    )
};
export default math