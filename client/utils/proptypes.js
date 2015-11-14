/* globals process */
export let checkPropType;

  // skip type checks in production
if (process.env.NODE_ENV === 'production') {
  checkPropType = function() { return null; };
} else {
  checkPropType = function(value, proptype, {
    source: source='model validation',
    throws: throws=false,
  }) {
    const props = {value};
    const err = proptype(props, 'value', source);

    if (err instanceof Error) {
      console.error(err);
      if (throws) {
        throw err;
      }
      return false;
    }

    return true;
  };
}
