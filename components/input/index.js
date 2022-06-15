import { View, Text, TextInput } from "react-native"
import { styles } from "./styles"

const Input = ({ style, ...props }) => {
    return <TextInput style={{ ...styles.input, ...style }} {...props} />
}

export default Input
