import { redirect } from 'next/navigation';

export const metadata = {
  title: "Commercial Projects - SPACEWORA Design Studio",
  description: "Explore corporate and commercial workspace design by SPACEWORA Design Studio.",
};

export default function DTDCPage() {
  redirect('/projects/jkt-corporate-office');
}
