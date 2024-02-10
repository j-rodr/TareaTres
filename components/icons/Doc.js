import Svg, { Path } from 'react-native-svg';
import { COLORS } from '../../utils/constants';

export default function DocIcon({ isActive = false }) {
	return (
		<Svg
			xmlns='http://www.w3.org/2000/svg'
			width={23}
			height={23}
			fill='none'
		>
			<Path
				stroke={isActive ? COLORS.base : COLORS.disabled}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={isActive ? 2.3 : 1.8}
				d='M6.559 6.559h9.882M6.56 11.5h9.882M6.56 16.441H11.5M1 11.5C1 3.47 3.47 1 11.5 1S22 3.47 22 11.5 19.53 22 11.5 22 1 19.53 1 11.5Z'
			/>
		</Svg>
	);
}
