import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export type InpputType = { value: number };
export type SectionType = InpputType[];
@Component({
  selector: 'app-assignment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss'],
})
export class AssignmentComponent {
  items = [{ value: 0 }, { value: 0 }];
  private createInput(): InpputType {
    return { value: 0 };
  }

  private createSection(): InpputType[] {
    return [this.createInput()];
  }

  addInput(section: InpputType[]): void {
    section.push(this.createInput());
  }

  removeInput(section: SectionType, index: number): void {
    section.splice(index, 1);
  }

  sections: SectionType[] = [this.createSection()];

  addSection(): void {
    this.sections.push(this.createSection());
  }
  removeSection(index: number): void {
    this.sections.splice(index, 1);
  }
  onChange(section: SectionType, index: number, value: number): void {
    section[index].value = value;
    section = [...this.items];
  }
  getResult(section: SectionType): number {
    return section
      .map((input) => input.value)
      .reduce((carry, value) => carry + value, 0);
  }
}
