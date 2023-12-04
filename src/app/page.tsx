import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 bg-green-600 font-bold ">
      <Link href ={"frontpage"}>Lets discover Something ARCHITECTURAL ...
        <p>in Pakistan !</p></Link>
    </main>
  )
}
