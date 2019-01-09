import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f3f3f3'
    },
    result: {
        backgroundColor: '#f3f3f3',
        flex: 2,
        paddingRight: 15
    },
    resultText: {
        fontSize: 32,
    },
    buttons: {
        flex: 7,
        flexDirection: 'row',
    },
    numbers: {
        flex: 3,
        backgroundColor: '#444'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    btn: {
        fontSize: 40,
        color: '#fff',
        padding: 20,
    },
    disabledBtn: {
        fontSize: 42,
        color: '#888'
    },
    calculationText: {
        fontSize: 26,
        color: '#fff',
    },
    colorSettingContainer: {
        flexDirection: 'row',
    },
    extraOpsBtn: {
        fontSize: 20,
        color: '#fff',
        padding: 14
    },
    disabledExtraOpsBtn: {
        fontSize: 20,
        color: '#888'
    },
    extraOpsView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#333',
        padding: 8,
        borderColor: '#666',
        borderTopWidth: 1
    },
    engineerCal: {
        margin: 10,
        fontSize: 25,
        textAlign: 'center',
        color: '#fff'
    }
});

export default styles