import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { Education } from '../model/Education';
import { Experience } from '../model/Experience';
import { Skill } from '../model/Skill';
import { Network } from '../model/Network';
import { Project } from '../model/Project';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private backendUrl: string ='http://localhost:8080'; //local

  constructor(private http: HttpClient) {
  }

  //user methods

  existsByEmail(email: string): Observable<any> {
    return this.http.get(`${this.backendUrl}/user/exists/${email}`);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.backendUrl}/user/get/${id}`);
  }

  createUser(user: User): Observable<any> {
    return this.http.post(`${this.backendUrl}/user/create`, user);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.backendUrl}/user/login`,
    {
      email: email,
      password: password
    });
  }

  editUser(user: User): Observable<any> {
    return this.http.put(`${this.backendUrl}/user/edit`, user);
  }

  //education methods

  getEducationById(id: number): Observable<any> {
    return this.http.get(`${this.backendUrl}/education/get/${id}`);
  }

  listEducationByUserId(userId: number): Observable<any> {
    return this.http.get(`${this.backendUrl}/education/list/${userId}`);
  }

  createEducation(education: Education): Observable<any> {
    return this.http.post(`${this.backendUrl}/education/create`, education);
  }

  editEducation(education: Education): Observable<any> {
    return this.http.put(`${this.backendUrl}/education/edit`, education);
  }

  //experience methods

  getExperienceById(id: number): Observable<any> {
    return this.http.get(`${this.backendUrl}/experience/get/${id}`);
  }

  listExperienceByUserId(userId: number): Observable<any> {
    return this.http.get(`${this.backendUrl}/experience/list/${userId}`);
  }

  createExperience(experience: Experience): Observable<any> {
    return this.http.post(`${this.backendUrl}/experience/create`, experience);
  }

  editExperience(experience: Experience): Observable<any> {
    return this.http.put(`${this.backendUrl}/experience/edit`, experience);
  }

  //skills methods

  getSkillById(id: number): Observable<any> {
    return this.http.get(`${this.backendUrl}/skill/get/${id}`);
  }

  listSkillByUserId(userId: number): Observable<any> {
    return this.http.get(`${this.backendUrl}/skill/list/${userId}`);
  }

  createSkill(skill: Skill): Observable<any> {
    return this.http.post(`${this.backendUrl}/skill/create`, skill);
  }

  editSkill(skill: Skill): Observable<any> {
    return this.http.put(`${this.backendUrl}/skill/edit`, skill);
  }
  
  //project methods

  getProjectById(id: number): Observable<any> {
    return this.http.get(`${this.backendUrl}/project/get/${id}`);
  }

  listProjectByUserId(userId: number): Observable<any> {
    return this.http.get(`${this.backendUrl}/project/list/${userId}`);
  }

  createProject(project: Project): Observable<any> {
    return this.http.post(`${this.backendUrl}/project/create`, project);
  }

  editProject(project: Project): Observable<any> {
    return this.http.put(`${this.backendUrl}/project/edit`, project);
  }


  //network methods

  getNetworkById(id: number): Observable<any> {
    return this.http.get(`${this.backendUrl}/network/get/${id}`);
  }

  listNetworkByUserId(userId: number): Observable<any> {
    return this.http.get(`${this.backendUrl}/network/list/${userId}`);
  }

  createNetwork(network: Network): Observable<any> {
    return this.http.post(`${this.backendUrl}/network/create`, network);
  }

  editNetwork(network: Network): Observable<any> {
    return this.http.put(`${this.backendUrl}/network/edit`, network);
  }



}
