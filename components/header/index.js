import { View } from "react-native"
import CustomText from "../customText"
import { styles } from "./styles"

const Header = ({ title }) => {
    return (
        <View style={styles.container}>
            <CustomText style={styles.title}>{title}</CustomText>
        </View>
    )
}

export default Header
