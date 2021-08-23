package com.tutorialsninja.automation.stepdef;

import java.util.Map;

import org.openqa.selenium.By;

import com.tutorialsninja.automation.base.Base;
import com.tutorialsninja.automation.framework.Elements;
import com.tutorialsninja.automation.pages.HeaderSection;
import com.tutorialsninja.automation.pages.RegisterPage;
import com.tutorialsninja.automation.pages.Success;

import cucumber.api.DataTable;
import cucumber.api.java.en.*;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

@SuppressWarnings("deprecation")
public class register {
	
	
	HeaderSection headersection = new HeaderSection();
	RegisterPage  registerpage  = new RegisterPage();
	Success success             = new Success();
	
	
	@Given("^I launch the application$")
	public void i_launch_the_application() throws InterruptedException  {
		Thread.sleep(15000);
		Base.driver.get(Base.reader.getUrl());
		Thread.sleep(15000);
	}

	@And("^I navigate to the register account page$")
	public void i_navigate_to_the_register_account_page() throws InterruptedException  {
		
		Elements.click(HeaderSection.MyAccountLink);
		Elements.click(HeaderSection.Register);
		Thread.sleep(15000);
	    
	}

	
	@When("^I provide all the below detail$")
	public void i_provide_all_the_below_detail(DataTable dataTable) throws InterruptedException  {
		
		Map<String, String> map = dataTable.asMap(String.class,String.class);
	
		Elements.TypeText(RegisterPage.firstName,map.get("FirstName"));
		Elements.TypeText(RegisterPage.lastName,map.get("LastName"));
		Elements.TypeText(RegisterPage.email,map.get("email"));
		Elements.TypeText(RegisterPage.telephone,map.get("Telephone"));
		Elements.TypeText(RegisterPage.password,map.get("Password"));
		Elements.TypeText(RegisterPage.confirmPassword,map.get("Password"));
		
		
	Thread.sleep(15000);
	}

	@And("^I select privacy policy$")
	public void i_select_privacy_policy() throws InterruptedException  {
		
		Elements.click(RegisterPage.PrivacyPolicy);
		
		Thread.sleep(15000);
	}

	@And("^I click on the continue button and wait for a minute$")
	public void i_click_on_the_continue_button() throws InterruptedException {
		
		Elements.click(RegisterPage.continueButton);
		Thread.sleep(15000);
	}

	@Then("^I should see user account create successfully$")
	public void i_should_see_user_account_create_successfully() throws InterruptedException{
		
	Assert.assertTrue(Elements.isDisplayed(Success.Success));
	Thread.sleep(15000);
	    
	}

	
	@Then("^I should see that user account not created$")
	public void i_should_see_that_user_account_not_created() throws Throwable {
	    Assert.assertTrue(Elements.isDisplayed(RegisterPage.RegisterBreadCrumb));
	    
	}
	
	@And("^I should see the error message \"([^\"]*)\"$")
	public void i_should_see_the_error_message(String arg1) throws Throwable {
		
		Assert.assertTrue(Elements.isDisplayed(RegisterPage.firstNamewarning));
		Assert.assertTrue(Elements.isDisplayed(RegisterPage.lastNamewarning));
		Assert.assertTrue(Elements.isDisplayed(RegisterPage.emailwarning));
		Assert.assertTrue(Elements.isDisplayed(RegisterPage.telephonewarning));
		Assert.assertTrue(Elements.isDisplayed(RegisterPage.paswordwarning));
		Assert.assertTrue(Elements.isDisplayed(RegisterPage.privacypolicywarning));
		
}

	@And("^I subscribe to Newsletter$")
	public void i_subscribe_to_Newsletter() throws Throwable {
		
		Elements.click(RegisterPage.RadioButton);
		
		
	  
	}
	
	@Then("^I should see the warning message stating that the user is already created$")
	public void i_should_see_the_warning_message_stating_that_the_user_is_already_created() throws Throwable {
		
	  Assert.assertTrue(Elements.VerifyTextEquals(RegisterPage.warningmessage,"Warning: E-Mail Address is already registered! "));
	   
	}

  
}
