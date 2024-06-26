export interface Job {
    applicationDeadline: null | string;
    badges: {
      friendlyBadge: boolean;
    };
    careerPageId: number;
    careerPageLogo: string;
    careerPageName: string;
    careerPageUrl: string;
    city: string;
    companyId: number;
    country: string;
    description: string;
    disabilities: boolean;
    id: number;
    isRemoteWork: boolean;
    jobUrl: string;
    name: string;
    publishedDate: string;
    state: string;
    type: string;
    workplaceType: string;
  }