import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import 'rxjs/add/operator/map';
import {TranslateService} from '@ngx-translate/core';
@Injectable()
export class DataService {
  private headers: HttpHeaders;
  private translations: any;
  heros: Hero[];
  // private herosUrl: string;
  // private goals = new BehaviorSubject<any>(['The inital goal', 'Another silly life goal']);
  // goal = this.goals.asObservable();

  private handleError(error: any) {
      if (error instanceof Response) {
          return Observable.throw(error.json()['Error'] || 'backend server error');
      } else {
          return Observable.throw(error || 'backend server error');
      }
}

//
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
   }

  changeGoal(goal) {
    // this.goals.next(goal);
  }

  getAllHeros(): Observable<Hero[]> {
    return this.http.get('https://nodejs-example-app.herokuapp.com/heroes')
    .map(response => {
      return response;
    })
    .catch(error => this.handleError(error));
    }

    createHero(hero: any): Observable<Hero> {
      return this.http
        .post('https://nodejs-example-app.herokuapp.com/heroes', JSON.stringify({
          name: hero.name,
          alterEgo: hero.alterEgo
        }), {headers: this.headers})
        .map(response => {
          // this.showSnackBar('heroCreated');
          return response;
        })
        .catch(error => this.handleError(error));
    }


  // getHeroById(heroId: string): Observable<Hero> {
  //   return this.http.get('https://nodejs-example-app.herokuapp.com/heroes' + '/' + heroId)
  //   .map(response => {
  //     return response;
  //   })
  //   .catch(error => this.handleError(error));
  // }


  showSnackBar(name): void {
    const config: any = new MatSnackBarConfig();
    config.duration = 100;
    this.snackBar.open(this.translations[name], 'OK', config);
  }
}

export class Hero {
public id: number;
public name: string;
public alterEgo: string;
public likes: number;
public default: boolean;
}
