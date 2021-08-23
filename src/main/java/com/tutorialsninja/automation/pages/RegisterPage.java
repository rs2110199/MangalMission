package com.tutorialsninja.automation.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.tutorialsninja.automation.base.Base;

public class RegisterPage {
     
public RegisterPage() {
		
		PageFactory.initElements(Base.driver, this);
		
		
	}
	
@FindBy(id="input-firstname")
public static WebElement firstName;
	
@FindBy(id="input-lastname")
public static WebElement lastName;
	
@FindBy(xpath="//*[@id=\"input-email\"]")
public static WebElement email;
	
@FindBy(id="input-telephone")
public static WebElement telephone;
	
@FindBy(id="input-password")
public static WebElement password;
	
@FindBy(id="input-confirm")
public static WebElement confirmPassword;

@FindBy(linkText="Register")
public static WebElement RegisterBreadCrumb;
	
	
@FindBy(xpath="//*[@id=\"content\"]/form/div/div/input[1]")
public static WebElement PrivacyPolicy;
	
@FindBy(xpath="//*[@id=\"content\"]/form/div/div/input[2]")
public static WebElement continueButton;
	
	@FindBy(xpath="//*[@id=\"account\"]/div[2]/div/div")
	public static WebElement firstNamewarning;	
	
	@FindBy(xpath="//*[@id=\"account\"]/div[3]/div/div")
	public static WebElement lastNamewarning;
	
	@FindBy(xpath="//*[@id=\"account\"]/div[4]/div/div")
	public static WebElement emailwarning;
	
	@FindBy(id="input-telephone")
	public static WebElement telephonewarning;
	
	
	@FindBy(xpath="//*[@id=\"content\"]/form/fieldset[2]/div[1]/div/div")
	public static WebElement paswordwarning;
	
	@FindBy(xpath="//*[@id=\"content\"]/form/fieldset[2]/div[1]/div/div")
	public static WebElement ConfirmPasswordwarning;
	
	
	@FindBy(xpath="//*[@id=\"content\"]/form/fieldset[2]/div[1]/div/div")
	public static WebElement privacypolicywarning;
	
	@FindBy(xpath="//body/div[@id='account-register']/div[1]/div[1]/form[1]/fieldset[3]/div[1]/div[1]/label[1]/input[1]")
	public static WebElement RadioButton;
	
	@FindBy(css="body:nth-child(2) div.container:nth-child(4) > div.alert.alert-danger.alert-dismissible")
	public static WebElement warningmessage;
	
	

}


