export interface Doughtnut {
  categoryAnalytic: CategoryAnalytic[];
  totalExpenses: number;
}

export interface CategoryAnalytic {
  idCategory: number;
  nameCategory: string;
  expenses: number;
}
