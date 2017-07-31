import merge from 'lodash.merge';
import defaultTheme from './theme';

export default function getBladeTheme(theme) {
  return merge({}, defaultTheme, theme);
}
