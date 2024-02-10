import { View } from 'react-native';
import { COLORS } from '../utils/constants';

export default function Divider() {
	return <View style={{ backgroundColor: COLORS.slate, height: 1 }}></View>;
}
