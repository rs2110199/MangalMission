package com.tutorialsninja.automation.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.tutorialsninja.automation.base.Base;

public class ForgottenPasswordPage {
	
	
	public ForgottenPasswordPage() {
		
		PageFactory.initElements(Base.driver,this);
	}
	
	
	
	@FindBy(id="input-email")
	public static WebElement Email;
	
	
	@FindBy(xpath="//body/div[@id='account-forgotten']/div[1]/div[1]/form[1]/div[1]/div[2]/input[1]")
	public static WebElement ContinueButton;
	
	@FindBy(xpath="//body/div[@id='account-login']/div[1]")
	public static WebElement Message;
	

}
