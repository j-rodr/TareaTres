import { StyleSheet, Text, View } from 'react-native';
import HomeIcon from './components/icons/Home';
import CalculatorIcon from './components/icons/Calculator';
import GlobeIcon from './components/icons/Globe';
import CameraIcon from './components/icons/Camera';
import { COLORS } from './utils/constants';
import { useState } from 'react';
import useTabNavigation from './hooks/useTabNavigation';

export default function App() {
	const [tab, setTab] = useState('Inicio');
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
			icon: <GlobeIcon isActive={isActive('Traductor')} />,
		},
		{
			label: 'Blog',
			href: 'BlogScreen',
			icon: <CameraIcon isActive={isActive('Blog')} />,
		},
	];

	const udapteState = (tab) => {
		setTab(tab);
	};

	const { tabNavigation } = useTabNavigation(
		LINKS,
		tab /* Default tab */,
		udapteState
	);

	return <View style={styles.container}>{tabNavigation}</View>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: COLORS.white,
	},
});
