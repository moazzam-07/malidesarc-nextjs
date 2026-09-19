import { redirect } from 'next/navigation';

export const metadata = {
  title: "Commercial Projects - SPACWORA Design Studio",
  description: "Explore corporate and commercial workspace design by SPACWORA Design Studio.",
};

export default function DTDCPage() {
  redirect('/projects/jkt-corporate-office');
}
