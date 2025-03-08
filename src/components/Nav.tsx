import { A, useLocation } from "@solidjs/router";
import { Button } from "./ui/button";
import { For } from "solid-js";

export const navPages = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "404",
    href: "/404",
  },
];

export function Nav() {
  const location = useLocation();

  return (
    <nav class="bg-secondary">
      <ul class="container flex gap-4 items-center p-3 text-gray-200">
        <For each={navPages}>
          {page => (
            <li>
              <Button variant="link" as={A} href={page.href}>
                <span classList={{ "font-semibold": page.href === location.pathname }}>
                  {page.name}
                </span>
              </Button>
            </li>
          )}
        </For>
      </ul>
    </nav>
  );
}
