import { StyleSheet, Dimensions } from "react-native"
import theme from "../../constants/theme"

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    containerGeneric: {
        flex: 1,
    },
    containerKeyboard: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        padding: theme.padding.medium,
    },

    title: {
        color: theme.colors.secondaryTextColor,
        fontSize: 20,
    },
    subtitle: {
        fontSize: 16,
        color: theme.colors.secondaryTextColor,
    },
    inputContainer: {
        width: "80%",
        maxWidth: "70%",
        minWidth: width * 0.7,
        alignItems: "center",
        paddingVertical: theme.padding.medium,
        marginVertical: theme.margin.large,
    },
    buttonContainer: {
        flexDirection: "row",
        width: width / 1.9,
        justifyContent: "space-between",
        paddingVertical: width > 600 ? theme.padding.medium : theme.padding.small,
        marginVertical: theme.margin.large,
    },
    input: {
        width: 40,
        textAlign: "center",
    },
})
