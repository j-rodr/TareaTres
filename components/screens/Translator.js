import { View, TextInput, Text, StatusBar } from 'react-native';
import { COLORS, NUMBERS_REPRESENTED_IN_WORDS } from '../../utils/constants';
import { capitalize } from '../../utils/core';
import Button from '../Button';
import Title from '../Title';
import { useState } from 'react';

export default function TranslatorScreen() {
	const [translation, setTranslation] = useState('');
	const [number, setNumber] = useState(undefined);

	const getNumber = (numberString) => {
		setNumber(Number(numberString));
	};

	const getTranslation = () => {
		setTranslation(NUMBERS_REPRESENTED_IN_WORDS[number - 1]);
	};

	return (
		<View
			style={{
				paddingTop: StatusBar.currentHeight + 30,
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<Title text='Traductor de números' />
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					gap: 15,
				}}
			>
				<TextInput
					style={{
						height: 45,
						borderWidth: 1,
						borderColor: COLORS.slate,
						paddingHorizontal: 20,
						paddingVertical: 10,
						borderRadius: 8,
						fontSize: 18,
					}}
					placeholder='Número'
					onChangeText={getNumber}
				/>
				<Button text='Traducir' onPress={getTranslation} />
			</View>

			{
				<Text style={{ fontSize: 22, paddingTop: 25 }}>
					{capitalize(
						translation ?? 'Lo siento, no conozco ese número.'
					)}
				</Text>
			}
		</View>
	);
}
