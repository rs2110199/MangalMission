package com.tutorialsninja.automation.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.tutorialsninja.automation.base.Base;

public class LoginPage {

	
	public LoginPage() {
		
		PageFactory.initElements(Base.driver, this);
		
	}

	@FindBy(xpath="//input[@id='input-email']")
	public static WebElement Email;
	

	@FindBy(xpath="//input[@id='input-password']")
	public static WebElement Password;
	
	@FindBy(xpath="//*[@id=\"content\"]/div/div[2]/div/form/input")
	public static WebElement LoginButton;
	
	@FindBy(css="#account-login > div.alert.alert-danger.alert-dismissible > i")
	public static WebElement Warningmessage;
	
	@FindBy(linkText="Forgotten Password")
	public static WebElement ForgotPassword;
	
	
	
	
	
	
	
}
