import styled from 'styled-components';

const SearchBar = () => {
  return (
      <Bar>
          <Icon>

          </Icon>
          <Input type="text" placeholder="원하는 조건을 검색해 보세요!"/>
      </Bar>
  );
}
const Icon=styled.div`
    display: flex;
    align-items: center;
`
const Bar = styled.div`

    display: flex;
    width: 79.827vw;
    height: 5vh;
    border-radius: 10px;
    background: #F5F5F5;
    margin-left: 10px;
    margin-right: 10px;
`
const Input = styled.input`
    outline: none;
    border: none;
    background: transparent;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 10px;
    
    &::placeholder{
        color: #C6C6C6
    `

export default SearchBar;