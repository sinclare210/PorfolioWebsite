import { Button } from "@/components/ui/button"
import Navbar from "./components/Navbar"
import Intro from "./components/Intro"
import Stack from "./components/Stack"
import Portfolio from "./components/Portfolio"
import ContactMe from "./components/ContactMe"


export default function App() {
  return (
    <div className="w-full h-screen overflow-x-hidden bg-gray-900">
    <Navbar/>
    <Intro/>
    <Stack/>
    <Portfolio/>
    <ContactMe/>
    </div>
  )
}



