import { View, Button, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, ScrollView } from "react-native"
import { Card, CustomText, Input, NumberContainer } from "../../components"
import { styles } from "./styles"
import theme from "../../constants/theme"
import { useState } from "react"

const StartGame = ({ onStartGame }) => {
    const [enteredValue, setEnteredValue] = useState("")
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState("")

    const onHandlerReset = () => {
        setEnteredValue("")
        setConfirmed(false)
    }

    const onHandlerConfirm = () => {
        const chosenNumber = parseInt(enteredValue)

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) return

        setConfirmed(true)
        setSelectedNumber(chosenNumber)
        setEnteredValue("")
    }

    const onHandlerChangeText = (text) => {
        setEnteredValue(text.replace(/[^0-9]/g, ""))
    }

    const confirmedOutput = confirmed ? (
        <Card style={styles.inputContainer}>
            <CustomText style={styles.title}> Your Number is</CustomText>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button onPress={() => onStartGame(selectedNumber)} title="Start Game" color={theme.colors.secondary} />
        </Card>
    ) : null

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.containerKeyboard}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <ScrollView style={styles.containerGeneric}>
                    <View style={styles.container}>
                        <CustomText style={styles.title}>Start Game</CustomText>
                        <Card style={styles.inputContainer}>
                            <CustomText style={styles.subtitle}>Select Number</CustomText>
                            <Input
                                placeholder="99"
                                keyboardType="numeric"
                                placeholderTextColor={theme.colors.placeholder}
                                maxLength={2}
                                blurOnSubmit
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={styles.input}
                                value={enteredValue}
                                onChangeText={(text) => onHandlerChangeText(text)}
                            />
                            <View style={styles.buttonContainer}>
                                <Button title="Clear" color={theme.colors.secondary} onPress={() => onHandlerReset()} />
                                <Button title="Confirm" color={theme.colors.secondary} onPress={() => onHandlerConfirm()} />
                            </View>
                        </Card>
                        {confirmedOutput}
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default StartGame
