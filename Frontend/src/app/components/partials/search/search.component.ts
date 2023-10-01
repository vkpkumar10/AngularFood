import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  implements OnInit {

  searchTerm='';

  constructor( private activatedRouter: ActivatedRoute , private router:Router) {
    activatedRouter.params.subscribe((param)=> {
      if(param.searchTerm ) this.searchTerm = param.searchTerm;

    }) ;
  }

  ngOnInit(): void {
     }
  search(term:string):void{
    if(term){
      this.router.navigateByUrl('/search/'+term);
    }
  }



}
