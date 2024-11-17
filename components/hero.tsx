import NextLogo from "./next-logo";
import SupabaseLogo from "./supabase-logo";

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <h1 className="sr-only">Web Image Search </h1>
        <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
            Search your images using the {""}
            <a
                href="https://unsplash.com/"
                target="_blank"
                className="font-bold hover:underline"
                rel="noreferrer"
            >
                Unsplash API
            </a>
        </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
