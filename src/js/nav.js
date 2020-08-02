/*
      Menu
   ---------- 
    This is to create the menu navigation. 
    While it would have been easier to 
    hard code the navigation for each webpage,  
    I thought it would have been better if I manipulated    
    the DOM instead with JavaScript. 
    This would require a div element with the id of "menu"
    in order for this to work. Creating elements then implement
    necessary text's, attributes, and id name.
   
    Layout
    <div id="menu">
        <div class="menu-container">
            <nav id="top-menu">
                <ol class="menu-items">
                    <li> menu items 
                    <li> ... 
*/

//Create div, nav, and ol
var div = document.createElement("div");
div.className = "menu-container";

var nav = document.createElement("nav");
nav.id = "top-menu";

var ol = document.createElement("ol");
ol.className = "menu-items";

//Create an anchor element and create text for landing page
var home_page = document.createElement("a");
var home_text = document.createTextNode("Home");
//Append the text to the home_page DOM
//Then link the source of the page
home_page.appendChild(home_text);
home_page.setAttribute("href", "index.html");
home_page.id = "index";

var about_page = document.createElement("a");
var about_text = document.createTextNode("About");
about_page.appendChild(about_text);
about_page.setAttribute("href", "about.html");
about_page.id = "about";

var skills_page = document.createElement("a");
var skills_text = document.createTextNode("Skills");
skills_page.appendChild(skills_text);
skills_page.setAttribute("href", "skills.html");
skills_page.id = "skills";

var experience_page = document.createElement("a");
var experience_text = document.createTextNode("Experience");
experience_page.appendChild(experience_text);
experience_page.setAttribute("href", "experience.html");
experience_page.id = "experience";

var education_page = document.createElement("a");
var education_text = document.createTextNode("Education");
education_page.appendChild(education_text);
education_page.setAttribute("href", "education.html");
education_page.id = "education";

var projects_page = document.createElement("a");
var projects_text = document.createTextNode("Projects");
projects_page.appendChild(projects_text);
projects_page.setAttribute("href", "projects.html");
projects_page.id = "projects";

var contact_page = document.createElement("a");
var contact_text = document.createTextNode("Contact");
contact_page.appendChild(contact_text);
contact_page.setAttribute("href", "contact.html");
contact_page.id = "contact";

//Insert all pages into html_pages array
var html_pages = [];
html_pages.push(home_page);
html_pages.push(about_page);
html_pages.push(skills_page)
html_pages.push(experience_page);
html_pages.push(education_page);
html_pages.push(projects_page);
html_pages.push(contact_page);

//Loop through the content of the array
//Append the page to li then append it to ol

for (let i = 0 ; i < html_pages.length ; i++) {
    var page_title = document.title.toLowerCase();
    var li = document.createElement("li");
    var page_name = html_pages[i].id

        li.appendChild(html_pages[i]);
        ol.appendChild(li);
}

//Append the ol then div
nav.appendChild(ol);
div.appendChild(nav);

//Once the window loads append div onto the menu
window.onload = function() {
    document.getElementById("menu").appendChild(div)
}


