export interface ItemSection {
  color?: string;
  icon?: string;
  startDate: string;
  endDate?: string;
  title: string;
  subtitle: string;
  text: string;
  items?: ISkillsSection[];
}
export interface ISkillsSection {
  color: string;
  label: string;
  icon: string;
}

export interface ISection {
  label: string;
  title: string;
  items: ItemSection[];
}
