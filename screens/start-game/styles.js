import { StyleSheet } from "react-native"
import theme from "../../constants/theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
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
        alignItems: "center",
        paddingVertical: theme.padding.medium,
        marginVertical: theme.margin.large,
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        paddingVertical: theme.padding.medium,
        marginVertical: theme.margin.large,
    },
    input: {
        width: 40,
        textAlign: "center",
    },
})
