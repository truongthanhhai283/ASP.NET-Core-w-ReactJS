# ASP.NET-Core-w-ReactJS

ASP.NET Core w ReactJS

### 1. Install extensions

    - c# / C# extension
    - Nuget Gallery
    - SQLite
       setting -> enter key: private (c#) -> private member prefix: _
    - SQLite

### 2. Command

    - dotnet --info
    - dotnet -h
    - dotnet new -l
    - dotnet new sln
    - dotnet new webapi -n ProjectName
    - dotnet new classlib -n ProjectName
    - dotnet sln add ProjectName/ProjectName.csproj
    - dotnet sln list
    - dotnet add reference ProjectName
    - dotnet run/watch run
    - dotnet tool -list --global
    
    - dotnet ef -h
    - dotnet ef migrations add "text" -p Persistence -s ProjectNameAPI
    - dotnet ef database -h
    
    - dotnet ef database drop -s API -p Persistence
    - dotnet tool install/update --global 
    - dotnet-ef  --version 5.0.5
    - dotnet tool install --global 
    - dotnet-aspnet-codegenerator --version 5.0.2
    - dotnet tool install --global Cake.Tool --version 1.1.0
    - dotnet ef migrations add IdentityAdded -p Persistence -s API

    show command: ctrl + shift + p
    - Generate assets for Build and debug

### 3. Install nuget

    - Microsoft.EntityFrameworkCore.Sqlite
    - Microsoft.EntityFrameworkCore.Design
    - Microsoft.AspNetCore.Mvc.Core    
    - FluentValidation.AspNetCore
    - 
    - Microsoft.AspNetCore.Identity
    - Microsoft.AspNetCore.Authentication.JwtBearer

### 4. Install npm
    - npm install axios
    - npm install semantic-ui-react semantic-ui-css
    - npm install uuid + npm i --save-dev @types/uuid
    - npm install mobx mobx-react-lite
    - npm install @types/react-router-dom --save
    - npm install react-router-dom --save
    - npm install react-calendar / npm i --save-dev @types/react-calendar
    - npm install react-toastify
    - npm install formik
    - npm install yup --save / npm install @types/yup --save
    - npm install react-datepicker  /  npm install @types/react-datepicker
    - npm ls date-fns
    - npm install date-fns@2.16.1
### Content

### 1. Walking Skeleton Part 1 - API

        - Introduction:
            + Applcation Architecture
                Persistencs

            + Application project
                API: Receice HTTP request and response to them

                Application: Process business logic

                Domain: Contain the business entities. I'm at the centre of everything

                Persistence: I provide the connection to the DB and translate the code into SQL queries

        - Creating the .Net projects and references

        - Reviewing the project files and startup

        - The API controller and using postman
            ex: http://localhost:5000/WeatherForecast

        - Creating a domain entity

        - Adding an Entity Framework Db Context

        - Creating an Entity Framework code first migration

        - Creating the database

        - Seeding data to the Database

        - Adding an API controller

### 2. Walking Skeleton Part 2 - Client
        - create react app: npx create-react-app client-app --use-npm --template typescript

### 3. Creating a CRUD application using the CQRS + Mediator pattern
        - Clean Architecture

        - CQRS
        
        - Creating our first Query handler
        
        - Thin controllers in the API

        - Adding a Details handler

        - Adding a Create handler

        - Adding an Edit handler

        - Adding AutoMapper

        - Adding a Delete handler

        - Cancellation tokens

        - Using the debugger in VS Code

### 4. Creating a CRUD application in React
        - Introduction

        - Folder structure in React

### 5. Axios
    Convert datetime
        - Setting up axios

        - Axios types

        - Adding loading indicators

        - Posting data to the server

        - Deleting activity on the server

### 6. MobX
        - Introduction

        - What is MobX

        - Setting up MobX

        - MobX actions

        - Refactoring the app to use MobX

        - MobX strict mode

        - Selecting an Activity using MobX

        - Creating an Activity using MobX

        - Deleting an activity using MobX

        - Using a Javascript map object to store the activities

### 7. Routing
        - Introduction

        - Installing React Router

        - Adding routes

        - Adding nav links

        - Adding a details link

        - Getting an individual activity

        - Using route parameters
        
        - Adding the edit activity route

        - Adding a key to the route

        - Redirect after submission

        - Moving the home page outside of nav

### 8. Styling the User Interface
        - Introduction

        - Styling the activity list

        - Styling the list items

        - Activity details page

        - Adding the activity filter component

        - Styling the home page

### 9 Error Handing
        - Introduction

        - Validation with data annotations

        - Handling API Error responses

        - Handling API Error responses 2

        - Handling API Error responses 3

        - Handling exceptions

        - Preparing for setting up error handling in the client app

        - Using an interceptor to handle API error responses

        - Adding a not found component

        - Handling 400 errors

        - Handling 500 errors on the client

        - Handling the validation error from an invalid GUID

### 10. Form
        - Introduction

        - Setting up Formik

        - Validation in Formik

        - Creating a reusable text input

        - Creating a reusable text area

        - Creating a reusable select input

        - The date strategy

        - Using Date-FNS

        - Hooking up the form submission to Formik

### 11. Identity
        - Adding a user entity

        - Adding an IdentityDbContext

        - Configuring Identity in the Startup class

        - Adding seed users

        - Creating the user DTOs

        - Adding an account controller

        - JSON Web Tokens

        - Creating a token service

        - Authenticating to the app

        - Storing secrets in development

        - Creating an auth policy

        - Registering new users

        - -Validating the registration of users (required)

        - Getting the current user

### 12. Client side login and registration
        - Creating a login form

        - Creating the interfaces and methods

        - Creating a user store