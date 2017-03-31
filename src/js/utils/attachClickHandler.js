export default function attachClickHandler(target, fn) {
  if (target.addEventListener) {
    // `useCapture` flag is set to true so that a `stopPropagation` in the children will
    // not prevent all outside click handlers from firing - maja
    target.addEventListener('click', fn, true);
  } else {
    target.attachEvent('onclick', fn);
  }

  return {
    remove() {
      target.removeEventListener('click', fn);
    },
  };
}
