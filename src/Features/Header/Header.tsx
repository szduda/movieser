/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'
import { colors, Button, Icons } from '../../theme'

const Wrapper = (props: any) => (
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
  <a href="https://szduda.github.io/movieser/">
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

const SearchInput = (props: any) => (
  <div css={css`display: flex; align-items: center;`}>
    <input type="text" placeholder="Enter movie title..." {...props} />
    <Button>
      <Icons.Search />
    </Button>
  </div>
)

type HeaderContext = {
  useHeaderContext: () => {
    search: (term: string) => void,
    searchTerm: string
  }
}

export const Header = ({ useHeaderContext }: HeaderContext) => {
  const { searchTerm, search } = useHeaderContext()
  return (
    <Wrapper>
      <Title />
      <SearchInput
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => search(e.target.value)}
      />
    </Wrapper>
  )
}
