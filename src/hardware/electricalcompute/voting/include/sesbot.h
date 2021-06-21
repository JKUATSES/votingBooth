/**
 Arduino library for use by JKUAT Society of Engineering students Voting Box.
 The Voting Box uses an Arduino Mega microcontroller and a Nextion display.
 This library is to abstract the redundant functionalities required by the Voting Box.
 
 @Author Sackey Freshia
 @Date 1st January 2020
*/


#ifndef sesbot_h
#define sesbot_h


#include "Arduino.h"
#include "Nextion.h"

/**
 Initializes new page on the voting box. Can be extended to initialize a custom page
*/
struct genericpage_components_text{
    String name;
    NexText nexText;
};
/**
 Initializes page with candidates for the selected course.
*/
struct coursepage_components_text{
    String name;
    NexText nexText;
};
/**
 Holds attributes of a candidate
*/
struct candidate_components_text{
    String name;
    NexText nexText;
    int results;
};
/**
 Initializes password entry page.
*/
struct password_page_components_text{
    String name;
    NexButton nexButton;
};

/**
 Loads the necessary components to initialize voting box.
 Should be called as first method in the arduino code.
*/
void initialization();
/**
 Sets up the voting box homepage.
 Loads homepage components.
 To be used in the arduino setup code.
 @return page object(Name,nexText)
*/
genericpage_components_text* initialize_homepage();
/**
 Initializes the page that displays all the engineering courses in JKUAT
 Loads the courses as nexText
 @return page object(Name,nexText)
*/
coursepage_components_text* initialize_courses_page();
/**
 *Initializes the page that displays all candidates in the selected course
 @param candidates - Array of candidates vying for the role
 @param page_number - Number of the nextion page for the course on display
 @param role_name - Name of course or role eg Mechanical or SecGen
 @return candidate object
*/
candidate_components_text* initialize_role(String candidates [],int page_number, String role_name);
/**
 Sets up the voting box password page.
 @return page object(Name,nexText)
*/
password_page_components_text* initialize_password_page();
/**
 Callback method for when candidate is selected
 @return Candidate results
*/
int role_candidate_callback(void *ptr,int candidate_result,NexPage nextpage);
#endif