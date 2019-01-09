import React, {Component} from 'react';
import {View, AsyncStorage, DrawerLayoutAndroid, ToastAndroid} from 'react-native';
import styles from './assets/Style/Style'
import keys from './assets/Constant/Keys'
import MathOperators from './Components/Operators/Math'
import ScienceOperators from './Components/Operators/Science'
import ProgrammingOperators from './Components/Operators/Programming'
import ExtraOperators from './Components/Operators/Extra'
import ColorSetting from './Components/Setting/Color'
import NumbersKeypad from './Components/KeyPad/Numbers'
import PowNumbersKeypad from './Components/KeyPad/PowNumbers'
import ResultWrapper from './Components/Wrappers/Result'
import CalculationWrapper from './Components/Wrappers/Calculation'
import {settings, messages} from "./assets/Constant/AppSettings";

type Props = {};
export default class App extends Component<Props> {
    constructor() {
        super();
        this.state = {
            resultText: "",
            calculationText: "",
            powStatus: false,
            settings: {
                resultBackground: settings.color.green
            }
        };
        this.numbers = keys.numbers;
        this.mathOperators = keys.mathOperators;
        this.extraOperators = keys.extraOperators;
        this.scienceOperators = keys.scienceOperators;
        this.programmingOperators = keys.programmingOperators;
    }

    componentDidMount = async () => {
        const value = await AsyncStorage.getItem('RESULT_BACKGROUND');
        if (value != null) {
            this.setState({
                settings: {resultBackground: value}
            })
        }
    };

    operatorsCalculation(value) {
        if(!isFinite(value)){
            ToastAndroid.show(messages.maxNumber, ToastAndroid.SHORT);
        } else {
            this.setState({
                calculationText: value,
                resultText: String(value)
            });
        }
    }

    calculation() {
        let calculated = eval(this.state.resultText);
        let charCheck = new RegExp("[a-z]");
        if(!isFinite(calculated)){
            ToastAndroid.show(messages.maxNumber, ToastAndroid.SHORT);
        } else if (charCheck.test(this.state.resultText)) {
            ToastAndroid.show(messages.invalidNumber, ToastAndroid.SHORT);
        } else {
            this.setState({
                calculationText: calculated,
            });
        }
    }

    validEquation() {
        switch (this.state.resultText.slice(-1)) {
            case '+':
            case '-':
            case '/':
            case '*':
            case '.':
            case 'e':
                return false
        }
        return true
    }

    buttonPresses(num) {
        if((this.state.resultText.slice(-1) === '.' && num === '.')){
            return false
        }
        const splitResult = this.state.resultText.split(new RegExp('[-+*/]'));
        if(num === '.' && splitResult[splitResult.length - 1].indexOf('.') >= 0) {
            return false
        }
        if (num === '=') {
            return this.validEquation() && this.calculation();
        } else {
            this.setState({
                resultText: this.state.resultText + num
            })
        }
    }

    operation(ops, powValue = 2) {
        const lastChar = this.state.resultText.split('').pop();
        if ((this.mathOperators.indexOf(lastChar) >= 0 || this.state.resultText === '') || lastChar === '.') {
            if (ops === 'C' || ops === 'CLR') {
                const text = this.state.resultText.split('');
                text.pop();
                this.setState({
                    resultText: text.join('')
                });
            } else {
                return
            }
        }
        if (this.state.powStatus) {
            let pow = Math.pow(eval(this.state.resultText), powValue);
            this.operatorsCalculation(pow);
            this.setState({
                powStatus: false
            });
        }
        switch (ops) {
            case 'C':
                const text = this.state.resultText.split('');
                text.pop();
                this.setState({
                    resultText: text.join('')
                });
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                if (this.state.resultText === '') {
                    return
                } else {
                    this.setState({
                        resultText: this.state.resultText + ops
                    })
                }
                break;
            case 'CLR':
                this.setState({
                    resultText: "",
                    calculationText: ""
                });
                break;
            case 'sqrt':
                let sqrt = Math.sqrt(eval(this.state.resultText));
                this.operatorsCalculation(sqrt);
                break;
            case 'X2':
                let pow = Math.pow(eval(this.state.resultText), powValue);
                this.operatorsCalculation(pow);
                break;
            case 'Xy':
                this.setState({
                    resultText: this.state.resultText,
                    powStatus: true
                });
                break;
            case 'Sin':
                let sin = parseInt(Math.sin(eval(this.state.resultText) * (Math.PI / 180)).toFixed(1));
                this.operatorsCalculation(sin);
                break;
            case 'Cos':
                let cos = parseInt(Math.cos(eval(this.state.resultText) * (Math.PI / 180)).toFixed(1));
                this.operatorsCalculation(cos);
                break;
            case 'Tan':
                let tan = parseInt(Math.tan(eval(this.state.resultText) * (Math.PI / 180)).toFixed(1));
                this.operatorsCalculation(tan);
                break;
            case 'Bin':
                let bin = eval(this.state.resultText).toString(2);
                this.operatorsCalculation(bin);
                break;
            case 'Dec':
                let binaryCheck = new RegExp("[2-9]");
                if(binaryCheck.test(eval(this.state.resultText))){
                    return
                }
                let dec = parseInt(eval(this.state.resultText), 2);
                this.operatorsCalculation(dec);
                break;
            case 'Factorial':
            function Fact(num) {
                if (num === 0) {
                    return 1;
                } else {
                    return num * Fact(num - 1);
                }
            }
                let factNum = Math.floor(eval(this.state.resultText));
                if(factNum > 150) {
                    ToastAndroid.show(messages.FactorialExceed, ToastAndroid.SHORT);
                    return
                }
                let factorial = Fact(factNum);
                this.operatorsCalculation(factorial);
                break;
            case 'Fibonacci':
            function Fibo(num) {
                if (num <= 1) {
                    return 1;
                } else {
                    return Fibo(num - 1) + Fibo(num - 2);
                }
            }
                let fiboNum = Math.floor(eval(this.state.resultText));
                if(fiboNum > 30) {
                    ToastAndroid.show(messages.FibonacciExceed, ToastAndroid.SHORT);
                    return
                }
                let Fibonacci = Fibo(fiboNum);
                this.operatorsCalculation(Fibonacci);
                break;
        }
    }

    changeSetting = async (type, value) => {
        switch (type) {
            case 'color':
                this.setState({
                    settings: {resultBackground: value}
                });
                await AsyncStorage.setItem('RESULT_BACKGROUND', value);
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 3}}>
                    <ResultWrapper resultText={this.state.resultText}/>
                    <ColorSetting changeSetting={(type, value) => this.changeSetting(type, value)}/>
                    <CalculationWrapper calculationText={this.state.calculationText}
                                        backgroundColor={this.state.settings.resultBackground}/>
                    {this.state.powStatus
                        ? <PowNumbersKeypad operation={(key, index) => this.operation(key, index)}/>
                        : <ExtraOperators keys={this.extraOperators} operation={(key) => this.operation(key)}/>
                    }
                    <ScienceOperators keys={this.scienceOperators} powStatus={this.state.powStatus}
                                      operation={(key) => this.operation(key)}/>
                </View>
                <View style={{flex: 4}}>
                    <DrawerLayoutAndroid
                        drawerBackgroundColor={this.state.settings.resultBackground}
                        drawerWidth={200}
                        drawerPosition={DrawerLayoutAndroid.positions.Right}
                        renderNavigationView={() =>
                            <ProgrammingOperators keys={this.programmingOperators}
                                                  operation={(key) => this.operation(key)}/>
                        }>
                        <View style={{flex: 3, alignItems: 'center'}}>
                            <View style={styles.buttons}>
                                <NumbersKeypad keys={this.numbers} powStatus={this.state.powStatus}
                                               buttonPresses={(key) => this.buttonPresses(key)}/>
                                <MathOperators keys={this.mathOperators} powStatus={this.state.powStatus}
                                               operation={(key) => this.operation(key)}
                                               borderColor={this.state.settings.resultBackground}/>
                            </View>
                        </View>
                    </DrawerLayoutAndroid>
                </View>
            </View>
        );
    }
}