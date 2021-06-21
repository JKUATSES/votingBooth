#include "sesbot.h"
#include <string.h>
#include "Nextion.h"


String courses [] = {"mecht","eee","civil","tie","marine","gegis","mech","abe","mining"};
String homepage_contents[] = {"settings","results","mail","vote","no_vote","no_vote1"};
String password_page_contents [] = {"sigma","gamma","psi","phi","alpha","epsilon","theta","nought"};
//remember to add cancel button for pages
//array and pages for other positions eg secgen
// include in docs that returned structs from initilization methods are to be added to nexTouch listener array

NexTouch *nex_listen_list[100];


struct candidate{
    String name;
    String position;
    NexText nexText;
    int results;
};

void initialization(){
    struct candidate *v;
    v->name = "sackey";
    
    String text_name = "_text";
}
genericpage_components_text* initialize_homepage(){
    NexPage homepage = NexPage(0, 0, "homepage");
    int array_length = sizeof(homepage_contents)/sizeof(homepage_contents[0]);
    genericpage_components_text *components_text [array_length];
    for(int  i = 0; i<=array_length;i++){
        String name_string;
        name_string += "text_";
        name_string+=homepage_contents[i];
        components_text[i] ->name = name_string;

        int n = name_string.length();
        const char char_array[n+1];
        strcpy(char_array, name_string.c_str());

        components_text[i]-> nexText= NexText(0, i+1, char_array);
    }
    return *components_text;
}
coursepage_components_text* initialize_courses_page(){
    NexPage courses_page = NexPage(1, 0, "courses");
    int array_length = sizeof(courses)/sizeof(courses[0]);
    coursepage_components_text *components_text [array_length];
     for(int  i = 0; i<=array_length;i++){
        String name_string;
        name_string += "text_";
        name_string+=courses[i];
        components_text[i] ->name = name_string;

        int n = name_string.length();
        const char char_array[n+1];
        strcpy(char_array, name_string.c_str());

        components_text[i]-> nexText= NexText(1, i+2, char_array);
    }
    return *components_text;

}
candidate_components_text* initialize_role(String candidates [],int page_number, String role_name){
    
    int n =role_name.length();
    const char name_char_array[n+1];
    strcpy(name_char_array, role_name.c_str());

    NexPage role_page = NexPage(page_number, 0, name_char_array);

    int array_length = sizeof(candidates)/sizeof(candidates[0]);
    candidate_components_text *components_text [array_length];
     for(int  i = 0; i<=array_length;i++){
        components_text[i] ->results = 0;
        String name_string;
        name_string += "text_";
        name_string+=candidates[i];
        components_text[i] ->name = name_string;

        int n = name_string.length();
        const char char_array[n+1];
        strcpy(char_array, name_string.c_str());

        components_text[i]-> nexText= NexText(page_number, i+1, char_array);
        
    }
    return *components_text;
}
password_page_components_text* initialize_password_page(){
    NexPage password_page = NexPage(0, 0, "password_page");
    int array_length = sizeof(password_page_contents)/sizeof(password_page_contents[0]);
    password_page_components_text *components_text [array_length];
    for(int  i = 0; i<=array_length;i++){
        String name_string;
        name_string += "bn_";
        name_string+=password_page_contents[i];
        components_text[i] ->name = name_string;

        int n = name_string.length();
        const char char_array[n+1];
        strcpy(char_array, name_string.c_str());

        components_text[i]-> nexButton= NexButton(0, i+1, char_array);
    }
    return *components_text;
}

int role_candidate_callback(void *ptr,int candidate_result,NexPage nextpage){
        candidate_result = candidate_result+1;
        nextpage.show();
        return candidate_result;
}