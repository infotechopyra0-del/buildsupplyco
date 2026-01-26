export interface BlogPosts {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  title?: string;
  content?: string;
  publishDate?: Date | string;
  author?: string;
  coverImage?: string;
  category?: string;
}

export interface CalculatorFormulas {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  formulaName?: string;
  description?: string;
  calculationLogic?: string;
  variables?: string;
  outputUnit?: string;
  isActive?: boolean;
  lastUpdated?: Date | string;
}

export interface ContactInquiries {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  submissionDate?: Date | string;
}

export interface FAQs {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  question?: string;
  answer?: string;
  category?: string;
  isFeatured?: boolean;
  lastUpdated?: Date | string;
}

export interface Products {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  productName?: string;
  category?: string;
  description?: string;
  specifications?: string;
  coverageRate?: number;
  wastagePercentage?: number;
  productImage?: string;
  catalogue?: string
  isFeatured?: boolean;
}
export interface TeamMembers {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  name?: string;
  role?: string;
  bio?: string;
  photo?: string;
  linkedInProfile?: string;
}
