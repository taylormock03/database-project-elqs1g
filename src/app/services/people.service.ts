import { Injectable , OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService   {
  people=[];
  valid: any;
  constructor() {
      /* ====LOCALSTORAGE========
    Local storage stores data as key-value pairs, and the values are stored as "strings". 
    So, if we must JSON.stringify when we put them into LocalStorage and we must 'parse' the string into a valid object. when we retrieve it.
    */
    if (localStorage.people == null ) {
        localStorage.setItem('people', JSON.stringify(this.people));
    }

  } //end constructor


  getPeople() {
    let people = JSON.parse(localStorage.getItem('people'));
    return people;
  }

  // this FUNCTION accepts 'one' parameter 'person'
  // and pushes this parameter into the peole array
  addPerson(person): void {
    let people = JSON.parse(localStorage.getItem('people'));
    people.push(person);
    localStorage.setItem('people', JSON.stringify(people));
  }


  editPerson(person, id): void {
    let people = JSON.parse(localStorage.getItem('people'));
    people[id] = person;
    localStorage.setItem('people', JSON.stringify(people));
  }

  deletePerson(id): void {
    let people = this.getPeople()
    people.splice(id, 1);
    localStorage.setItem('people', JSON.stringify(people));
  }

  checkAdd(addValues): void {
    //check if inputs in the add are valid
    this.valid = "pass";
    if (typeof addValues.fName === 'undefined' || addValues.fName == null || addValues.fName == "") {
      this.valid = "frnameFail";
    }
    console.log("fName is " + addValues.fName); //debugging output
    console.log("valid is inside check " + this.valid); //debugging output

    return this.valid;
  } // end checkadd


}  // end class




