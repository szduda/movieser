/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Box } from '../../Components/Box'
import { colors } from '../../theme'

const Wrapper = props => (
  <div css={css`
  padding: 68px 4px 64px;
  display: flex;
  flex-direction: column;
  `} {...props} />
)

const EmptyList = () => (
  <span css={css`
    padding: 5vh 12px;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    color: ${colors.white};
  `}>
    :(<br />Nothing found.<br />Try a different title.
  </span>
)

export const MovieList = ({ useMovieListContext }) => {
  const { movies } = useMovieListContext()
  return (
    <Wrapper>
      {(!movies || !movies.length) && <EmptyList />}
      {movies.map((item, key) =>
        <Box {...{ key, item }} />
      )}
    </Wrapper>
  )
}