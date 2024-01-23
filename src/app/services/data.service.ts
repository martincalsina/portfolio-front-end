import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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

  private userSubject: Subject<void> = new Subject<void>();
  private educationSubject: Subject<void> = new Subject<void>();
  private experienceSubject: Subject<void> = new Subject<void>();
  private skillsSubject: Subject<void> = new Subject<void>();
  private projectsSubject: Subject<void> = new Subject<void>();
  private networkSubject: Subject<void> = new Subject<void>();

  private loadingSubject: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient) {
  }

  //get subject

  getUserSubject(): Subject<void> {
    return this.userSubject;
  }

  getEducationSubject(): Subject<void> {
    return this.educationSubject;
  }

  getExperienceSubject(): Subject<void> {
    return this.experienceSubject;
  }

  getSkillsSubject(): Subject<void> {
    return this.skillsSubject;
  }

  getProjectsSubject(): Subject<void> {
    return this.projectsSubject;
  }

  getNetworkSubject(): Subject<void> {
    return this.networkSubject;
  }

  getLoadingSubject(): Subject<boolean> {
    return this.loadingSubject;
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
    return this.http.put(`${this.backendUrl}/user/edit`, {
      userId: user.getId(),
      email: user.getEmail(),
      password: user.getPassword(),
      name: user.getName(),
      headline: user.getHeadline(),
      description: user.getDescription(),
      picture: user.getPicture()
    });
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
    return this.http.put(`${this.backendUrl}/education/edit`, {
      educationId: education.getId(),
      institution: education.getInstitution(),
      title: education.getTitle(),
      description: education.getDescription(),
      startDate: education.getStartDate(),
      endDate: education.getEndDate()

    });
  }
  
  deleteEducation(id: number): Observable<any> {
    return this.http.delete(`${this.backendUrl}/education/delete/${id}`);
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
    return this.http.put(`${this.backendUrl}/experience/edit`, {
      experienceId: experience.getId(),
      institution: experience.getInstitution(),
      position: experience.getPosition(),
      description: experience.getDescription(),
      startDate: experience.getStartDate(),
      endDate: experience.getEndDate()

    });
  }

  deleteExperience(id: number): Observable<any> {
    return this.http.delete(`${this.backendUrl}/experience/delete/${id}`);
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
    return this.http.put(`${this.backendUrl}/skill/edit`, {
      skillId: skill.getId(),
      name: skill.getName(),
      icon: skill.getIcon(),
      description: skill.getDescription(),
      isSoft: skill.getIsSoft()
    });
  }

  deleteSkill(id: number): Observable<any> {
    return this.http.delete(`${this.backendUrl}/skill/delete/${id}`);
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
    return this.http.put(`${this.backendUrl}/project/edit`, {
      projectId: project.getId(),
      name: project.getName(),
      description: project.getDescription(),
      picture: project.getPicture(),
      url: project.getUrl()
    });
  }

  deleteProject(id: number): Observable<any> {
    return this.http.delete(`${this.backendUrl}/project/delete/${id}`);
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
    return this.http.put(`${this.backendUrl}/network/edit`, {
      networkId: network.getId(),
      name: network.getName(),
      icon: network.getIcon(),
      url: network.getUrl()
    });
  }

  deleteNetwork(id: number): Observable<any> {
    return this.http.delete(`${this.backendUrl}/network/delete/${id}`);
  }



}
