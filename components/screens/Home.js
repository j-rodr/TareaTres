import { View, Text, Image } from 'react-native';

export default function HomeScreen() {
	return (
		<View
			style={{
				paddingTop: 80,
				display: 'flex',
				alignItems: 'center',
				gap: 20,
			}}
		>
			<Image
				style={{
					width: 100,
					height: 100,
					borderRadius: 1000,
				}}
				source={require('../../assets/images/profile.jpg')}
			/>
			<View>
				<Text
					style={{
						fontSize: 19,
						fontWeight: '600',
						textAlign: 'center',
						marginBottom: 8,
					}}
				>
					José Gabriel Rodríguez Bidó
				</Text>
				<Text
					style={{
						fontSize: 18,
						textAlign: 'center',
					}}
				>
					20220601@itla.edu.do
				</Text>
			</View>
		</View>
	);
}
