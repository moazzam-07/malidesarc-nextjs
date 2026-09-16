import { redirect } from 'next/navigation';

export const metadata = {
  title: "Hospitality Projects - SPACEWORA Design Studio",
  description: "Explore authentic hospitality design and fine dining spaces by SPACEWORA Design Studio.",
};

export default function HotelKarlResidencyPage() {
  redirect('/projects/haldiram-hospitality');
}
