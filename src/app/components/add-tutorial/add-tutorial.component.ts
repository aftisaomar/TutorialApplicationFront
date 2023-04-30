import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent  implements OnInit, OnChanges{

   constructor(private tutorialService : TutorialService){}

   ngOnChanges(): void {
      
      console.log(this.tutorial.title);
   }
   ngOnInit(): void {
     
   }

   tutorial : Tutorial = {

      title : '',
      description :  '',
      published : false,
      
   }

   submitted : boolean = false;


   saveTutorial() {
      

      this.tutorialService.create(this.tutorial).subscribe({

         next : (res) => {

            console.log(res);
            this.submitted = true;
         },

         error : (err) =>  console.log(err)

      })
   }

   clear(): void {

      this.submitted = false;
      this.tutorial = {
         title: '',
         description: '',
         published: false
       };
   }

   

   

}
