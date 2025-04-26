'use client';
// import styles from "./page.module.css";
// import Link from "next/link";
// import ProductCard from "./components/ProductCard";
// import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]/route";
// import Image from "next/image";
// import mojaKravica from "@/public/images/mojakravica.jpg"
import { useState } from "react";
// import HeavyComponent from "./components/HeavyComponent";
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => 
  import('./components/HeavyComponent'),
  {
    ssr: false,
    loading: () => <p>Loading...</p>
  }
 )

export default function Home() {
  // const session = await getServerSession(authOptions)
  const [isVisible, setVisible] = useState(false)
  return (
    <main>
      {/* <Image
      src="https://bit.ly/react-cover" 
      alt="moja kravica"
      fill
      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
      className="object-cover"
      quality={100}
      priority /> */}
    {/* <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
    <Link href='/users'>Users</Link>
    <ProductCard /> */}
    <h1>Hello world</h1>
    <button onClick={ () => setVisible(true)}>Show</button>
    {isVisible && <HeavyComponent />}
  </main>
  );
}
