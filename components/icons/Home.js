import Svg, { Path } from 'react-native-svg';
import { COLORS } from '../../utils/constants';

export default function HomeIcon({ isActive = false }) {
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
				strokeWidth={2}
				d='M4.884 5.697c1.89-1.891 4.002-3.34 5.43-4.217a3.2 3.2 0 0 1 3.371 0c1.429.877 3.54 2.326 5.431 4.217 4.1 4.099 3.882 6.469 3.882 10.35 0 1.825-.143 3.363-.294 4.482-.16 1.176-1.186 1.988-2.373 1.988h-1.862a2.588 2.588 0 0 1-2.587-2.588v-2.588a3.882 3.882 0 1 0-7.764 0v2.588a2.588 2.588 0 0 1-2.587 2.588H3.669c-1.187 0-2.213-.812-2.373-1.988a33.633 33.633 0 0 1-.294-4.481c0-3.882-.218-6.252 3.882-10.351Z'
			/>
		</Svg>
	);
}
