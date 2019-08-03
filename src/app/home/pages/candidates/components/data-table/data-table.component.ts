import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {FormControl} from '@angular/forms';

const data1 = {
  id: 0,
  name: 'Nagaraj',
  education: 'BE (CSE)',
  experience: '2 years',
  position: 'Sr. Software Engineer',
  noticePeriod: '1 month',
  currentSalary: '4L/year',
  expectSalary: '7L/year',
  score: 90
};
const data2 = {
  id: 0,
  name: 'Sathya',
  education: 'BSC',
  experience: '1 years',
  position: 'HR Management',
  noticePeriod: '3 month',
  currentSalary: '2L/year',
  expectSalary: '3L/year',
  score: 70
};
const data3 = {
  id: 0,
  name: 'Raj',
  education: 'BCA',
  experience: '1 years',
  position: 'Testing Engineer',
  noticePeriod: '2 month',
  currentSalary: '3L/year',
  expectSalary: '6L/year',
  score: 84
};

const datas1 = Array.from({length: 5}, (_, i) => ({...data1}));
const datas2 = Array.from({length: 5}, (_, i) => ({...data2}));
const datas3 = Array.from({length: 5}, (_, i) => ({...data3}));
const datas = [...datas1, ...datas2, ...datas3].sort((a, b) => {
  return +(Math.floor(Math.random() * 10) % 2 === 0) < 1 ? -1 : 1;
});

datas.forEach((data, idx) => data.id = idx);

@Component({
  selector: 'candidates-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  datas$ = of(datas);
  displayedColumns: string[] = [
    'id',
    'name',
    'education',
    'experience',
    'position',
    'noticePeriod',
    'currentSalary',
    'expectSalary',
    'score'
  ];
  candidateSearchControl = new FormControl('');

  constructor() {
  }

  ngOnInit() {
  }

}
