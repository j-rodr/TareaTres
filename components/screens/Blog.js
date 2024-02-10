import { View, StatusBar } from 'react-native';
import Title from '../Title';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function BlogScreen() {
	return (
		<View
			style={{
				paddingTop: StatusBar.currentHeight + 30,
				display: 'flex',
				alignItems: 'center',
				paddingHorizontal: 40,
			}}
		>
			<Title text='¡Mi experiencia con React Native! ⚛️' />

			<YoutubePlayer
				height={600}
				width={370}
				play={true}
				videoId={'IWydRDNxNQw'}
			/>
		</View>
	);
}
