import { styled } from '../../../theme'
import { columns, rows } from './grid.variants'

const StyledGrid = styled('div', {
  boxSizing: 'border-box',
  display: 'grid',
  variants: {
    columns,
    rows
  }
})

export const Grid = StyledGrid
