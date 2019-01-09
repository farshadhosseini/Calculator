import React from 'react'
import {View, Text, ScrollView} from 'react-native';
import styles from "../../assets/Style/Style";

const CalculationWrapper = (props) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            paddingRight: 15,
            backgroundColor: props.backgroundColor,
        }}>
            <ScrollView
                contentContainerStyle = {{paddingHorizontal: 10, alignItems : 'center'}}
                horizontal= {true}
                showsHorizontalScrollIndicator={false}>
                <Text style={styles.calculationText}>{props.calculationText}</Text>
            </ScrollView>
        </View>
    )
};

export default CalculationWrapper;