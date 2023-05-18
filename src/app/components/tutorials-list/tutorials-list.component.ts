import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})
export class TutorialsListComponent  implements OnInit{


  constructor(private tutorialService : TutorialService){ }
 
  title=''
  tutorials?:Tutorial[]
  currentIndex = -1
  currentTutorial:Tutorial ={}

  ngOnInit(): void {
    this.retrieveTutorial()
  }


  retrieveTutorial() : void {

    this.tutorialService.getAll().subscribe({

      next : (data) => {

        this.tutorials = data;
        console.log(data)
      },

      error : (err) => console.error(err)

    })

  }

  searchTitle() : void {

    this.currentIndex = -1
    this.currentTutorial = {}

    this.tutorialService.findByTitle(this.title).subscribe({

      next : (data) => {
        this.tutorials = data
        console.log(data)

      },

      error : (err) => console.error(err)

    })

  }


  setActiveTutorial(tutorial : Tutorial,index :number) : void {

      this.currentIndex = index;
      this.currentTutorial = tutorial

  }

  removeAllTutorials() : void {

    this.currentIndex=-1
    this.currentTutorial={}

    this.tutorialService.deleteAll().subscribe({

      next : (data) => {
        this.retrieveTutorial()
        console.log(data)
      },
      error : (err) => console.error(err)

    })

  }

}
