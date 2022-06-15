import { styles } from "./styles"

import { Text } from "react-native"

const CustomText = ({ children, style, props }) => {
    return (
        <Text style={{ ...styles.text, ...style }} {...props}>
            {children}
        </Text>
    )
}

export default CustomText
