import { styles } from "./styles"

import { View } from "react-native"

const Card = ({ style, children }) => {
    return <View style={{ ...styles.container, ...style }}>{children}</View>
}

export default Card
