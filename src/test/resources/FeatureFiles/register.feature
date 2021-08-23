Feature: Register functionality scenarios

@Register @One
Scenario: Verify wheather user is able to register into the application by providing all the detail
           Given I launch the application
           And   I navigate to the register account page 
           When  I provide all the below detail
           |FirstName | Karan                    |
           |LastName  | Mehara                   |
           |E-mail    | rewr@gmail.com     |
           |Telephone | 9806558045               | 
           |Password  | D1$raj321                |
           |Confirm_Password | D1$raj321         |  
          And   I select privacy policy
          And   I click on the continue button and wait for a minute
          Then  I should see user account create successfully
         
  @Register @Two       
Scenario: Verify wheather user is not able to create account
           Given I launch the application
           And   I navigate to the register account page 
           And   I select privacy policy
           And   I click on the continue button and wait for a minute
           Then  I should see that user account not created 
           And   I should see the error message "please fill mandatory detail"
           
  @Register @Three
 Scenario: Verify whether the user is able to register into the application by opting for Newsletter subscription
           Given I launch the application
           And   I navigate to the register account page 
           When  I provide all the below detail
           |FirstName | Ravi                        |
           |LastName  | Kiran                       |
           |E-mail    | Ravi.kiran2@gmail.com       |
           |Telephone | 9806558046                  | 
           |Password  |    Raja213                  |
           |Confirm_Password |  Raja213             |
          And   I subscribe to Newsletter  
          And   I select privacy policy
          And   I click on the continue button and wait for a minute
          Then  I should see user account create successfully
          
@Register @four                   
Scenario: Verify wheather user is able to register into the application by providing all the detail
           Given I launch the application
           And   I navigate to the register account page 
           When  I provide all the below detail
           |FirstName | Karan                    |
           |LastName  | Mehara                   |
           |E-mail    | rewr@gmail.com           |
           |Telephone | 9806558045               | 
           |Password  | D1$raj321                |
           |Confirm_Password | D1$raj321         |  
          And   I select privacy policy
          And   I click on the continue button and wait for a minute
          Then  I should see the warning message stating that the user is already created                  
                       
