import Svg, { Path } from 'react-native-svg';
import { COLORS } from '../../utils/constants';

export default function CalculatorIcon({ isActive = false }) {
	return (
		<Svg
			xmlns='http://www.w3.org/2000/svg'
			width={24}
			height={24}
			fill='none'
		>
			<Path
				stroke={isActive ? COLORS.base : COLORS.disabled}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={isActive ? 2.3 : 1.8}
				d='M5.583 1C2.078 1 1 2.078 1 5.583s1.078 4.584 4.583 4.584 4.584-1.079 4.584-4.584S9.088 1 5.583 1ZM5.583 13.833C2.078 13.833 1 14.912 1 18.417S2.078 23 5.583 23s4.584-1.078 4.584-4.583-1.079-4.584-4.584-4.584ZM18.417 13.833c-3.505 0-4.584 1.079-4.584 4.584S14.912 23 18.417 23 23 21.922 23 18.417s-1.078-4.584-4.583-4.584ZM18.417 1c-3.505 0-4.584 1.078-4.584 4.583s1.079 4.584 4.584 4.584S23 9.088 23 5.583 21.922 1 18.417 1Z'
			/>
		</Svg>
	);
}
