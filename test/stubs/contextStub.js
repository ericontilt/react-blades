export default function getContext(options) {
  return {
    bladeManager: {
      getAll: () => ([]),
    },
    bladeTheme: {
      bladePresenter: {},
      bladeContainer: {},
      blade: {},
      bladeHeader: {},
      bladeToolbar: {},
      bladeToolbarButton: {},
      bladeContent: {},
    },
    ...options,
  };
}
