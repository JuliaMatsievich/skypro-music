import styled from 'styled-components'

export const FilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  position: relative;

  &:not(:last-child) {
    margin-right: 10px;
  }
`
export const FilterCategory = styled.div`
		border-radius: 12px;
	background: #313131;
	position: absolute;
	top: 50px;
	left: 0;
`
export const FilterWrapper = styled.div`
	overflow-y: auto;
	min-width: 300px;
	max-height: 305px;
	margin: 34px;
	scrollbar-width: thin;
	scrollbar-color: #FFFFFF #4B4949;

	&::-webkit-scrollbar {
	width: 4px; 
	background-color: #4B4949;
}
	&::-webkit-scrollbar-thumb {
	background-color: #FFFFFF;
	border-radius: 2px;
}
`
export const FilterList = styled.ul`
	list-style: none;
`
export const FilterItem = styled.li`
	color: #fff;
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px; /* 120% */

	&:not(:first-child) {
	padding-top: 28px;
}
	&:hover {
	color: #B672FF;
	text-decoration: underline;

}
`