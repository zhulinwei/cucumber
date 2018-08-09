Feature: simple maths
  in order to do math
  Scenario: easy math
    Given a number set to 1
    When I increment the number by 1
    Then the number should contain 2

  Scenario Outline: much more math 
    Given a number set to <init>
    When I increment the number by <increment>
    Then the number should contain <result>

    Examples: 
      | init | increment | result |
      | 10   | 10        | 20     |
      | 20   | 20        | 40     |

   
