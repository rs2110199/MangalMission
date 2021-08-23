package com.tutorialsninja.automation.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.tutorialsninja.automation.base.Base;

public class Success {
	@FindBy(xpath="//*[@id=\"common-success\"]/ul/li[3]/a")
    public static WebElement Success;
    
    public Success() {
    	PageFactory.initElements(Base.driver, this);
     }
    

}
