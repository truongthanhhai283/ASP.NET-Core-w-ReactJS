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
    - dotnet ef migrations add "text" -p Presistence -s ProjectNameAPI
    - dotnet ef database -h

    show command: ctrl + shift + p
    - Generate assets for Build and debug

### 3. Install nuget

    - Microsoft.EntityFrameworkCore.Sqlite
    - Microsoft.EntityFrameworkCore.Design
    - Microsoft.AspNetCore.Mvc.Core
    - dotnet tool install/update --global 
    - dotnet-ef  --version 5.0.5
    - dotnet tool install --global 
    - dotnet-aspnet-codegenerator --version 5.0.2
    - dotnet tool install --global Cake.Tool --version 1.1.0

### 4. Install npm
    - npm install axios
    - npm install semantic-ui-react semantic-ui-css
    - npm install uuid + npm i --save-dev @types/uuid
    - npm install mobx mobx-react-lite
    - npm install @types/react-router-dom --save
    - npm install react-router-dom --save
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