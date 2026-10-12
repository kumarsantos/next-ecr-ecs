export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="  w-full max-w-3xl  bg-white dark:bg-black ">
        <h1 className="text-4xl font-semibold">Next JS</h1>{" "}
        <p>
          This is my first Next.js app. I am learning Next.js, github action
          with aws ecr with ecs fargate. I am also learning how to deploy
          Next.js app on AWS using github action and ecs fargate.
        </p>
      </main>
    </div>
  );
}
