import {
	StyledCard,
	StyledImg,
	StyledName,
	StyledNameBox,
	StyledProfileBox,
	StyledState,
	StyledText,
	StyledTitile
} from './Card.styles';

import { CARDS_INFO } from '../constants/cards_info';

const Card = () => {
	return CARDS_INFO.map(info => (
		<StyledCard $bGColor={info.bgColor} key={info.id}>
			<StyledProfileBox>
				<StyledImg src={info.img} alt='Profile Pic' />
				<StyledNameBox $nameColor={info.titleColor}>
					<StyledName>{info.name}</StyledName>
					<StyledState>{info.state}</StyledState>
				</StyledNameBox>
			</StyledProfileBox>
			<StyledTitile $titleColor={info.titleColor}>{info.title}</StyledTitile>
			<StyledText $textColor={info.textColor}>{info.text}</StyledText>
		</StyledCard>
	));
};

export default Card;
