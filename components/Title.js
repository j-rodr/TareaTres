import { Text } from 'react-native';

export default function Title({ text }) {
	return (
		<Text
			style={{
				fontSize: 22,
				fontWeight: 'bold',
				textAlign: 'center',
				marginBottom: 20,
			}}
		>
			{text}
		</Text>
	);
}
