import { Component } from '@angular/core';
import { ServiceService } from 'src/app/core/service.service';
import { Job } from 'src/app/shared/models/model-job';

@Component({
  selector: 'app-find-job',
  templateUrl: './find-job.component.html',
  styleUrls: ['./find-job.component.css']
})
export class FindJobComponent {

  cjobs: Job[] = [];

  constructor(private jobService: ServiceService) { }

  ngOnInit(): void {
    
    this.jobService.getJobs().subscribe(
      (data) => {
        this.cjobs = data.reduce((acc, curr) => [...acc, ...curr.data], []);
        console.log("cjobs", this.cjobs)
      },
      (error) => {
        console.error('Error fetching jobs:', error);
      }
    );
  }

}
