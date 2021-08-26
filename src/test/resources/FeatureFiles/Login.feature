Feature:  Login functionality scenarios

	@Login @One
	Scenario: Verify whether the User is able to login with valid credentials
	  Given I launch the application
	  And   I navigate to Account Login page
	  When I login to the application below provide detail
	  |email | sharmarajat360@Gmail.com |
	  |Password | D1$raj321             |
	  Then I should see that the User is able to successfully login
	  
	  
	  @Login @two
	  Scenario: Verify whether the User is able to login with invalid credentials
	  Given I launch the application
	  And   I navigate to Account Login page
	  When  I login to the application below provide detail
	  |email | sharmarajat36@Gmail.com |
	  |Password | D1$raj321             |
	  Then I should see an error message which informing to the user about invalid credential 
	  
	  
	  @Login @three
	  Scenario: Verify whether the User is able to reset forgot password 
	  Given I launch the application
	  And   I navigate to Account Login page
	  When  I click on the hyperlink forgot password and navigate on the Forgot Your Password page
	  Then  I enter the email "sharmarajat360@Gmail.com"
	  Then  I should see a message informing that the password reset details have been sent to the email address
	  
	  
	   
	  
	  
	  