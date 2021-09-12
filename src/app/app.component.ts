import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'cmd-ui';
  currentRoute!: string;
  constructor(private _renderer2 :Renderer2, @Inject(DOCUMENT) private _document:Document, private router:Router) {
    this.router.events.subscribe(event =>{
      if (event instanceof NavigationEnd){
         this.currentRoute = event.url;
      }
   })
   }

  ngOnInit(): void {
    let script = this._renderer2.createElement('script');
    script.type=`text/javascript`;
    script.text = `
    {
      let sidebar = document.querySelector(".sidebar");
      let openBtn = document.querySelector("#btnOpen");
      let closeBtn = document.querySelector("#btnClose");
      let toggleLinks = document.querySelectorAll('.toggle_link');
      let logoDetails = document.querySelector('.logo_span');
    
      let div = document.querySelector('.logo_name');
  
      closeBtn.addEventListener("click", ()=>{
        if(sidebar.classList.contains("open")){
            logoDetails.removeChild(div);
            sidebar.classList.remove("open");
        }
      });
      openBtn.addEventListener("click", (event) => {
          if(!sidebar.classList.contains("open")){
            logoDetails.appendChild(div);
            sidebar.classList.add("open");
          }
          event.target.parentNode.classList.add("active");
      });

      function toggle(event){
          for(let toggleLink of toggleLinks){
              if(toggleLink.classList.contains('active')){
                  toggleLink.classList.remove('active');
              }
          }
          console.log(event)
          event.target.parentNode.classList.add("active");
      }
      for(let toggleLink of toggleLinks){
        toggleLink.addEventListener('click', () => {
            if(!toggleLink.classList.contains('active')){
                toggleLink.classList.add('active');
            }
        });
      }
    }`;
    this._renderer2.appendChild(this._document.body, script);
  }
}


