import { StyleSheet } from "react-native"
import theme from "../../constants/theme"

export const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: theme.colors.primary,
        borderRadius: 10,
        marginVertical: theme.margin.large,
        paddingVertical: theme.padding.medium,
        justifyContent: "center",
        alignItems: "center",
    },

    number: {
        color: theme.colors.primary,
        paddingHorizontal: theme.padding.medium,
        fontSize: 18,
    },
})
