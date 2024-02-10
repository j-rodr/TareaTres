import { COLORS } from '../utils/constants';
import { TextInput } from 'react-native';

export default function Input({ placeholder, onChangeText }) {
	return (
		<TextInput
			style={{
				flex: 1,
				height: 45,
				borderWidth: 1,
				borderColor: COLORS.slate,
				paddingHorizontal: 15,
				paddingVertical: 10,
				borderRadius: 8,
				fontSize: 18,
			}}
			placeholder={placeholder}
			onChangeText={onChangeText}
		/>
	);
}
