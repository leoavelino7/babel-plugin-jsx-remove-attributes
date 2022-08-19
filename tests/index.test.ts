import { expect } from "vitest";
import babel from "babel-core";

const CONFIG = {
  jsxRemoveAttributesPath: "./index.js",
  jsxName: "syntax-jsx",
};

describe("Babel plugin JSX remove attributes", () => {
  describe("List with String only", () => {
    it("should remove single attribute", () => {
      const htmlInput = '<h1 data-test-id="title">Hello World!</h1>;';

      const htmlOutput = babel.transform(htmlInput, {
        plugins: [
          CONFIG.jsxName,
          [CONFIG.jsxRemoveAttributesPath, { attributes: ["data-test-id"] }],
        ],
      }).code;

      const htmlExpected = "<h1>Hello World!</h1>;";

      expect(htmlOutput).toEqual(htmlExpected);
    });

    it("should remove multiple attributes", () => {
      const htmlInput =
        '<h1 data-test-id="title" data-active="true">Hello World!</h1>;';

      const htmlOutput = babel.transform(htmlInput, {
        plugins: [
          CONFIG.jsxName,
          [
            CONFIG.jsxRemoveAttributesPath,
            { attributes: ["data-test-id", "data-active"] },
          ],
        ],
      }).code;

      const htmlExpected = "<h1>Hello World!</h1>;";

      expect(htmlOutput).toEqual(htmlExpected);
    });
  });

  describe("list with RegExp only", () => {
    it("should remove single attribute", () => {
      const htmlInput = '<h1 data-test-id="title">Hello World!</h1>;';

      const htmlOutput = babel.transform(htmlInput, {
        plugins: [
          CONFIG.jsxName,
          [CONFIG.jsxRemoveAttributesPath, { attributes: [/data-test-id/gm] }],
        ],
      }).code;

      const htmlExpected = "<h1>Hello World!</h1>;";

      expect(htmlOutput).toEqual(htmlExpected);
    });

    it("should remove multiple attributes", () => {
      const htmlInput =
        '<h1 data-test-id="title" data-active="true" data-effect-focus="false" data-effect-hover="false">Hello World!</h1>;';

      const htmlOutput = babel.transform(htmlInput, {
        plugins: [
          CONFIG.jsxName,
          [
            CONFIG.jsxRemoveAttributesPath,
            { attributes: [/data-test-id/, /data-active/, /data-effect.*/] },
          ],
        ],
      }).code;

      const htmlExpected = "<h1>Hello World!</h1>;";

      expect(htmlOutput).toEqual(htmlExpected);
    });
  });

  describe("List with String and RegExp", () => {
    it("should remove multiple attributes", () => {
      const htmlInput =
        '<h1 className="title" data-test-id="title" data-active="true" data-effect-focus="false" data-effect-hover="false">Hello World!</h1>;';

      const htmlOutput = babel.transform(htmlInput, {
        plugins: [
          CONFIG.jsxName,
          [
            CONFIG.jsxRemoveAttributesPath,
            { attributes: ["data-test-id", /data-effect.*/] },
          ],
        ],
      }).code;

      const htmlExpected =
        '<h1 className="title" data-active="true">Hello World!</h1>;';

      expect(htmlOutput).toEqual(htmlExpected);
    });
  });
});
