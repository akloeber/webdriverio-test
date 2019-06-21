const assert = require('assert');

suite('webdriver.io page', () => {

  test('should have the right title', () => {
    browser.url('https://webdriver.io');
    const title = browser.getTitle();
    assert.equal(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
  });

});
