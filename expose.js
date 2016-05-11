var fubar = console.log.bind(console);

console.log = function() {
  fubar("EXPOSED");
}
