export interface Doughtnut {
  totalExpenses: number;
  categoryAnalytic: CategoryAnalytic[];
}

export interface CategoryAnalytic {
  idCategory: number;
  nameCategory: string;
  expenses: number;
}
