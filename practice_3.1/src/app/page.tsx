import Image from "next/image";
import styles from "./page.module.css";
import Card from '@/app/components/Card/Card';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
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
