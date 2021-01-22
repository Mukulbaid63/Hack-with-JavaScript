# Welcome to CLI Calculator

Hi! Welcome to CLI Calculator using node js. You are free to contribute to this program and add functions!

# Starting instructions

Make sure you have [Node js](https://nodejs.org/en/) installed to your machine! Cd to the directory of CLI calculator and run: 

    npm init
     
This will install all the dependencies required to run this program. At the creation of this program, I currently have the following dependencies. 
```
	chalk@^4.1.0
    validator@^13.5.2
	yargs@^16.2.0
```
Once installed you can now run the program! 

## Commands

To **add** numbers, you run with this command, where `[numbers]` are numbers separated with space
```
node index.js add [numbers]
```
![add](2)
To **subtract** numbers, you run with this command, where `[numbers]` are numbers separated with space. In case of subtraction, specify the minuend in the first argument.
```
node index.js subtract [numbers]
```
![subtract](3)
To **multiply** numbers, you run with this command, where `[numbers]` are numbers separated with space.
```
node index.js multiply [numbers]
```
![multiply](4)
To **divide** numbers, you run with this command, where `[numbers]` are numbers separated with space. 
```
node index.js divide [numbers]
```
![divide](5)
To **see** all currently supported commands and **help** on some commands:
```
node index.js --help
```
![help](1)
To see the current **version** of the program
```
node index.js --version
```
## File contents

The following are the contents of the program and its uses:
+ `index.js` - the index.js file contains the parsing of the command line
+ `calculator.js` - this includes all exports and functions for our cli calculator

## Credits

Thanks to [Zidrex Andag](https://www.linkedin.com/in/john-zidrex-andag-3285b31a7/) for contributing to this project

[1]: assets/img/help.JPG "help"
[2]: assets/img/add.JPG "add"
[3]: assets/img/subtract.JPG "subtract"
[4]: assets/img/multiply.JPG "multiply"
[5]: assets/img/divide.JPG "divide"