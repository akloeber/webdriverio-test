const assert = require('assert');

suite('webdriver.io page', () => {

  test('should have the right title', () => {
    browser.url('https://webdriver.io');
    const title: string = browser.getTitle();
    assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
  });

});
