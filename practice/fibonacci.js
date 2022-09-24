const fibonacci = function (n) {
  return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 2) + fibonacci(n - 1);
};
