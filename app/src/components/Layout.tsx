import type { ComponentChild, ComponentChildren } from "preact";
import { Link } from "wouter-preact";

export interface LayoutProps {
  children: ComponentChildren;
}

export default function Layout({ children }: LayoutProps): ComponentChild {
  return (
    <div>
      <header>
        <nav>
          <ol>
            <li>
              <Link to="/" children="Home" />
            </li>
          </ol>
        </nav>
      </header>
      <main children={children} />
    </div>
  );
}
