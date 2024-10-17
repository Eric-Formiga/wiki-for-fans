export interface Member {
  id: number;
  name: string;
  images: string[];
  debut: {
    manga?: string;
    anime?: string;
    novel?: string;
    movie?: string;
    game?: string;
  };
  personal?: {
    status?: string;
    classification?: string;
    affiliation?: string;
    birthdate?: string;
    sex?: string;
    age?: {
      firstAppearance?: string;
      latestAppearance?: string;
    };
  };
  jutsu?: string[];
  tools?: string[];
  voiceActors?: {
    japanese?: string;
    english?: string[];
  };
}

export interface AkatsukiData {
  akatsuki: Member[];
  currentPage: number;
  pageSize: number;
  totalMembers: number;
}

