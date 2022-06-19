import { View, Button, Alert, Dimensions } from "react-native"
import { styles } from "./styles"
import { Card, CustomText, NumberContainer } from "../../components"
import theme from "../../constants/theme"
import { useState, useRef, useEffect } from "react"

const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    const randomNumber = Math.floor(Math.random() * (max - min) + min)

    if (randomNumber === exclude) {
        return generateRandomNumber(min, max, exclude)
    } else {
        return randomNumber
    }
}

const GameScreen = ({ userOption, onBack, onGameOver }) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 99, userOption))

    const [rounds, setRounds] = useState(0)

    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    const handlerNextGuess = (direction) => {
        if ((direction === "lower" && currentGuess < userOption) || (direction === "higher" && currentGuess > userOption)) {
            Alert.alert("Don't lie!", "You know this is wrong...", [{ text: "Sorry!", style: "cancel" }])
            return
        }

        if (direction === "lower") {
            currentHigh.current = currentGuess
        } else {
            currentLow.current = currentGuess + 1
        }

        const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        setRounds((current) => current + 1)
    }

    useEffect(() => {
        if (currentGuess === userOption) {
            onGameOver(rounds)
        }

        if (currentGuess < userOption) {
            currentLow.current = currentGuess + 1
        }

        if (currentGuess > userOption) {
            currentHigh.current = currentGuess - 1
        }
    }, [currentGuess, userOption, onGameOver])

    return (
        <View style={styles.container}>
            <CustomText style={styles.title}>Opponent Assumption</CustomText>
            <NumberContainer>{currentGuess}</NumberContainer>

            <Card style={styles.buttonContainer}>
                <Button title="Lesser" onPress={() => handlerNextGuess("lower")} color={theme.colors.secondary} />
                <Button title="Back" onPress={onBack} color={theme.colors.secondary} />
                <Button title="Greater" onPress={() => handlerNextGuess("higher")} color={theme.colors.secondary} />
            </Card>
        </View>
    )
}

export default GameScreen
