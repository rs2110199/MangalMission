package com.tutorialsninja.automation.stepdef;

import com.tutorialsninja.automation.framework.Elements;
import com.tutorialsninja.automation.pages.SearchPage;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

@SuppressWarnings("deprecation")
public class Search {


	SearchPage search = new SearchPage(); 
	
	@When("^I search the product \"([^\"]*)\"$")
	public void i_search_the_product(String arg1) throws Throwable {
	   
		Elements.TypeText(SearchPage.SearchText,"Samsung SyncMaster 941BW");
		Thread.sleep(15000);
		Elements.click(SearchPage.Lens);
		Thread.sleep(15000);
	}

	@Then("^I should see the product in the search result address$")
	public void i_should_see_the_product_in_the_search_result_address() throws Throwable {
		Thread.sleep(15000);
		Assert.assertTrue(Elements.isDisplayed(SearchPage.resultProduct));
	}



   @Then("^I should see the page displaying the message \"([^\"]*)\"$")
   public void i_should_see_the_page_displaying_the_message(String message) throws Throwable {
    

		Assert.assertTrue(Elements.VerifyTextEquals(SearchPage.Warningmessage, message));
	   
}



}
