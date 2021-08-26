package com.tutorialsninja.automation.stepdef;

import java.util.Map;

import com.gargoylesoftware.htmlunit.javascript.host.Element;
import com.tutorialsninja.automation.framework.Elements;
import com.tutorialsninja.automation.pages.ForgottenPasswordPage;
import com.tutorialsninja.automation.pages.HeaderSection;
import com.tutorialsninja.automation.pages.LoginPage;
import com.tutorialsninja.automation.pages.MyAccountPage;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

@SuppressWarnings("deprecation")
public class Login {
	

    
	HeaderSection headersection = new HeaderSection();
	LoginPage loginpage = new LoginPage();
	
	@Given("^I navigate to Account Login page$")
	public void i_navigate_to_Account_Login_page() throws InterruptedException{
		
		Elements.click(HeaderSection.MyAccountLink);
		Elements.click(HeaderSection.Login);
		Thread.sleep(30000);
	   
	}

	@When("^I login to the application below provide detail$")
	public void i_login_to_the_application_below_provide_detail(DataTable dataTable) throws Throwable {
	    
		Map<String, String> map = dataTable.asMap(String.class,String.class);
		
		Elements.TypeText(LoginPage.Email,map.get("email"));
		Elements.TypeText(LoginPage.Password,map.get("Password"));
		
	/*	Elements.SendKeys(LoginPage.Email,user_name);
		Elements.SendKeys(LoginPage.Password,Password);
		Thread.sleep(20000);
		Elements.click(LoginPage.LoginButton);    */
		Thread.sleep(20000);
		Elements.click(LoginPage.LoginButton);
		Thread.sleep(30000);
	}

	@Then("^I should see that the User is able to successfully login$")
	public void i_should_see_that_the_User_is_able_to_successfully_login() throws Throwable {
		
		
		Assert.assertTrue(Elements.isDisplayed(MyAccountPage.registerAffiliateaccount));
	    
	}

	@Then("^I should see an error message which informing to the user about invalid credential$")
	public void i_should_see_an_error_message_which_informing_to_the_user_about_invalid_credential() throws Throwable {
		
	   Assert.assertTrue(Elements.VerifyTextEquals(LoginPage.Warningmessage,"Warning: No match for E-Mail Address and/or Password."));
	}

	@When("^I click on the hyperlink forgot password and navigate on the Forgot Your Password page$")
	public void i_click_on_the_hyperlink_forgot_password_and_navigate_on_the_Forgot_Your_Password_page() throws Throwable {
		
	
	     Elements.click(LoginPage.ForgotPassword);
	     
	
	}

	@Then("^I enter the email \"([^\"]*)\"$")
	public void i_enter_the_email(String email) throws Throwable {
	   

		Elements.TypeText(ForgottenPasswordPage.Email,email);	
    	Elements.click(ForgottenPasswordPage.ContinueButton); 
    	
	}

	@Then("^I should see a message informing that the password reset details have been sent to the email address$")
	public void i_should_see_a_message_informing_that_the_password_reset_details_have_been_sent_to_the_email_address() throws Throwable {
	    
		Assert.assertTrue(Elements.VerifyTextEquals(ForgottenPasswordPage.Message,"An email with a confirmation link has been sent your email address."));
        Thread.sleep(15000);

	
}
}
