import styled from 'styled-components';

const StyledGrid = styled.main`
	display: grid;
	grid-template-columns: 327px;
	grid-template-rows: 444px, 240px, 222px, 384px, 438px;
	gap: 24px;
	margin-inline: auto;

	@media screen and (width>786px) {
		grid-template-columns: repeat(4, 255px);
		grid-template-rows: 282px, 266px;
		row-gap: 24px;
		column-gap: 30px;
	}
`;

export { StyledGrid };
