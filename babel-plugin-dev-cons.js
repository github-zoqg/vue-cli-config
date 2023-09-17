module.exports = function ({ types: t }) {
  return {
    visitor: {
      Identifier(path) {
        // console.log(path.node, "path");
        let isdev = path.node.name == "dev";
        let parentIsIf = t.isIfStatement(path.parentPath);
        if (isdev && parentIsIf) {
          let stringNode = t.stringLiteral("dev");
          path.replaceWith(stringNode);
        }
        console.log(isdev, parentIsIf, "t");
      },
      StringLiteral(path) {
        let isdev = path.node.value == "dev";
        let parentIsIf = t.isIfStatement(path.parentPath);
        if (isdev && parentIsIf) {
          path.parentPath.remove();
        }
      },
    },
  };
};
