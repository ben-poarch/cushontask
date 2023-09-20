Cushon Task

1. Breakdown

- Cushon already offers ISAs and Pensions to Employers (to provide to employees)
- They want to offer ISAs directly to customers (not associated to an Employer).
  -They want this to be separate functionality to the Employers functionality.
- User story:
  1. When customers invest they should be able to select single fund from larger list
  2. Restricted to a limit of 1 fund but allow design for easy implementation of lifting this limit to multiple options
  3. Once they make their selection, they should be able to enter amount to invest.
  4. The system should record the fund and amount chosen and allow them to be queried at later date.
  5. In below solution consider a customer wants to deposit £25,000 into a Cushon ISA, 100% into Cushon Equities Fund.

2. Plan

   1. Design
      1. UX design (initial sketches + Figma)
      2. Structure design (screens/components)
      3. Database design
   2. Implementation
      1. Screens
      2. Components
      3. Navigation
      4. Database (mock JSON database)

3. Design

   1. UX design

   ![UX Mockups](/uxmockups.png)

   2. Structure

   - Screens

     - Home
     - FundCustomer (task functionality)
     - NewFund
     - ViewFund
     - FundEmployer (just for completeness)

   - Components

     - BackButton
     - InvestmentCard

   - Navigation

     - StackNavigator to match current functionality of Cushon app
     - Navigation will follow tree in section 1
     - BackButton will be used in the NewFund and ViewFund screens with goBack()

   - Database
     - Mockup schema using in JSON format and matching requested specific use case:
     - see Database directory
