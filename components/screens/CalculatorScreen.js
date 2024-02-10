import { Text, View, TextInput, Button, Pressable } from 'react-native';
import { COLORS } from '../../utils/constants';
import { useState } from 'react';

export default function CalculatorScreen() {
	const [a, setA] = useState(0);
	const [b, setB] = useState(0);
	const [result, setResult] = useState(0);
	const [gotResult, setGotResult] = useState(false);

	const calculateResult = () => {
		setResult(a + b);
		setGotResult(true);
	};

	const getA = (aString) => {
		const castNumber = Number(aString);
		setA(castNumber);
	};

	const getB = (bString) => {
		const castNumber = Number(bString);
		setB(castNumber);
	};

	return (
		<View style={{ paddingTop: 70, display: 'flex', alignItems: 'center' }}>
			<Text
				style={{
					fontSize: 22,
					fontWeight: 'bold',
					textAlign: 'center',
					marginBottom: 20,
				}}
			>
				Sumadora
			</Text>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					gap: 18,
					paddingHorizontal: 40,
				}}
			>
				<TextInput
					style={{
						flex: 1,
						height: 55,
						borderWidth: 1,
						borderColor: COLORS.slate,
						paddingHorizontal: 15,
						paddingVertical: 18,
						borderRadius: 8,
						fontSize: 17,
					}}
					placeholder='Núm. 1'
					onChangeText={getA}
				/>
				<TextInput
					style={{
						flex: 1,
						height: 55,
						borderWidth: 1,
						borderColor: COLORS.slate,
						paddingHorizontal: 15,
						paddingVertical: 18,
						borderRadius: 8,
						fontSize: 17,
					}}
					placeholder='Núm. 2'
					onChangeText={getB}
				/>
			</View>
			{!Number.isNaN(result) && gotResult ? (
				<Text style={{ marginTop: 30, fontSize: 20 }}>
					El resultado es {result}
				</Text>
			) : (
				''
			)}
			{Number.isNaN(result) && (
				<Text
					style={{ marginTop: 30, fontSize: 18, color: COLORS.red }}
				>
					Debe proporcionar números válidos.
				</Text>
			)}
			<Pressable
				style={{
					backgroundColor: COLORS.base,
					width: 110,
					paddingHorizontal: 20,
					paddingVertical: 10,
					borderRadius: 8,
					marginTop: 25,
				}}
				onPress={calculateResult}
			>
				<Text
					style={{
						textAlign: 'center',
						color: COLORS.white,
						fontSize: 18,
						fontWeight: 'bold',
					}}
				>
					Calcular
				</Text>
			</Pressable>
		</View>
	);
}
