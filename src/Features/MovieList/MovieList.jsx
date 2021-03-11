/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Box } from '../../Components/Box'
import { colors, Button } from '../../theme'

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

const BusyIndicator = () => (
  <span css={css`
  padding: 5vh 12px;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  color: ${colors.white};
  text-align: center;
  animation: rotate-center 1.6s ease-in-out 1s infinite;
`}>
    loading...
  </span>
)

const Untouched = () => (
  <span css={css`
  padding: 5vh 12px;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  color: ${colors.white};
`}>
    Start browsing by using the input above
  </span>
)

const Error = ({ error }) => (
  <span css={css`
    padding: 5vh 12px;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    color: ${colors.red};
  `}>
    :(<br />Error<br />{error}
  </span>
)

export const MovieList = ({ useMovieListContext }) => {
  const { movies, searchTerm, busy, error } = useMovieListContext()
  const empty = (!movies || !movies.length) && searchTerm && !busy && !error
  const untouched = !empty && !busy && !searchTerm && !error
  return (
    <Wrapper>
      {error && !busy && <Error {...{ error }} />}
      {empty && <EmptyList />}
      {busy && <BusyIndicator />}
      {untouched && <Untouched />}
      {movies.map((item, key) =>
        <Box {...{ key, item }} />
      )}
    </Wrapper>
  )
}
