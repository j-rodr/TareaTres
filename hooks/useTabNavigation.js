import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../utils/constants';
import { useState } from 'react';

export default function useTabNavigation(links, initialActiveTab, updateTab) {
	const [activeTab, setActiveTab] = useState(initialActiveTab);

	return {
		tabNavigation: (
			<View style={styles.container}>
				{links.map((link, index) => (
					<TouchableOpacity
						onPress={() => {
							setActiveTab(link.label);
							updateTab(link.label);
						}}
						style={styles.innerContainer}
						key={index}
					>
						{link?.icon}
						<Text
							style={{
								display: 'flex',
								flexDirection: 'column',
								gap: 14,
								color:
									activeTab === link.label
										? COLORS.base
										: COLORS.disabled,
								fontSize: 16,
								marginTop: 4,
								fontWeight:
									activeTab === link.label
										? 'bold'
										: 'normal',
							}}
						>
							{link.label}
						</Text>
					</TouchableOpacity>
				))}
			</View>
		),
	};
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 'auto',
		backgroundColor: COLORS.white,
		paddingHorizontal: 45,
		paddingTop: 25,
		paddingBottom: 18,
		borderColor: '#F6F6F6',
		borderWidth: 1,
		borderTopRightRadius: 40,
		borderTopLeftRadius: 40,
	},
	innerContainer: {
		display: 'flex',
		flexDirection: 'column',
		gap: 1,
		alignItems: 'center',
	},
	link: {
		display: 'flex',
		flexDirection: 'column',
		gap: 14,
		color: COLORS.disabled,
		fontSize: 16,
		marginTop: 4,
	},
});
