Feature:  Search functionality scenarios

	@Search @One
	Scenario: Verify whether the User is able to Search for product 
	  Given I launch the application
	  When  I search the product "Samsung SyncMaster 941BW"
	  Then  I should see the product in the search result address
	 
	 
	 @Search @two
	Scenario: Verify whether the User is able to Search for product which is not available 
	  Given I launch the application
	  When  I search the product "Apple I Phone"
	  Then  I should see the page displaying the message "There is no product that matches the search criteria."
	   