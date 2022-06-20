import { Component } from '@angular/core';
import { Group, Student, Teacher } from './entities/index'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isCollapsed = false;

  public group: Group;

  public ngOnInit() {
    this.group = new Group();
    this.group.name = "SEP-201"
    this.group.students.push(new Student("Sergei", 20), new Student("Gleb", 17), new Student("Batyrkhan", 19));
    this.group.students.forEach(s=> {
      s.grades = [12, 12, 10];
    })
    this.group.teacher = new Teacher("Sergei", 30)
  }
}
