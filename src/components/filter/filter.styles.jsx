import styled from 'styled-components'

export const CenterblockFilter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
  justify-content: space-between;
`
export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

export const FilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: ${({ $isActiveBtn }) =>
    $isActiveBtn ? '1px solid #ad61ff' : '1px solid #ffffff'};
  border-radius: 60px;
  padding: 6px 20px;
  position: relative;
  color: ${({ $isActiveBtn }) => ($isActiveBtn ? '#ad61ff' : '#ffffff')};

  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover {
    border: ${({ $isActiveBtn }) =>
      $isActiveBtn ? '1px solid #ad61ff' : '1px solid #d9b6ff'};
    color: ${({ $isActiveBtn }) => ($isActiveBtn ? '#ad61ff' : '#d9b6ff')};
    cursor: pointer;
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
  scrollbar-color: #ffffff #4b4949;

  &::-webkit-scrollbar {
    width: 4px;
    background-color: #4b4949;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 2px;
  }
`
export const FilterList = styled.ul`
  list-style: none;
`
export const FilterItem = styled.li`
  color: ${({ $isActive }) => ($isActive ? '#B672FF' : '#fff')};
  text-decoration: ${({ $isActive }) => ($isActive ? 'underline' : 'none')};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */

  &:not(:first-child) {
    padding-top: 28px;
  }
  &:hover {
    color: #b672ff;
    text-decoration: underline;
  }
`

export const ContainerFilters = styled.div`
  display: flex;
  align-items: center;
`

export const CountCircle = styled.div`
  position: absolute;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #ad61ff;
  color: white;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px; /* 100% */
  right: -8px;
  top: -8px;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility:  ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};;
`
