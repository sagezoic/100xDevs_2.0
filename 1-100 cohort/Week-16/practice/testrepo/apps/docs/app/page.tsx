import styles from "./page.module.css";
import { Button } from "@repo/ui/button";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <div>
        <Button appName="docs">Click me</Button>
      </div>
    </main>
  );
}
