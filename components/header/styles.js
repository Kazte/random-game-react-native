import { StyleSheet } from "react-native"
import theme from "../../constants/theme"

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 96,
        backgroundColor: theme.colors.primary,
        alignItems: "center",
        justifyContent: "center",
    },

    title: {
        color: "#f1f1f1",
        fontSize: 32,
        fontFamily: "Germania",
    },
})
