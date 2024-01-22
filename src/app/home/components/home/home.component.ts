import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { Education } from '../../../model/Education';
import { User } from '../../../model/User';
import { Experience } from '../../../model/Experience';
import { Skill } from '../../../model/Skill';
import { Project } from '../../../model/Project';
import { Network } from '../../../model/Network';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  private userId!: number;
  private data?: any;
  public userData?: User;
  public educationData?: Education[];
  public experienceData?: Experience[];
  public skillsData?: Skill[];
  public projectsData?: Project[];
  public networkData?: Network[];

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {

    this.route.params.subscribe(params => {

      this.userId = params['id'];
      console.log('User ID:', this.userId);

      this.dataService.getUserById(this.userId).subscribe(data => {

        //console.log("user data:", data);

        this.data = data;
        this.userData = this.getUser(data);
        this.educationData = this.getEducationData(data.educations);
        this.experienceData = this.getExperienceData(data.experiences);
        this.skillsData = this.getSkillData(data.skills);
        this.projectsData = this.getProjectData(data.projects);
        this.networkData = this.getNetworkData(data.networks);

        /*
        console.log("user", this.userData);
        console.log("education", this.educationData);
        console.log("experience", this.experienceData);
        console.log("skills", this.skillsData);
        console.log("project", this.projectsData);
        console.log("network", this.networkData);
        */

        sessionStorage.setItem("userId", this.userId?.toString());

      }, error => {
        console.log("There is no user with the given id", error);
      });

    });

  }

  private getUser(data: any): User {
    return this.parseUser(data);
  }

  private parseUser(data: any): User {

    let user: User = new User(
      data.id,
      data.email,
      data.password,
      data.name,
      data.headline,
      data.description,
      data.picture
    )

    return user;

  }

  private getEducationData(data: any[]): Education[] {

    let educationsData: Education[] = [];

    for (let educationData of data) {
      let education = this.parseEducation(educationData);
      educationsData.push(education);
    }

    return educationsData;
    
  }

  private parseEducation(data: any): Education {

    let education: Education = new Education(
      data.id,
      data.institution,
      data.title,
      data.description,
      this.getDate(data.startDate)!,
      this.getDate(data.endDate),
      this.userId
    );


    return education;

  }

  private getExperienceData(data: any[]): Experience[] {

    let experiencesData: Experience[] = [];

    for (let experienceData of data) {
      let experience = this.parseExperience(experienceData);
      experiencesData.push(experience);
    }

    return experiencesData;
    
  }

  private parseExperience(data: any): Experience {

    let experience: Experience = new Experience(
      data.id,
      data.institution,
      data.position,
      data.description,
      this.getDate(data.startDate)!,
      this.getDate(data.endDate),
      this.userId
    );


    return experience;

  }

  private getSkillData(data: any[]): Skill[] {

    let skillsData: Skill[] = [];

    for (let skillData of data) {
      let skill = this.parseSkill(skillData);
      skillsData.push(skill);
    }

    return skillsData;

  }

  private parseSkill(data: any): Skill {

    let skill = new Skill(
      data.id,
      data.name,
      data.description,
      data.icon,
      data.isSoft,
      this.userId
    );

    return skill;

  }

  private getProjectData(data: any[]): Project[] {

    let projectsData: Project[] = [];

    for (let projectData of data) {
      let project = this.parseProject(projectData);
      projectsData.push(project);
    }

    return projectsData;
    
  }

  private  parseProject(data: any): Project {

    let project: Project = new Project(
      data.id,
      data.name,
      data.description,
      data.picture,
      data.url,
      this.userId
    )

    return project;

  }

  private getNetworkData(data: any[]): Network[] {

    let networksData: Network[] = [];

    for (let networkData of data) {
      let network = this.parseNetwork(networkData);
      networksData.push(network);
    }

    return networksData;
    
  }

  private parseNetwork(data: any): Network {

    let network: Network = new Network(
      data.id,
      data.name,
      data.icon,
      data.url,
      this.userId
    );

    return network;

  }

  private getDate(dataDate: string): Date | null {

    if (dataDate) {
      const dateParts = dataDate.split('-');

      const year = parseInt(dateParts[0], 10);
      const month = parseInt(dateParts[1], 10) - 1;
      const day = parseInt(dateParts[2], 10);

      return new Date(year, month, day);

    } else {

      return null;

    }

  }



}
