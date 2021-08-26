package com.tutorialsninja.automation.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.tutorialsninja.automation.base.Base;

public class SearchPage {
	
	public SearchPage() {
		
		PageFactory.initElements(Base.driver,this);
		
	}
	
	@FindBy(xpath="//*[@id=\"search\"]/input")
    public static WebElement SearchText;
	
	@FindBy(xpath="//*[@id=\"search\"]/span/button")
	public static WebElement Lens;
	
	
    @FindBy(xpath="//*[@id=\"content\"]/div[3]/div/div/div[1]/a/img")
	public static WebElement resultProduct;
    
     @FindBy(css="input[id='button-search']+h2+p")
	public static WebElement Warningmessage;
	

}
