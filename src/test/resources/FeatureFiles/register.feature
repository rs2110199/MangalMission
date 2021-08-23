Feature: Register functionality scenarios

Scenario: Verify wheather user is able to register into the application by providing all the detail
           Given I launch the application
           And   I navigate to the register account page 
           When  I provide all the below detail
           |FirstName | Rajat                    |
           |LastName  | Sharma                   |
           |Email     | Sharmarajat360@gmail.com |
           |Telephone | 980655806                |
           |Password  | D1$raj321                |  
          And   I select privacy policy
          And   I click on the continue button and wait for a minute
          Then  I should see user  account create successfully
          