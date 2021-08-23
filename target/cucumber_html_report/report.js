$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFiles/Register.feature");
formatter.feature({
  "line": 1,
  "name": "Register functionality scenarios",
  "description": "",
  "id": "register-functionality-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5000107000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify wheather user is able to register into the application by providing all the detail",
  "description": "",
  "id": "register-functionality-scenarios;verify-wheather-user-is-able-to-register-into-the-application-by-providing-all-the-detail",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Register"
    },
    {
      "line": 3,
      "name": "@One"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to the register account page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I provide all the below detail",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Karan"
      ],
      "line": 8
    },
    {
      "cells": [
        "LastName",
        "Mehara"
      ],
      "line": 9
    },
    {
      "cells": [
        "E-mail",
        "rewr@gmail.com"
      ],
      "line": 10
    },
    {
      "cells": [
        "Telephone",
        "9806558045"
      ],
      "line": 11
    },
    {
      "cells": [
        "Password",
        "D1$raj321"
      ],
      "line": 12
    },
    {
      "cells": [
        "Confirm_Password",
        "D1$raj321"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I select privacy policy",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on the continue button and wait for a minute",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see user account create successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "register.i_launch_the_application()"
});
formatter.result({
  "duration": 31735306700,
  "status": "passed"
});
formatter.match({
  "location": "register.i_navigate_to_the_register_account_page()"
});
formatter.result({
  "duration": 16183320700,
  "status": "passed"
});
formatter.match({
  "location": "register.i_provide_all_the_below_detail(DataTable)"
});
formatter.result({
  "duration": 15443451000,
  "status": "passed"
});
formatter.match({
  "location": "register.i_select_privacy_policy()"
});
formatter.result({
  "duration": 15083816500,
  "status": "passed"
});
formatter.match({
  "location": "register.i_click_on_the_continue_button()"
});
formatter.result({
  "duration": 15288040500,
  "status": "passed"
});
formatter.match({
  "location": "register.i_should_see_user_account_create_successfully()"
});
formatter.result({
  "duration": 42862600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"common-success\"]/ul/li[3]/a\"}\n  (Session info: chrome\u003d92.0.4515.159)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-U8C8BK9\u0027, ip: \u0027192.168.0.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 92.0.4515.159, chrome: {chromedriverVersion: 92.0.4515.107 (87a818b10553..., userDataDir: C:\\Users\\om\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:50022}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b7424f70cb27f72ab68435fe6b36384c\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"common-success\"]/ul/li[3]/a}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy22.isDisplayed(Unknown Source)\r\n\tat com.tutorialsninja.automation.framework.Elements.isDisplayed(Elements.java:96)\r\n\tat com.tutorialsninja.automation.stepdef.register.i_should_see_user_account_create_successfully(register.java:79)\r\n\tat ✽.Then I should see user account create successfully(FeatureFiles/Register.feature:16)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 838509100,
  "status": "passed"
});
formatter.before({
  "duration": 2201141000,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify wheather user is not able to create account",
  "description": "",
  "id": "register-functionality-scenarios;verify-wheather-user-is-not-able-to-create-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@Register"
    },
    {
      "line": 18,
      "name": "@Two"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I navigate to the register account page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select privacy policy",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on the continue button and wait for a minute",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see that user account not created",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I should see the error message \"please fill mandatory detail\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.i_launch_the_application()"
});
formatter.result({
  "duration": 31060723300,
  "status": "passed"
});
formatter.match({
  "location": "register.i_navigate_to_the_register_account_page()"
});
formatter.result({
  "duration": 15592351200,
  "status": "passed"
});
formatter.match({
  "location": "register.i_select_privacy_policy()"
});
formatter.result({
  "duration": 15080693900,
  "status": "passed"
});
formatter.match({
  "location": "register.i_click_on_the_continue_button()"
});
formatter.result({
  "duration": 15262370600,
  "status": "passed"
});
formatter.match({
  "location": "register.i_should_see_that_user_account_not_created()"
});
formatter.result({
  "duration": 68288700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "please fill mandatory detail",
      "offset": 32
    }
  ],
  "location": "register.i_should_see_the_error_message(String)"
});
formatter.result({
  "duration": 140445300,
  "status": "passed"
});
formatter.after({
  "duration": 618942300,
  "status": "passed"
});
formatter.before({
  "duration": 1447236900,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Verify whether the user is able to register into the application by opting for Newsletter subscription",
  "description": "",
  "id": "register-functionality-scenarios;verify-whether-the-user-is-able-to-register-into-the-application-by-opting-for-newsletter-subscription",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@Register"
    },
    {
      "line": 27,
      "name": "@Three"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I navigate to the register account page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I provide all the below detail",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Ravi"
      ],
      "line": 32
    },
    {
      "cells": [
        "LastName",
        "Kiran"
      ],
      "line": 33
    },
    {
      "cells": [
        "E-mail",
        "Ravi.kiran2@gmail.com"
      ],
      "line": 34
    },
    {
      "cells": [
        "Telephone",
        "9806558046"
      ],
      "line": 35
    },
    {
      "cells": [
        "Password",
        "Raja213"
      ],
      "line": 36
    },
    {
      "cells": [
        "Confirm_Password",
        "Raja213"
      ],
      "line": 37
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I subscribe to Newsletter",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I select privacy policy",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on the continue button and wait for a minute",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I should see user account create successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "register.i_launch_the_application()"
});
formatter.result({
  "duration": 31073059600,
  "status": "passed"
});
formatter.match({
  "location": "register.i_navigate_to_the_register_account_page()"
});
formatter.result({
  "duration": 15860004700,
  "status": "passed"
});
formatter.match({
  "location": "register.i_provide_all_the_below_detail(DataTable)"
});
formatter.result({
  "duration": 15374211600,
  "status": "passed"
});
formatter.match({
  "location": "register.i_subscribe_to_Newsletter()"
});
formatter.result({
  "duration": 75994500,
  "status": "passed"
});
formatter.match({
  "location": "register.i_select_privacy_policy()"
});
formatter.result({
  "duration": 15071588900,
  "status": "passed"
});
formatter.match({
  "location": "register.i_click_on_the_continue_button()"
});
formatter.result({
  "duration": 15154768700,
  "status": "passed"
});
formatter.match({
  "location": "register.i_should_see_user_account_create_successfully()"
});
formatter.result({
  "duration": 15954900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"common-success\"]/ul/li[3]/a\"}\n  (Session info: chrome\u003d92.0.4515.159)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-U8C8BK9\u0027, ip: \u0027192.168.0.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 92.0.4515.159, chrome: {chromedriverVersion: 92.0.4515.107 (87a818b10553..., userDataDir: C:\\Users\\om\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:49798}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: dfeafeec0850aa69a4f1d2885f87251d\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"common-success\"]/ul/li[3]/a}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy22.isDisplayed(Unknown Source)\r\n\tat com.tutorialsninja.automation.framework.Elements.isDisplayed(Elements.java:96)\r\n\tat com.tutorialsninja.automation.stepdef.register.i_should_see_user_account_create_successfully(register.java:79)\r\n\tat ✽.Then I should see user account create successfully(FeatureFiles/Register.feature:41)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 797972500,
  "status": "passed"
});
formatter.before({
  "duration": 1299876000,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Verify wheather user is able to register into the application by providing all the detail",
  "description": "",
  "id": "register-functionality-scenarios;verify-wheather-user-is-able-to-register-into-the-application-by-providing-all-the-detail",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 43,
      "name": "@Register"
    },
    {
      "line": 43,
      "name": "@four"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "I navigate to the register account page",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I provide all the below detail",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Karan"
      ],
      "line": 48
    },
    {
      "cells": [
        "LastName",
        "Mehara"
      ],
      "line": 49
    },
    {
      "cells": [
        "E-mail",
        "rewr@gmail.com"
      ],
      "line": 50
    },
    {
      "cells": [
        "Telephone",
        "9806558045"
      ],
      "line": 51
    },
    {
      "cells": [
        "Password",
        "D1$raj321"
      ],
      "line": 52
    },
    {
      "cells": [
        "Confirm_Password",
        "D1$raj321"
      ],
      "line": 53
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "I select privacy policy",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I click on the continue button and wait for a minute",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I should see the warning message stating that the user is already created",
  "keyword": "Then "
});
formatter.match({
  "location": "register.i_launch_the_application()"
});
formatter.result({
  "duration": 30667342700,
  "status": "passed"
});
formatter.match({
  "location": "register.i_navigate_to_the_register_account_page()"
});
formatter.result({
  "duration": 15622321300,
  "status": "passed"
});
formatter.match({
  "location": "register.i_provide_all_the_below_detail(DataTable)"
});
formatter.result({
  "duration": 15395061100,
  "status": "passed"
});
formatter.match({
  "location": "register.i_select_privacy_policy()"
});
formatter.result({
  "duration": 15094843600,
  "status": "passed"
});
formatter.match({
  "location": "register.i_click_on_the_continue_button()"
});
formatter.result({
  "duration": 15107300700,
  "status": "passed"
});
formatter.match({
  "location": "register.i_should_see_the_warning_message_stating_that_the_user_is_already_created()"
});
formatter.result({
  "duration": 15181700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"body:nth-child(2) div.container:nth-child(4) \u003e div.alert.alert-danger.alert-dismissible\"}\n  (Session info: chrome\u003d92.0.4515.159)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-U8C8BK9\u0027, ip: \u0027192.168.0.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 92.0.4515.159, chrome: {chromedriverVersion: 92.0.4515.107 (87a818b10553..., userDataDir: C:\\Users\\om\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:60542}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: aebc9a664409f37b06d8a8cdf5fbe527\n*** Element info: {Using\u003dcss selector, value\u003dbody:nth-child(2) div.container:nth-child(4) \u003e div.alert.alert-danger.alert-dismissible}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:413)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy22.getText(Unknown Source)\r\n\tat com.tutorialsninja.automation.framework.Elements.VerifyTextEquals(Elements.java:50)\r\n\tat com.tutorialsninja.automation.stepdef.register.i_should_see_the_warning_message_stating_that_the_user_is_already_created(register.java:115)\r\n\tat ✽.Then I should see the warning message stating that the user is already created(FeatureFiles/Register.feature:56)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 788665400,
  "status": "passed"
});
});