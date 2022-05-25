let countDesigner = countDevs = countManags = 0;
function Designer(name, surname, Salary, work, x) {
    this.name = name;
    this.surname = surname;
    this.Salary = Salary;
    this.work = work;
    if (work > 2 && work <= 5) {
        this.counSalary = this.Salary + 200;
    }
    if (work > 5) {
        this.counSalary = this.Salary * 1.2 + 500;
    }
    if (x > 1 || x< 0) {
        
        return false;
    }
    countDesigner++;
    this.x = x;
    this.counSalary *= x;
    return;
}
function Developer(name, surname, Salary, work) {
    this.name = name;
    this.surname = surname;
    this.Salary = Salary;
    this.work = work;
    if (work > 2 && work <= 5) {
        this.counSalary = this.Salary + 200;
    }
    if (work > 5) {
        this.counSalary = this.Salary * 1.2 + 500;
    }
    countDevs++;
    return;
}

function Manager(name, surname, Salary, work, team) {
    this.name = name;
    this.surname = surname;
    this.Salary = Salary;
    this.work = work;
    this.team = team;
    if (work > 2 && work <= 5) {
        this.counSalary = this.Salary + 200;
    }
    if (work > 5) {
        this.counSalary = this.Salary * 1.2 + 500;
    }
    if (team.length > 5 && team.length <= 10) {
        this.counSalary += 200;
    }
    if (team.length > 10) {
        this.counSalary += 300;
    }
    for (let i = 0; i < team.length; i++) {
        if (typeof(this.team) == Developer) {
        counDevs++;
        }
        if (typeof(this.team) == Designer) {
            countDesigner++;
        }
    }
    if (countDevs > (countDevs + countDesigner) / 2) {
        this.counSalary *= 1.1;
    }
    return;
}

function Department (manager) {
    this.manager = manager;
    this.works = manager.team;
    this.giveSalary = function() {
        for (let i = 0; i < this.manager.team.length; i++) {
            console.log(this.manager.name + " " + this.manager.surname + " отримали: " + this.manager.counSalary + " гривень");
        }
        for (let i = 0; i < this.manager.team.length; i++) {
            console.log(this.manager.team[i].name + this.manager.team[i].surname + " отримали: " + this.manager.team[i].counSalary + " гривень"); 
        }
       
    }
}

let people1 = new Designer("Andriy ", "Koshmak", 1050, 10, 0.8);
let people2 = new Designer("Max ", "Poizdnuk", 1050, 10, 0.8);
let people3 = new Developer("Anton ", "Kugut", 1050, 10);
let people4 = new Developer("Dima ", "Yaroshinsykuy", 1250, 8);
let people5 = new Developer("Vlad ", "Korenivskiy", 1200, 8);
let people6 = new Designer("Vladlen ", "Kievskiy", 1100, 6, 0.8);
let people7 = new Designer("Vicktor", "Katerunuch", 1000, 6, 0.8);
let people8 = new Developer(" Nadya ", "Denuchuch", 1000, 6);
let people9 = new Developer("Nina", "Minginer", 1500, 5);
let people10 = new Developer("Sasha ", "Tepenchak", 1500, 6);
let people11 = new Developer("Katya ", "Sypcko", 1200, 6);
let people12 = new Manager("Alina", "Chernushevuch", 3000, 8, [people1,people2,people3,people4,people5,people6,people7,people8,people9,people10,people11]);
let depart = new Department(people12);

depart.giveSalary();
