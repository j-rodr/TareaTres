import { StyleSheet, Text, View } from 'react-native';
import HomeIcon from './components/icons/Home';
import CalculatorIcon from './components/icons/Calculator';
import DocIcon from './components/icons/Doc';
import CameraIcon from './components/icons/Camera';
import { COLORS } from './utils/constants';
import { useState } from 'react';
import useTabNavigation from './hooks/useTabNavigation';
import HomeScreen from './components/screens/Home';
import CalculatorScreen from './components/screens/Calculator';
import TranslatorScreen from './components/screens/Translator';
import BlogScreen from './components/screens/Blog';

export default function App() {
	const [tab, setTab] = useState('Inicio');
	const SCREENS = {
		inicio: <HomeScreen />,
		calcular: <CalculatorScreen />,
		traductor: <TranslatorScreen />,
		blog: <BlogScreen />,
	};
	const [screen, setScreen] = useState(SCREENS.inicio);
	const isActive = (tabName) => tabName === tab;
	const LINKS = [
		{
			label: 'Inicio',
			href: 'HomeScreen',
			icon: <HomeIcon isActive={isActive('Inicio')} />,
		},
		{
			label: 'Calcular',
			href: 'CalculatorScreen',
			icon: <CalculatorIcon isActive={isActive('Calcular')} />,
		},
		{
			label: 'Traductor',
			href: 'TranslatorScreen',
			icon: <DocIcon isActive={isActive('Traductor')} />,
		},
		{
			label: 'Blog',
			href: 'BlogScreen',
			icon: <CameraIcon isActive={isActive('Blog')} />,
		},
	];

	const udapteState = (tab) => {
		setTab(tab);
		setScreen(SCREENS[tab.toLowerCase()]);
	};

	const { tabNavigation } = useTabNavigation(
		LINKS,
		tab /* Default tab */,
		udapteState
	);

	return (
		<View style={styles.container}>
			{screen}
			{tabNavigation}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: COLORS.white,
	},
});
