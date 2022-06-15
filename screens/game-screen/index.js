import { View, Button } from "react-native"
import { styles } from "./styles"
import { Card, CustomText, NumberContainer } from "../../components"
import theme from "../../constants/theme"
import { useState } from "react"

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

const GameScreen = ({ userOption, onBack }) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 99, userOption))

    return (
        <View style={styles.container}>
            <CustomText style={styles.title}>Opponent Assumption</CustomText>
            <NumberContainer>{currentGuess}</NumberContainer>

            <Card style={styles.buttonContainer}>
                <Button title="Lesser" onPress={() => null} color={theme.colors.secondary} />
                <Button title="Back" onPress={() => null} color={theme.colors.secondary} onPress={onBack} />
                <Button title="Greater" onPress={() => null} color={theme.colors.secondary} />
            </Card>
        </View>
    )
}

export default GameScreen
