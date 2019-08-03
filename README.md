# Angular Best Practice and Starter kit


   While developing the medium or large level project, it will be 
 the biggest thing because there are lot of problem may come in future
 by bad project structure and coding styles. To avoid these thing
 i have created this project. 

  
   This project written in angular 7. That doesn't matter, The following
 style guides are applicable for all of the Angular Versions. 
 
 ### What are the things are written in this project.
       
        1. Project Structure
        2. Angular style guide
        3. HTML Style guide
        4. SASS Style guide
 
  ### What are the things are available in this project.
  
        1. Custom Angular material theme setup, Typography setup.
        2. SCSS utilities with theme and typo utilities.  The SCSS utilities 
           will explain in the style folder itself.
        3. Routing setup.
        4. configuration written with decarators (Name , Version)
        5. Message services for loading, popup, snackbars.
        6. Sign In, Sign up also available.
             
 >If you are going to start a new angular project, you can use this
 project. if you are any doupt or issue you can post that in gitub issue
 or you can send mail to us `shadowhijackers@gmail.com`. We will try to 
 solve your issue as soon as possible.


## Project Structure (Simple overview)
        
     |-- src
          |-- app
             |-- angular-material
             |-- auth
                 |-- components
                 |-- containers
                 |-- auth.component.ts | html | scss | spec.ts
                 |-- auth.module.ts
                 |-- auth.routing.module.ts
             |-- common
             |-- config
                 |-- app.config.ts
                 |-- config.module.ts
                 |-- index.ts
             |-- core
                 |-- layouts
                     |-- compnents
                 |-- models
                     |-- abstracts (or interfaces)
                        |-- http
                            |-- payloads
                            |-- response
                            |-- index.ts
                     |-- enums
                         |-- contstants.enum.ts
                         |-- index.ts         
                 |-- providers
                     |-- guards
                     |-- http
                     |-- http-interceptors
                     |-- index.ts 
             |-- home
                 |-- components
                     |-- header
                         |-- header.component.ts | html | scss | spec.ts
                 |-- pages
                     |-- candidates
                         |-- components
                             |-- data-table.component.ts | html | scss | spec.ts   
                             |-- profile.component.ts | html | scss | spec.ts
                             |-- index.ts
                         |-- containers
                             |-- list
                                 |-- list.component.ts | html | scss | spec.ts  
                         |-- store
                             |-- store.module.ts 
                         |-- candidates.component.ts | html | scss | spec.ts
     
                         |-- candidates.module.ts
                         |-- candidates-routing.module.ts                  
             |-- app.component.ts | html | scss | spec.ts
             |-- 404.ts  
             |-- app-routing.module.ts 
             |-- shared
                 |-- components
                 |-- directives
                 |-- pipes
                 |-- shared.module.ts
             |-- store
                 |-- auth
                 |-- state.ts
                 |-- store.module.ts      
          |-- assets
             |-- css
             |-- images
             |-- icons 
             |-- js             
          |-- environments
          |-- styles (or scss)
              |-- classes
              |-- mixins
              |-- functions
              |-- _index.scss
              |-- _theme.scss
              |-- _reboot.scss
              |-- _variable.scss
              |-- _layout-common.scss    
          |-- styles.scss   

# Style Guides

## Angular Style guide
   We are following the __Angular Official__ style guides for maintain the angular **components**, **pipes**, **directive**, 
  **service** and **modules** 
 
## SCSS Style guide
   We are following the __BEM (Block Element Modifier)__ guide for **SCSS** styling.
 This style guide will be useful for applying styles and also we are following
 some style guide from angular material to manage theme setup and common layout style
 and global styles.
 
## HTML Style guide 
   We are following __Google official HTML style__ guide for **HTML** tag styles. it will
 be useful to manage the HTML Tags. That contains some cool tips. it will prevent you
 from bad **HTML** Tags styles.
 
 # Git Commit Message Type following from phase 2 and mile stone 2. 
 
      1. fixed - issue fixed
      2. feat(scope) - UI design working 
      3. build - deployment
      4. chor - other that doesn't affect the test and src code
      5. perf - performance improvement
      6. feat(api integration) - API integration
      7. clean - code clean up
      8. style - code style like adding semi colon, line space
      9. beaking change - any breaking change in the code
     10. refactor - refactor the code
     11. test - unit testing commits
    
 
     
 #### Syntax: 
      
    commitType (scope): Subject of the commit (max 52 chars)
    
    long Description
    
    BREAKING CHANGE: message
    
    Closed issue ids
    
    
 #### Example
 
    1. fixed: Multiple request in search criteria page
       
       long description
       
       BREAKING CHANGE: breaking change
       
       Closes  issues  #001, #002   
    
    
    2. feat(design): inprogress: Task and assignment in dashboard
          
    3. chor(git commit message rules): Updated readme document
    

## Tips
    1. Use NGXS for state management ( before going to use state management frameworks like NGXS, NGRX,REDUX. 
       should know where you have to use this. thats very important thing ).
    2. Follow Pro HTML and CSS design pattern for creating styles because it will contain some awsome ticks
       that will help you increase you designing knowledge.
    3. Use OOAD (Design pattern), it will make your project reusable, clean and neat. atleast know the
       some common pattern like Singleton, Facade, Observe, factory, statergy patterns to use it.
    4. Avoid using multiple web design frameworks. use any one to avoid theme collision.
    5. Use SVG Type icons.
    6. Avoid using Loadsh or other libraries for simple array utilities. there are some cool predefined
       methods available in javascript itself on nowdays.
    7. Should Know the use of navigator.onLine. its not for online and offline check its for network connected
       or not.
    6. Use angular flexlayout to reduce the amount of scss code. 
    8. Use webpack proxy if you are going to use the build file in same backend server instead seperate
      server of frontend. it will avoid add CORS setup in dev server.           
    9. Use MICRO FRONTEND architecture for large project to avoid maintainabilty and deployment problems.   
    10. Avoid directly manipulating the DOM elements instead of use angular framwork things.                

> Using The best Editor is very important for medium and large level project. I am always use the Jetbrains
IDE like `webstorm`, `goland` like that. These IDEs are awesome tools to reduce work load.

