import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';
import { FirebaseuiAngularLibraryService } from 'firebaseui-angular';
import { AngularFireDatabase} from '@angular/fire/database';
import { DataService } from '../data.service';
import { User } from '../user'
@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  
  constructor(
    private db: AngularFireDatabase
    ) { 
    const my_user = db.object('user');
    // set() for destructive updates
    //var current_user = dataservice.getData;
    //my_user.set({ title: current_user});
  }
  private canvas: any;
  private objs: any;
  private json;
  public val;
  ngOnInit(): void {
    // create a rectangle object
    this.canvas = new fabric.Canvas('canvas');
    this.val = '#800080';
    var rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 300,
      height: 20,
      angle: 45
    });
    this.canvas.isDrawingMode= 1;
    this.canvas.freeDrawingBrush.color = "purple";
    this.canvas.freeDrawingBrush.width = 10;
    this.canvas.renderAll();
    
  }
  done() {
    console.log('here');
    this.objs = this.canvas.getObjects().map(function(o) {
      return o.set('active', true)});
    console.log(this.objs);
    this.json = this.canvas.toJSON();
    


  }

  toggleDrawing(){
    this.canvas.isDrawingMode = !this.canvas.isDrawingMode;
  }

  restore(){
    if(this.json)
      this.canvas.loadFromJSON(this.json, this.canvas.renderAll.bind(this.canvas));
  }

  clear(){
    this.canvas.clear();
  }

  change_colour(){
    this.canvas.freeDrawingBrush.color = this.val;
  }
}
