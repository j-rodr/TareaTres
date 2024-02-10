import { Pressable, Text } from 'react-native';
import { COLORS } from '../utils/constants';

export default function Button({ onPress, text }) {
	return (
		<Pressable
			style={{
				backgroundColor: COLORS.base,
				width: 155,
				paddingHorizontal: 20,
				paddingVertical: 10,
				borderRadius: 8,
			}}
			onPress={onPress}
		>
			<Text
				style={{
					textAlign: 'center',
					color: COLORS.white,
					fontSize: 18,
					fontWeight: 'bold',
				}}
			>
				{text}
			</Text>
		</Pressable>
	);
}
