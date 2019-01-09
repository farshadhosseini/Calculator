import React from 'react';
import styles from "../../assets/Style/Style";
import {Text, View, TouchableOpacity} from 'react-native';

const NumbersKeypad = (props) => {
    let rows = [];
    for(let i = 0 ; i < 4 ; i++) {
        let row = [];
        for(let j = 0; j < 3; j++){
            row.push(<TouchableOpacity key={props.keys[i][j]} disabled={props.powStatus} onPress={() => props.buttonPresses(props.keys[i][j])}><Text style={props.powStatus ? styles.disabledBtn : styles.btn}>{props.keys[i][j]}</Text></TouchableOpacity>)
        }
        rows.push(<View key={props.keys[i]} style={styles.row}>{row}</View>)
    }
    return (
        <View style={styles.numbers}>
            {rows}
        </View>
    )
};

export default NumbersKeypad

