const inquirer = require('inquirer');
const MenuController = require('./controllers/MenuControllers');
const menu = new MenuController();

menu.clear();
menu.main();