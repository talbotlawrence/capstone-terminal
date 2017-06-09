# Terminal Terminology

## Introduction

I've had a Linux terminal cheat sheet for years: I would add to it every time I learned a new command.  I have always thought it would be a great idea for someone to build a terminal dictionary, but also had descriptions and screenshots to go along with the terminal commands.  There are certainly sites that cover these commands, but not a site that thoroughly juxtaposes Linux commands with Windows commands. I quickly found out that Bash and the Windows command line had many different features that do not always coincide. However, I figured that I could create a website displaying basic commands. Admittedly, I had to stretch on some of the Windows commands in order to complete the site.  I’m sure you Linux nerds already knew this :).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
Install [Node.js](https://nodejs.org/en/download/)
```
curl nodejs.org/dist/v6.3.1/node-v6.3.1-linux-x64.tar.xz | tar -Jxf - && cp -r node-v6.3.1-linux-x64/{bin,include,lib,share} /usr/ && rm -rf node-v6.3.1-linux-x64
```
Install [http-server](http://www.npmjs.com/package/http-server)
```
sudo npm install http-server -g
```

Install [angular](https://www.npmjs.com/package/angular)
```
sudo npm install angular -g
```


Install [angular-route](https://www.npmjs.com/package/angular-route)
```
sudo npm install angular-route -g
```



### Installing
Clone repo:

```
git clone git@github.com:talbotlawrence/capstone-terminal.git
cd capstone-terminal
```
Run project in browser:

```
http-server
```
In your browser you should see somthing like this:
![terminal index_screen shot](img/index.png?raw=true)



![terminal details_screen shot](img/details.png?raw=true)

## Running the tests
No testing suites included in this project.

## Deployment
No additional resources required.
## Built With

* [JavaScript](https://www.javascript.com/) - Main Language
* [angular](https://www.npmjs.com/package/angular) - The framework used


## Author 

* **Talbot Lawrence** - [talbotlawrence](https://github.com/talbotlawrence)

## Acknowledgments
Thank you Nashville Software School
