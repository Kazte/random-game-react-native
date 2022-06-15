import { StyleSheet } from "react-native"
import theme from "../../constants/theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: theme.padding.small,
        alignItems: "center",
    },
    title: {
        color: theme.colors.secondaryTextColor,
        fontSize: 25,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: theme.margin.large,
        width: 300,
        maxWidth: "80%",
        padding: theme.padding.small,
    },
})
