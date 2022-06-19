import { Component } from '@angular/core';
import { Group, Student } from './entities/index'


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
    this.group.students.push(new Student("Sergei"), new Student("Sergei"), new Student("Sergei"), new Student("Sergei"));
  }
}
