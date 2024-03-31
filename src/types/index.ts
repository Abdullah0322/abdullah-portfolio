export type TProject = {
  title: string;
  startDate: string;
  description: string;
  images: string[];
  url: string;
  technologies: {
    class: string;
    name: string;
  }[];
};
