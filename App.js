import { View, SafeAreaView, ActivityIndicator } from "react-native"
import Header from "./components/header"
import StartGame from "./screens/start-game"
import GameScreen from "./screens/game-screen"
import { useFonts } from "expo-font"
import { styles } from "./styles"
import theme from "./constants/theme"
import { useState } from "react"
import GameOverScreen from "./screens/game-over"

export default function App() {
    const [userNumber, setUserNumber] = useState()
    const [guessRounds, setGuessRounds] = useState(0)

    const [loaded] = useFonts({
        Germania: require("./assets/fonts/GermaniaOne-Regular.ttf"),
    })

    if (!loaded) {
        return <ActivityIndicator size="large" color={theme.colors.primary} />
    }

    const handleGameOver = (rounds) => {
        setGuessRounds(rounds)
    }

    const handleRestartGame = () => {
        setGuessRounds(0)
        setUserNumber(null)
    }

    const onStartGame = (selectedNumber) => {
        setUserNumber(selectedNumber)
        setGuessRounds(0)
    }

    const onBackToStartGame = () => {
        setUserNumber(null)
        setGuessRounds(0)
    }

    let content = <StartGame onStartGame={onStartGame} />

    if (userNumber && guessRounds <= 0) {
        content = <GameScreen userOption={userNumber} onBack={onBackToStartGame} onGameOver={handleGameOver} />
    } else if (guessRounds > 0) {
        content = <GameOverScreen rounds={guessRounds} onRestart={handleRestartGame} choise={userNumber} />
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Header title="Guess the Number" />
                {content}
            </View>
        </SafeAreaView>
    )
}
