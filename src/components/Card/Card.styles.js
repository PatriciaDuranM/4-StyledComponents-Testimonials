import styled from 'styled-components';
import { FONT_WEIGHT } from '../../styles/FontsStyles';

const StyledCard = styled.div`
	padding-inline: 32px;
	padding-bottom: 32px;
	padding-top: 26px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	border-radius: 8px;
	background-color: ${({ $bGColor }) => $bGColor};

	&:first-child {
		background-image: url(public/assets/images/bg-pattern-quotation.svg);
		background-repeat: no-repeat;
		background-position: top right;
		background-size: 102px 104px;
	}

	@media screen and (width>768px) {
		&:first-child {
			grid-column: 1/3;
		}

		&:nth-child(2) {
			grid-column: 3/4;
		}

		&:nth-child(3) {
			grid-column: 1/2;
			grid-row: 2/3;
		}
		&:nth-child(4) {
			grid-column: 2/4;
			grid-row: 2/3;
		}

		&:last-child {
			grid-column: 4/5;
			grid-row: 1/3;
		}
	}
`;
const StyledProfileBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: start;
	gap: 16px;
`;
const StyledImg = styled.img`
	width: 28px;
	height: 28px;
	border-radius: 50%;

	&:nth-child(1) {
		border: 2px solid #a775f1;
	}
	&:nth-child(4) {
		border: 2px solid #a775f1;
	}
`;
const StyledNameBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	gap: 4px;
	color: ${({ $nameColor }) => $nameColor};
`;
const StyledName = styled.span`
	font-weight: ${FONT_WEIGHT.medium};
	font-size: 13px;
	line-height: 13px;
`;
const StyledState = styled.span`
	font-weight: ${FONT_WEIGHT.medium};
	font-size: 11px;
	line-height: 11px;
	opacity: 50%;
`;
const StyledTitile = styled.h2`
	font-weight: ${FONT_WEIGHT.semibold};
	font-size: 20px;
	text-align: left;
	margin: 0px;
	color: ${({ $titleColor }) => $titleColor};
`;
const StyledText = styled.p`
	margin: 0px;
	font-weight: ${FONT_WEIGHT.medium};
	font-size: 13px;
	line-height: 18px;
	text-align: left;
	color: ${({ $textColor }) => $textColor};
`;

export {
	StyledCard,
	StyledProfileBox,
	StyledImg,
	StyledName,
	StyledState,
	StyledTitile,
	StyledText,
	StyledNameBox
};
