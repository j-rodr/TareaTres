import Svg, { Path } from 'react-native-svg';
import { COLORS } from '../../utils/constants';

export default function CameraIcon({ isActive = false }) {
	return (
		<Svg
			xmlns='http://www.w3.org/2000/svg'
			width={29}
			height={23}
			fill='none'
		>
			<Path
				stroke={isActive ? COLORS.base : COLORS.disabled}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				d='m21.253 15.464 3.81 1.832c1.14.548 2.466-.094 2.63-1.348A37.42 37.42 0 0 0 28 11.124c0-1.94-.146-3.59-.307-4.822-.164-1.255-1.49-1.897-2.63-1.35l-3.81 1.833m0 8.678c.112-1.302.18-2.787.18-4.339 0-1.552-.068-3.037-.18-4.34m0 8.68c-.212 2.474-.584 4.291-.956 4.66-.567.563-4.54 1.125-9.08 1.125-4.541 0-8.514-.563-9.082-1.125-.567-.563-1.135-4.5-1.135-9s.568-8.438 1.135-9C2.703 1.562 6.675 1 11.216 1c4.54 0 8.514.563 9.081 1.125.372.369.744 2.186.956 4.66'
			/>
		</Svg>
	);
}
