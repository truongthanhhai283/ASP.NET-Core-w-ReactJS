# ASP.NET-Core-w-ReactJS
ASP.NET Core w ReactJS


### 1. Install extensions
    - c# / C# extension
    - Nuget Gallery
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

    show command: ctrl + shift + p
    - Generate assets for Build and debug

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