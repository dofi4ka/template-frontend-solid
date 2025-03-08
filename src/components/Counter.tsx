import { createSignal } from "solid-js";
import { Button } from "~/components/ui/button";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <Button class="increment" onClick={() => setCount(count() + 1)} type="button">
      Clicks: {count()}
    </Button>
  );
}
