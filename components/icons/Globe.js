import Svg, { Path } from 'react-native-svg';
import { COLORS } from '../../utils/constants';

export default function GlobeIcon({ isActive = false }) {
	return (
		<Svg
			xmlns='http://www.w3.org/2000/svg'
			width={29}
			height={26}
			fill='none'
		>
			<Path
				stroke={isActive ? COLORS.base : COLORS.disabled}
				strokeWidth={isActive ? 2.3 : 1.8}
				d='M24 12.5C24 18.851 18.851 24 12.5 24M24 12.5C24 6.149 18.851 1 12.5 1M24 12.5H1M12.5 24C6.149 24 1 18.851 1 12.5M12.5 24s5.111-3.833 5.111-11.5S12.5 1 12.5 1m0 23s-5.111-3.833-5.111-11.5S12.5 1 12.5 1M1 12.5C1 6.149 6.149 1 12.5 1'
			/>
		</Svg>
	);
}
