import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from "../../assets/Style/Style";

const extra = (props) => {
    let extraOperators = [];
    for(let i = 0; i <= 4; i++ ) {
        extraOperators.push(<View key={props.keys[i]} style={styles.row}><TouchableOpacity disabled={props.powStatus} onPress={() => props.operation(props.keys[i])}><Text style={props.powStatus ? styles.disabledExtraOpsBtn : styles.extraOpsBtn}>{props.keys[i]}</Text></TouchableOpacity></View>)
    }
    return (
        <View style={styles.extraOpsView}>
            {extraOperators}
        </View>
    )
};
export default extra