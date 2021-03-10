# GymPad

The live production code for the React Native app and Django REST backend is not publically available for view. This project is a React web app designed to bring most of the same functionality from the app to the browser.

React Native app: https://apps.apple.com/gb/app/gympad/id1505074064/ 
App Demo (3 mins): https://youtu.be/LDuSeBwlIoE 

## Features
So far have built out some layout features to help structure the different pages.

* MultiColumn component allows the user to add as many columns as they need, controlling their share of the screen and
when the columns disappear as the window width shrinks. The content of the columns will change as fewer appear on screen
to compensate for any content that is required from the no longer visible columns.
* Form components render an array of fields, reuasable for all forms. Currently only render text inputs but will be expanded to support multiple choice fields etc.
* Navigation routes change depending on whether a user is logged in. When not authenticated users are always redirected to the login page. 
