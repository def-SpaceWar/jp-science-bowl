import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
<div>
    <nav>
      {(router.pathname != "/") ? <Link href="/">Home</Link> : <a id="active">Home</a>}
      {(router.pathname != "/contact") ? <Link href="/contact">Contact</Link> : <a id="active">Contact</a>}
      {(router.pathname != "/about") ? <Link href="/about">About</Link> : <a id="active">About</a>}
      <a href="https://google.com" id="formButton" target="_blank">Sign Up</a>
    </nav>
    <div id="navspace"></div>
    </div>
  );
}
