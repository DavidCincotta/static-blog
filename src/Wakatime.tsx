const waka_data="https://v44xqrj223xagx464afcfc4jcy0mocts.lambda-url.us-east-1.on.aws/"
import {useEffect,useState} from 'react'
import { WakaCodeObj, WakaLangObj } from './ChartData'
import { WakaTimeBarChart, WakaTimePieChart } from './Charts'
export const Wakatime = () => {
  const [languagesData, setLanguagesData] = useState<Object|null>(null)
  const [codeData, setCodeData] = useState<Object|null>(null)
  const [hours, setHours] = useState<string|null>(null)
  const [mins, setMins] = useState<string|null>(null)
  async function fetchWakaData(){
    try{
      const waka_code_lang = await fetch(waka_data)
      return await waka_code_lang.json()
    }
    catch(e:any){
      return null
    }
  }
  useEffect(()=>{
    const response = fetchWakaData()
    //console.log('response wakatime')
    //console.log(response)
    response.then((data)=>{
      setCodeData(data.code)
      setLanguagesData(data.languages)
      setHours(data.hours)
      setMins(data.mins)
      //console.log(data)
    }).catch((e)=>{
      //console.log("error in response")
      //console.log(e)
    })
  },[])
  return (
<div className="h-full w-full p-4">
<p className="text-lg">WakaTime Coding Statistics</p>
<br />
{codeData?
<>
<div className="w-full h-full grid grid-cols-2 gap-0 mobile:block">
<div className="col-start-1 grid"><WakaTimePieChart className="max-w-[10cm] desktop:place-self-center mobile:mx-auto" data={languagesData as WakaLangObj} title={"My Languages"} showLegend={screen.width>500}/></div>
<div className="p-8 col-start-2 mobile:p-0">
  <p className="text-lg font-black">General Stats:</p>
  <br />
  <pre className="text-sm">Primary OS:    Linux</pre>
  <br />
  <pre className="text-sm">Main Editor:   Neovim</pre>
  <br />
  <pre className="text-sm">Leetcode:      36 Problems</pre>
  <br />
  <pre className="text-sm">Waka Total:    {hours} hrs {mins} mins</pre>
  <br />
  <p className="text-lg">About WakaTime</p>
  <br />
  <p className="text-sm">This is a tool that tracks active usage of editors and coding projets I started tracking my time with this tool March 2023.</p>
  <br />
  <p className="text-sm"> The 'Broswer' language category for documentation and other development sites. Specific domains have been categorized as a "language" due to their importance.</p>
  <br />
  <p className="text-sm">This is important to note since I use Jupyter notebook as my primary Python IDE. This will appear as "localhost" alongside my standard web development activity.</p>
</div>
<div className="col-start-1 col-span-2 p-10 w-[80%] max-w-[24cm] mx-auto mobile:p-0 mobile:w-[100%]"><WakaTimeBarChart data={codeData as WakaCodeObj} title={"Hours Coding Last 30 Days"} isMobile={screen.width < 500}/></div>
</div>
</>
:
"Loading ..."}
</div>
)
}

