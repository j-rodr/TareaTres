import { Text, View, TextInput, ScrollView, StatusBar } from 'react-native';
import { COLORS } from '../../utils/constants';
import { useState } from 'react';
import Divider from '../Divider';
import Button from '../Button';
import Title from '../Title';
import Input from '../Input';

export default function CalculatorScreen() {
	const [a, setA] = useState(0);
	const [b, setB] = useState(0);
	const [c, setC] = useState(0);
	const [result, setResult] = useState(0);
	const [tablesResult, setTablesResult] = useState('');

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

	const getTablesNumber = (cString) => {
		setC(Number(cString));
	};

	const generateTables = () => {
		if (!Number.isNaN(c)) {
			let output = '';

			for (let i = 1; i <= 13; i++) {
				output += `\n${c ?? 0} x ${i} = ${c * i}`;
			}

			output = output.substring(1, output.length);

			setTablesResult(output);
		}
	};

	return (
		<View
			style={{
				paddingTop: StatusBar.currentHeight + 10,
				paddingHorizontal: 30,
				display: 'flex',
				gap: 20,
			}}
		>
			<View style={{ display: 'flex', alignItems: 'center' }}>
				<Title text='Sumadora' />
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						gap: 18,
						paddingHorizontal: 40,
						marginBottom: 25,
					}}
				>
					<Input placeholder='Núm. 1' onChangeText={getA} />
					<Input placeholder='Núm. 2' onChangeText={getB} />
				</View>
				{!Number.isNaN(result) && gotResult ? (
					<Text style={{ marginTop: 15, fontSize: 20 }}>
						El resultado es {result}
					</Text>
				) : (
					''
				)}
				{Number.isNaN(result) && (
					<Text
						style={{
							marginTop: 30,
							fontSize: 18,
							color: COLORS.red,
						}}
					>
						Debe proporcionar números válidos.
					</Text>
				)}
				<Button text='Calcular' onPress={calculateResult} />
			</View>
			<Divider />
			<View style={{ display: 'flex', alignItems: 'center' }}>
				<Title text='Tabla de multiplicar' />
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
						onChangeText={getTablesNumber}
					/>
					<Button text='Obtener tabla' onPress={generateTables} />
				</View>

				{!Number.isNaN(c) > 0 && (
					<Text style={{ fontSize: 19, marginTop: 20 }}>
						{tablesResult}
					</Text>
				)}

				{Number.isNaN(c) && (
					<Text
						style={{
							marginTop: 30,
							fontSize: 18,
							color: COLORS.red,
						}}
					>
						Debe proporcionar un número válido.
					</Text>
				)}
			</View>
		</View>
	);
}
