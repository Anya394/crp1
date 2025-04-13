'use client'

import Image from "next/image";
import Card from '@/app/components/Card/Card';
import { css } from '../../styled-system/css';

export default function Home() {
  return (
    <div className={css({ padding:"5px", display:"flex", justifyContent:"center" })}>
      <main className={css({ padding:"5px", width:"70%" })}>
        <Card
          title="TypeScript Card"
          content="This is typed Card component."
          sizeButton="lg"
        />
        <Card
          title="Variant 2"
          content="Notice the different button style."
          variantButton="right"
        />
        <Card
          title="Variant 3"
          content="Notice the different button style."
          variantButton="left"
          sizeButton="sm"
        />
      </main>
    </div>
  );
}
