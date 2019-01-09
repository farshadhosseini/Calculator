import React from 'react'
import {View, Text, ScrollView} from 'react-native';
import styles from "../../assets/Style/Style";

const result = (props) => {
    return (
        <View style={styles.result}>
            <ScrollView
                contentContainerStyle = {{paddingHorizontal: 10, alignItems : 'center'}}
                horizontal= {true}
                showsHorizontalScrollIndicator={false}>
                <Text style={styles.resultText}>{props.resultText}</Text>
                {props.powStatus ? <Text style={{fontSize: 20}}>x</Text> : null}
            </ScrollView>
        </View>
    )
};

export default result;