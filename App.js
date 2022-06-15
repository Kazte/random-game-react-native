import { View, SafeAreaView, ActivityIndicator } from "react-native"
import Header from "./components/header"
import StartGame from "./screens/start-game"
import GameScreen from "./screens/game-screen"
import { useFonts } from "expo-font"
import { styles } from "./styles"
import theme from "./constants/theme"
import { useState } from "react"

export default function App() {
    const [userNumber, setUserNumber] = useState()

    const [loaded] = useFonts({
        germania: require("./assets/fonts/GermaniaOne-Regular.ttf"),
    })

    if (!loaded) {
        return <ActivityIndicator size="large" color={theme.colors.primary} />
    }

    const onStartGame = (selectedNumber) => {
        setUserNumber(selectedNumber)
    }

    const onBackToStartGame = () => {
        setUserNumber()
    }

    let content = <StartGame onStartGame={onStartGame} />

    if (userNumber) {
        content = <GameScreen userOption={userNumber} onBack={onBackToStartGame} />
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
