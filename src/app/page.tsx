import Content from "@/features/content/content";
import Profile from "@/features/profile/profile";

export default function Home() {
  return (
    <main className="flex flex-col justify-start gap-5 sm:gap-7">
      <Profile />

      <Content />
    </main>
  );
}
