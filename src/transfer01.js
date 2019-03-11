module.exports = function ({ types: babelTypes }) {
  return {
    name: "deadly-simple-plugin-example",
    visitor: {
      Identifier(path, state) {
        let name = state.opts[path.node.name] || undefined
        if (name) {
          path.node.name = name;
        }
      }
    }
  };
};