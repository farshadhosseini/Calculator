import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from "../../assets/Style/Style";

const programming = (props) => {
    let programmingOperators = [];
    for(let i = 0; i <= 1; i++ ) {
        programmingOperators.push(<View key={props.keys[i]} style={styles.row}><TouchableOpacity disabled={props.powStatus} onPress={() => props.operation(props.keys[i])}><Text style={styles.extraOpsBtn}>{props.keys[i]}</Text></TouchableOpacity></View>)
    }
    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            {programmingOperators}
        </View>
    )
};
export default programming