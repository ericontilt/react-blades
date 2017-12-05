import { lighten } from '../utils/colorManipulator';

const typography = {
  fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
  fontSize: '14px',
};

const palette = {
  white: 'white',
  color1: '#06070E',
  color2: '#29524A',
  color3: '#94A187',
  color4: '#C5AFA0',
  color5: '#E9BCB7',

  disabledTextColor: '#AAAAAA',
};

export default {
  bladePresenter: {
    fontFamily: typography.fontFamily,
  },
  bladeContainer: {
    borderColor: palette.color1,
    fontSize: typography.fontSize,
    backgroundColor: palette.color4,
  },
  blade: {
  },
  bladeHeader: {
    backgroundColor: palette.color1,
    textColor: palette.white,
    titleBackgroundColor: palette.color1,
  },
  bladeToolbar: {
    backgroundColor: palette.color2,
  },
  bladeToolbarButton: {
    width: 125,
    textColor: palette.white,
    textFontSize: '11px',
    iconColor: palette.white,
    iconPadding: '0 8px',
    iconFontSize: '12px',
    disabledColor: palette.disabledTextColor,
    backgroundColor: palette.color2,
    hoveredBackgroundColor: lighten(palette.color2, 0.05),
    layoutDirection: 'vertical',
  },
  bladeContent: {
  },
};
