import postcssScss from 'postcss-scss'
import postcssSass from 'postcss-sass'
import postcssLess from 'postcss-less'

export function getPostcssParser(filepath: string) {
  const fileExtension = filepath.slice(filepath.lastIndexOf('.'))
  switch (fileExtension) {
    case '.scss':
      return postcssScss
    case '.sass':
      return postcssSass
    case '.less':
      return postcssLess
    default:
      return undefined
  }
}
