import { Component } from '@angular/core';
import { ServiceService } from 'src/app/core/service.service';

@Component({
  selector: 'app-find-job',
  templateUrl: './find-job.component.html',
  styleUrls: ['./find-job.component.css']
})
export class FindJobComponent {

  cjobs: any[] = [];

  constructor(private jobService: ServiceService) { }

  ngOnInit(): void {
    
    this.jobService.getJobs().subscribe(data => {
      this.cjobs = data;
    });
  }

}
