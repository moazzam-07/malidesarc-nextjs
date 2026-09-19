import { redirect } from 'next/navigation';

export const metadata = {
  title: "Hospitality Projects - SPACWORA Design Studio",
  description: "Explore authentic hospitality design and fine dining spaces by SPACWORA Design Studio.",
};

export default function HotelKarlResidencyPage() {
  redirect('/projects/haldiram-hospitality');
}
