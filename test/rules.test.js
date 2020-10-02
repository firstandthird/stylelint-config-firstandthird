const stylelint = require('stylelint');
const config = require('../');

const validCss = `
p {
  color: white;
}
`;

describe("flags no warnings with valid css", () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: validCss,
      config,
    });
  });

  it("did not error", () => {
    return result.then((data) => expect(data.errored).toBeFalsy());
  });

  it("flags no warnings", () => {
    return result.then((data) =>
      expect(data.results[0].warnings).toHaveLength(0)
    );
  });
});
