function greet(names = ["world"]) {
  for (name of names)
    Logger.log(`hello, ${name}`);
}
