import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class ProfessorGuardService implements CanActivate {
  
  constructor() { }
}