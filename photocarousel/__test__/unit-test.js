// jest.config.js
//Sync object

{
  "setupFiles": [
    "./src/setupTests.js"
    // "raf/polyfill",
  ],
  "snapshotSerializers": ["enzyme-to-json/serializer"]
}

// Normally without the serializer (line 9), each time a component is created in a test it must have the enzyme-to-json method .toJson() used individually before it can be passed to Jest’s snapshot matcher.
// This enable us to pass a component created by Enzyme to the Jest .toMatchSnapshot() without calling this interim JSON method ( expect(toJson(rawRenderedComponent)).toMatchSnapshot(); ).