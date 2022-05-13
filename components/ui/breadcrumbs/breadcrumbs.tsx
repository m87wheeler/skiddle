import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BreadcrumbsContainer } from "./styles";

const Breadcrumbs = () => {
  const { pathname } = useRouter();

  // calculate breadcrumbs from URL pathname
  const paths = React.useMemo(() => {
    const array = pathname.split("/");
    array.pop();
    array.shift();
    return array;
  }, [pathname]);

  // TODO - this hijacks the breadcrumb paths "events" and "artists" due to
  // TODO - there not being an actual events/artists page in this demo
  const hijackPath = React.useCallback((path: string) => {
    if (path === "events" || path === "artists") return "";
    return path;
  }, []);

  return (
    <BreadcrumbsContainer basePage={paths.length < 1}>
      {paths.map((path, i) => (
        <li key={i}>
          <Link href={`/${hijackPath(path)}`}>{path}</Link>
        </li>
      ))}
    </BreadcrumbsContainer>
  );
};

export default Breadcrumbs;
