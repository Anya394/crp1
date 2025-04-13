import Image from "next/image";
import Card from '@/app/components/Card/Card';
import { css } from '../../styled-system/css';

export default function Home() {
  return (
    <div className={css({ padding:"5px", display:"flex", justifyContent:"center" })}>
      <main className={css({ padding:"5px", width:"70%" })}>
          <Card
          title="TypeScript Card"
          content="This is a fully typed Card component with CSS Modules in Next.js."
        />

        <Card
          title="Secondary Variant"
          content="Notice the different button style."
        />
      </main>
    </div>
  );
}
