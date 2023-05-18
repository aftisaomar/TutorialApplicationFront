import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit{


  @Input() viewMode : boolean = false;
  @Input() currentTutorial : Tutorial = {}

  message : String = ''


  constructor(
    private tutorialService:TutorialService,
    private route: ActivatedRoute,
    private router : Router ) { }


  ngOnInit(): void {

    if(!this.viewMode){

      this.getTuorial(this.route.snapshot.params['id'])

    }
    
  }
  

  getTuorial(id : String) : void{

    this.tutorialService.get(id).subscribe({

      next : (data) => {
        console.log(data)
        this.currentTutorial = data;

      },

      error : (err) => console.error(err)

    })

  }

  publishTutorial() : void {

    this.message =''

    const data = {
      title : this.currentTutorial.title,
      description : this.currentTutorial.description,
      published : true 

    }

    this.tutorialService.update(this.currentTutorial.id, data).subscribe({

      next : (data) => {
        console.log(data);
        this.message ="The tutorial has been published successfully "
      },

      error : (data) => console.error(data)

    })


  }


  updateTutorial() : void {

    this.message =''

    const data = {

      title : this.currentTutorial.title,
      description : this.currentTutorial.description,
      published : this.currentTutorial.published
    }

    this.tutorialService.update(this.currentTutorial.id, data).subscribe({

      next : (data) => {

        console.log(data)
        this.message =" Tutorial is successfully updated"

      },

      error : (data) => console.error(data)

    })


  }




  deleteTutorial() : void {

    this.tutorialService.delete(this.currentTutorial.id).subscribe({

      next : (data) => {
        console.log(data);
        this.router.navigate(['/tutorials'])
      },

      error : (data) => {
        console.error(data)
      }


    })

  }
  




}
