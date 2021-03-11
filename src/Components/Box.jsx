/** @jsx jsx */
import { jsx, css, } from '@emotion/core'
import { colors, Flex } from '../theme'

const Wrapper = props => (
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

const ContentWrapper = props => (
  <div css={css`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  `} {...props} />
)

const DateTitle = ({ title }) => (
  <h2 css={css`
    color: ${colors.gray};
    font-variant: all-small-caps;
  `}>
    {title}
  </h2>
)

export const Box = ({ item }) => {
  const { Title, Genre, Year, Director, Runtime, Poster } = item || {}

  return (
    <Wrapper>
      <Flex.Row css={css`color: ${colors.grayLight}; margin: 8px 0; font-variant: all-small-caps; font-weight: bold`}>
        <span>{Year}</span>
      </Flex.Row>
      <ContentWrapper>
        <img src={Poster} alt={`${Title} poster`} css={css`max-width: 70%; margin: 0 16px 16px 0;`} />
        <Flex.Col>
          <DateTitle title={Title} />
          <h3 css={css`padding-bottom: 16px;`}>by {Director}</h3>
        </Flex.Col>
      </ContentWrapper>
    </Wrapper>
  )
}
