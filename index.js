module.exports = () => {
  return {
    visitor: {
      JSXAttribute(path, state) {
        const htmlAttributes = state.opts.attributes;
        const attribute = path.node.name.name;

        htmlAttributes.map((htmlAttribute) => {
          const isMatch =
            htmlAttribute instanceof RegExp
              ? htmlAttribute.test(attribute)
              : attribute === htmlAttribute;

          if (isMatch) {
            path.remove();
          }
        });
      },
    },
  };
};
