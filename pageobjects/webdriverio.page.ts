class WebdriverIoPage {

  open() {
    browser.url('https://webdriver.io');
  }

  get title() { return browser.getTitle(); }
}

export default new WebdriverIoPage();
