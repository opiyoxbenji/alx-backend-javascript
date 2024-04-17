// Student interface
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "Benja",
	lastName: "Opiyos",
	age: 22,
	location: "Kampala",
};

const student2: Student = {
	firstName: "Aaronne",
	lastName: "Ocen",
	age: 23,
	location: "Gulu",
};

// array containing the students
const studentsList: Student[] = [student1, student2];

function renderTable(): void {
	const table = document.getElementById("students-table");

	studentsList.forEach(student => {
		const row = document.createElement("tr");

		const firstNameCell = document.createElement("td");
		firstNameCell.textContent = student.firstName;
		const locationCell = document.createElement("td");
		locationCell.textContent = student.location;

		row.appendChild(firstNameCell);
		row.appendChild(locationCell);

		if (table) {
			table.appendChild(row);
		}
	});
}

document.addEventListener("DOMContentLoaded", renderTable);
