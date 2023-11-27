import styled from 'styled-components';

export const AppContainerBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const OverviewContainerWrapperBox = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);
  height: 100%;
  padding: 30px 27px;
  color: rgba(255, 255, 255, 0.677);
  overflow: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    height: 20%;
    background-color: grey;
    border-radius: 10px;
  }
`;

export const OverviewContainerBox = styled.div`
  h4 {
    margin-bottom: 20px;
  }
`;

export const ItemContainerBox = styled.div`
  background-color: rgba(55, 59, 105, 1);
  color: white;
  width: 250px;
  margin: 16px;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  position: relative;

  img {
    width: 100%;
  }
  &:hover {
    ${OverviewContainerWrapperBox} {
      display: flex;
    }
  }
`;

export const ItemInfoBox = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;

  span {
    margin-left: 3px;
  }
`;
