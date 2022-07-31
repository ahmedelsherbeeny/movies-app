import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/movies/services/movies.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {

  @Input() fieldone!: string
  @Input() fieldtwo!: string
  @Input() fieldthree!: string
  @Input() fieldfour!: number
  @Input('formData') formData !: FormGroup;
  categoryID: any
  isAddMode: boolean = false
  categories: any = []
  id: any = "adding"
  results: any
  // we set action button to save if we are in addmode and set it to update when we arenot in addmode
  actionbtn: string = 'Save'
  base64: any = ""

// here iam using shared component for both adding and deleting

  constructor(private moviesService: MoviesService, private acroute: ActivatedRoute,
    private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private router: Router,
    private dialogref: MatDialogRef<AddEditComponent>,private sharedService:SharedService) { }


  ngOnInit(): void {


    this.formData = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      category_id: ['', Validators.required]

    })


    this.getCategories()

// getting id from params to use it in updating movie
    this.acroute.queryParamMap.subscribe((params) => {
      this.id = params.get('movieID')
    })


    this.isAddMode = !this.id

    if (!this.isAddMode) {

      this.moviesService.getMoviebyid(this.id).subscribe((res: any) => {
        console.log(this.id)
        this.results = res
        console.log(res)
        this.categoryID = res.message.category_id

        if (res) {
          this.actionbtn = 'Update'
        }

        // when we edit we have to get the form with the data setted in it
        this.formData.controls['name'].setValue(res.message.name)
        this.formData.controls['description'].setValue(res.message.description)
       this.formData.controls['image'].setValue(res.message.image)
        this.formData.controls['category_id'].setValue(res.message.category.id)


      })

    }
   

  }



   

// getting all movies
  getmovies() {
    this.moviesService.getAllMovies().subscribe(res => {
      
      console.log(res)
    })
  }
    

  // getting categories ids

  getSelectedCategoryId(event: any) {
    this.formData.controls['category_id'].setValue(event.id)
    console.log(this.formData)

  }

  getImagePath(event: any) {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload=()=>{
      this.base64=reader.result
      this.formData.controls['image'].setValue(this.base64)


    }
    


    console.log(reader)
    
    

  }


  //
 



  



  

// getting all categories
  getCategories() {
    this.moviesService.getAllCategories().subscribe((data: any) => {
      console.log(data)
      this.categories = data
    })

  }


  // creating new movie

  createMovie() {

    this.moviesService.createMovie(this.formData.value).subscribe((res: any) => {
      console.log(res)

      this.sharedService.notifyMe("Movie created successfully","")

      console.log(this.formData)

      this.dialogref.close("saved")
      this.getmovies()
    }, (error: any) => {
      this.sharedService.notifyMe("Error while creating movie","error")

    })


  }


  // updating movie

  updateMovie() {
    console.log("hi")
    this.moviesService.updateMovie(this.formData.value, this.id).subscribe((res: any) => {
      console.log(this.formData.value)
      this.sharedService.notifyMe("Movie Updated successfully","")
      this.formData.reset();
      this.dialogref.close('update')
      this.getmovies()

      this.navigateback()


    }, (error: any) => {
      this.sharedService.notifyMe("Error while updating","error")

    })

  }

  // method to navigate back to movies after editing and adding 


  navigateback() {
    this.router.navigateByUrl('/allmovies')

  }




}
