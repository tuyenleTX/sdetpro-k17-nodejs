import Employee from "./Employee";

export default class Utils {
    public sortBySalary(employeeList: Employee[]) {
        for (let i = 0; i < employeeList.length - 1; i++) {
            for (let j = i + 1; j < employeeList.length; j++) {
                if ((employeeList[i].getSalary() + employeeList[i].getBonus()) < (employeeList[j].getSalary() + employeeList[j].getBonus())) {
                    let temp = employeeList[i];
                    employeeList[i] = employeeList[j];
                    employeeList[j] = temp;
                }
            }
        }
    }

    public sortByName(employeeList: Employee[], rule: string) {
        const copied = [...employeeList];
        if (rule === "ASC") {
            return copied.sort(function (a, b) {
                return a.getName().localeCompare(b.getName());
            })
        } else if (rule == "DESC") {
            return copied.sort(function (a, b) {
                return b.getName().localeCompare(a.getName());
            })
        }
        else {
            console.log("Invalid rule");
        }
        return copied;
    }

    public sortBySalary2(employeeList: Employee[], rule: string) {
        const copied = [...employeeList];
        if (rule === "ASC") {
            return copied.sort(function (a, b) {
                return a.getSalary() - b.getSalary();
            })
        } else if (rule == "DESC") {
            return copied.sort(function (a, b) {
                return b.getSalary() - a.getSalary();
            })
        }
        else {
            console.log("Invalid rule");
        }
        return copied;
    }
}
