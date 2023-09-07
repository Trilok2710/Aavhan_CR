import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  accordionItems = [
    { question: 'What kind of work am I required to do? ', answer: 'You will be publicizing the events of  Aavhan, the annual sports fest of IIT Bombay in your college and will be assigned to do tasks designed to enhance your skills.', open: true },
    { question: 'What will I gain out of it? ', answer: 'You will gain an experience which will help you develop your time management skills, team spirit and you will become a part of the sporting family of IIT Bombay. Also certificates from Aavhan IIT Bombay, gift packs, sports analysis workshops  & internship opportunities in various named NGOs will be given to the deserving Campus Ambassadors.', open: false },
    { question: 'How will we receive updates about tasks?', answer: 'You will be informed about the task through the Campus Ambassador Dashboard, social media handles as well as WhatsApp groups', open: false },
    { question: 'Who can join the program?', answer: 'Students from any college, stream, year of college can apply for the Campus Executive Internship Program.', open: false }

  ];

  toggleCollapse(index: number) {
    this.accordionItems.forEach((item, i) => {
      item.open = i === index ? !item.open : false;
    });
  }
}