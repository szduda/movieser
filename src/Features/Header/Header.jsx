/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { colors, Button, Icons } from '../../theme'

const Wrapper = props => (
  <div css={css`
  background: ${colors.black};
  color: ${colors.white};
  padding: 12px 16px;
  box-shadow: 0 0 4px #000;
  display: flex;
  justify-content: space-between;
  `} {...props} />
)

const Title = () => (
  <a href="/">
    <h1 css={css`
      display: inline-flex;
      flex-direction: column; 
      margin: 0;
      padding: 0;
      font-size: 24px;
      line-height: 1.5;
    `}>
      movieser
    </h1>
  </a>
)

const SearchInput = props => (
  <div css={css`display: flex; align-items: center;`}>
    <input type="text" placeholder="Enter movie title..." {...props} />
    <Button>
      <Icons.Search />
    </Button>
  </div>
)

export const Header = ({ useHeaderContext }) => {
  const { searchTerm, search } = useHeaderContext()
  return (
    <Wrapper>
      <Title />
      <SearchInput value={searchTerm} onChange={e => search(e.target.value)} />
    </Wrapper>
  )
}
