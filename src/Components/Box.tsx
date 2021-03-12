/** @jsx jsx */
import { jsx, css, } from '@emotion/core'
import { colors, Flex } from '../theme'
import { Movie } from '../types'

const Wrapper = (props: any) => (
  <Flex.Col
    valign="space-between"
    css={css`
      background: ${colors.white};
      color: ${colors.black};
      padding: 0 16px;
      margin: 0 0 8px 0;
      border-radius: 4px;
      box-shadow: 0 2px 4px 0 ${colors.grayDark}44;
      position: relative;
    `} {...props} />
)

const DateTitle = ({ title }: { title: string }) => (
  <h2 css={css`
    color: ${colors.gray};
    font-variant: all-small-caps;
    padding-bottom: 16px;
  `}>
    {title}
  </h2>
)

export const Box = ({ item }: { item: Movie }) => {
  const { Title, Year, Poster } = item || {}

  return (
    <Wrapper>
      <Flex.Row css={css`color: ${colors.grayLight}; margin: 8px 0; font-variant: all-small-caps; font-weight: bold`}>
        <span>{Year}</span>
      </Flex.Row>
      {Poster !== 'N/A' && (
        <div css={css`max-width: 70%; margin: 0 16px 16px 0;`}>
          <img src={Poster} alt={`${Title} poster`} css={css`height: 100%`} />
        </div>
      )}
      <DateTitle title={Title} />
    </Wrapper>
  )
}
