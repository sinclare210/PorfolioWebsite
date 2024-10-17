import { Button } from "@/components/ui/button"
import Navbar from "./components/Navbar"
import Intro from "./components/Intro"
import Stack from "./components/Stack"


export default function App() {
  return (
    <div className="w-full h-screen overflow-x-hidden">
    <Navbar/>
    <Intro/>
    <Stack/>
    </div>
  )
}



