class Worker  {
	constructor(name, surname, rate, days) {
		this.name = name;
		this.surname = surname;
		this.rate = rate;
		this.days = days;
		}
getSalary () {
	return (this.days * this.rate);
	}	
}

const WorkerIvan = new Worker ('Ivan', 'Ivanovich', 100, 21);
const WorkerIvanSalary = WorkerIvan.getSalary();
console.log(WorkerIvanSalary);



