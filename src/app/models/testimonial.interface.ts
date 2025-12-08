export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  date: string;
  imageUrl?: string;
  featured: boolean;
}
