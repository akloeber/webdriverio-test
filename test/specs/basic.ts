
import WebdriverIoPage from 'pageobjects/webdriverio.page';
import {expect} from 'chai';

suite('webdriver.io page', () => {

  test('should have the right title', () => {
    WebdriverIoPage.open();

    expect(WebdriverIoPage.title).to.equal('WebdriverIO · Next-gen WebDriver test framework for Node.js');
  });

});
