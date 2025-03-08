import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";

export default function NotFound() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <HttpStatusCode code={404} />
      <Title>Not Found</Title>
      <h1 class="text-8xl text-primary font-bold uppercase mt-16">404</h1>
      <h2 class="text-4xl text-primary font-thin uppercase mt-10">Not Found</h2>
      <p class="mt-4 text-muted-foreground">The page you are looking for does not exist.</p>
    </main>
  );
}
