const middlewareFunc = () => {
  const middlewares = [];

  const use = (f) => middlewares.push(f);

  const runMiddlewares = (index) => {
    if (index < middlewares.length) {
      middlewares[index].call(null, () => runMiddlewares(index + 1));
    }
  };
  const get = () => {
    runMiddlewares(0);
  };
  return {
    get,
    use,
  };
};

module.exports = middlewareFunc;
