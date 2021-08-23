package com.tutorialsninja.automation.stepdef;

import com.tutorialsninja.automation.base.Base;

import cucumber.api.DataTable;
import cucumber.api.java.en.*;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class register {
	
	
	@Given("^I launch the application$")
	public void i_launch_the_application()  {
		
		Base.driver.get(Base.reader.getUrl());
	   
	}

	@And("^I navigate to the register account page$")
	public void i_navigate_to_the_register_account_page()  {
	    
	}

	@When("^I provide all the below detail$")
	public void i_provide_all_the_below_detail(DataTable arg1)  {
	   
	}

	@And("^I select privacy policy$")
	public void i_select_privacy_policy()  {
	    	}

	@And("^I click on the continue button and wait for a minute$")
	public void i_click_on_the_continue_button() {
	   
	}

	@Then("^I should see user  account create successfully$")
	public void i_should_see_user_account_create_successfully() throws InterruptedException{
		
		Thread.sleep(10000);
	    
	}


  
}
