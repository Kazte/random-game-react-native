import { useState, useEffect } from "react"
import { View, Text, Button, Image, Dimensions, ScrollView } from "react-native"
import { Card } from "../../components"
import { styles } from "./styles"
import theme from "../../constants/theme"

const GameOverScreen = ({ rounds, choise, onRestart }) => {
    const [isPortrait, setIsPortrait] = useState(true)

    const onPortrait = () => {
        const dim = Dimensions.get("screen")
        return dim.height >= dim.width
    }

    const statePortrait = () => {
        setIsPortrait(onPortrait)
    }

    useEffect(() => {
        Dimensions.addEventListener("change", statePortrait())
        return () => {
            Dimensions.removeEventListener("change", statePortrait())
        }
    })

    return (
        <ScrollView style={styles.scrollLayout}>
            <View style={isPortrait ? styles.container : styles.containerLandscape}>
                <Image style={isPortrait ? styles.image : styles.imageLandscape} source={require("../../assets/success.png")} />
                <Card style={styles.card}>
                    <Text>Attemps: {rounds}</Text>
                    <Text>Your choise: {choise}</Text>
                    <Button title="NEW GAME" onPress={onRestart} color={theme.colors.secondary} />
                </Card>
            </View>
        </ScrollView>
    )
}

export default GameOverScreen
