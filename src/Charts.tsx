import { Chart as ChartJS, CategoryScale, LinearScale, ArcProps, ArcElement, ArcOptions, ArcBorderRadius, ArcHoverOptions, BarElement, Title, Tooltip, Legend, PointElement, LineElement, Colors, } from 'chart.js';
import {useContext,useRef,useEffect} from 'react';
import { ThemeContext } from '../pages/_app';
import {Bar, Line, Pie} from 'react-chartjs-2';
import { WakaObjToData, WakaLangObj, WakaCodeObj, WakaCodeObjToData} from '../src/ChartData'

ChartJS.register( CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement,Colors, ArcElement,);

const PieOptions = (title?:string,showLegend=true) => {
  const { state } = useContext(ThemeContext);
  return {
    responsive:true,
    plugins:{
      legend:{
        display:showLegend,
        labels:{
          color:state.useLight?'black':'white',
        },
      },
      title:{
        display:!(title=='undefined' || title==null),
        text:title,
        color:state.useLight?'black':'white',
        padding:15,
        font:{
          size:20,
          family:'mono',
          weight:'bold'
        },
      },
      tooltip:{
        enabled:true,
      }
    },
  }
}
const histogramOptions = (propTitle?:string,propYTitle?:string,propXTitle?:string,propShowTooltip=true,propShowLegend=true,ygrid=false,xgrid=true,ydur=0,xdur=0,yaxis=true,xaxis=true) => {
  const { state } = useContext(ThemeContext);
  if(propShowTooltip==null || propShowTooltip==undefined) propShowTooltip = true;
  let swapData = false;
  let optionsObj:any = {
    responsive:true,
//    transitions:{
//      show:{
//        duration:0,
//        easing:'linear',
//      },
//      hide:{
//        duration:0,
//        easing:'linear',
//      },
//    },
    animation:{
      y: {
        duration:ydur,
        easing:'linear',
        from:2000,
      },
      x: {
        duration:xdur,
        easing: 'linear',
        from: (ctx:any) => {
          console.log(ctx)
          swapData = !swapData
          return swapData?0:2000;
        },
      },
    },
    interaction:{
      intersect: false,
      mode: 'nearest',
      axis: 'xy',
    },
    plugins:{
      legend:{
        display:propShowLegend,
        labels:{
          color:state.useLight?'black':'white',
        },
      },
      title:{
        display:!(propTitle=='undefined' || propTitle==null),
        text:propTitle,
        color:state.useLight?'black':'white',
        padding:15,
        font:{
          size:20,
          family:'mono',
          weight:'bold'
        },
      },
      tooltip:{
        enabled:propShowTooltip,
      }
    },
    scales:{
      y:{
        display:yaxis,
        min:0,
        title:{
          display:!(propYTitle=='undefined' || propYTitle==null),
          text:propYTitle,
          color:state.useLight?'black':'white',
          font:{
            size:20,
            family:'mono',
            weight:'normal'
          },
        },
        ticks:{
          color:state.useLight?'black':'white',
        },
        grid:{
          display:ygrid,
          color:state.useLight?'#bbb':'#444',
        },
      },
      x:{
        display:xaxis,
        title:{
          display:!(propXTitle=='undefined' || propXTitle==null),
          text:propXTitle,
          color:state.useLight?'black':'white',
          padding:15,
          font:{
            size:20,
            family:'mono',
            weight:'normal'
          },
        },
        ticks:{
          color:state.useLight?'black':'white',
        },
        grid:{
          display:xgrid,
          color:state.useLight?'#bbb':'#444',
        },
      },
    }
  }
return optionsObj
};
const manyLines = (propTitle?:string,propYTitle?:string,propXTitle?:string,propShowTooltip=true,propShowLegend=true,propY1Title?:string) => {
const { state } = useContext(ThemeContext);
  if(propShowTooltip==null || propShowTooltip==undefined) propShowTooltip = true;
  let optionsObj:any = {
    responsive:true,
    interaction: {
      intersect: false,
      mode: 'nearest',
      axis: 'xy',
    },
    plugins:{
      legend:{
        display:propShowLegend,
        labels:{
          color:state.useLight?'black':'white',
        },
      },
      title:{
        display:!(propTitle=='undefined' || propTitle==null),
        text:propTitle,
        color:state.useLight?'black':'white',
        padding:15,
        font:{
          size:20,
          family:'mono',
          weight:'bold'
        },
      },
      tooltip:{
        enabled:propShowTooltip,
      }
    },
    tension:0.3,
    scales:{
      y:{
        display:true,
        title:{
          display:!(propYTitle=='undefined' || propYTitle==null),
          text:propYTitle,
          color:state.useLight?'black':'white',
          font:{
            size:20,
            family:'mono',
            weight:'normal'
          },
        },
        ticks:{
          color:state.useLight?'black':'white',
        },
        grid:{
          color:state.useLight?'#bbb':'#444',
        },
      },
      y1:{
        display:!(propY1Title==undefined || propY1Title==null),
        position:'right',
        title:{
          display:!(propY1Title==undefined || propY1Title==null),
          text:propY1Title,
          color:state.useLight?'black':'white',
          font:{
            size:20,
            family:'mono',
            weight:'normal'
          },
        },
        ticks:{
          color:state.useLight?'black':'white',
        },
        grid:{
          color:state.useLight?'#bbb':'#444',
        },
      },
      x:{
        display:true,
        title:{
          display:!(propXTitle=='undefined' || propXTitle==null),
          text:propXTitle,
          color:state.useLight?'black':'white',
          padding:15,
          font:{
            size:20,
            family:'mono',
            weight:'normal'
          },
        },
        ticks:{
          color:state.useLight?'black':'white',
        },
        grid:{
          color:state.useLight?'#bbb':'#444',
        },
      },
    }
  }
return optionsObj
};
function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
export function AnimatedBarChart(props:{data:Function,className?:string,title?:string,yaxis?:string,xaxis?:string,showTooltip?:boolean,showLegend?:boolean}) {
  const chartRef = useRef<ChartJS>(null);
  const { state } = useContext(ThemeContext);
  let currentDataSet:number = 0
  let lastDataSet:number = -1
  let maxValue:number = 16
  let animationCalled:boolean = false
  async function incrementDataset(){
    const chart = chartRef.current
    currentDataSet+=1
    lastDataSet+=1
    currentDataSet = currentDataSet%maxValue
    lastDataSet = lastDataSet%maxValue
    chart?.hide(lastDataSet)
    chart?.show(currentDataSet)
    chart!.options.plugins!.title!.text! = `First Card Distribution: ${currentDataSet} Shuffles`
    chart?.update()
  }
  useEffect(()=>{
    if(animationCalled==false) {
      setInterval(incrementDataset,4000)
      const chart = chartRef.current
      //@ts-ignore
      console.log( chart.options.transitions.hide)
      //@ts-ignore
      console.log( chart.options)
    }
    animationCalled = true
  },[])
  return <> <Bar ref={chartRef} onTimeUpdate={incrementDataset} className={" rounded-[10px] p-4"+props.className}  options={histogramOptions(props.title,props.yaxis,props.xaxis,props.showTooltip,props.showLegend,false,false,1000,1000)} data={props.data(state.useLight,currentDataSet)} /> </>
}
export function LineChart(props:{data:Function,xaxis?:string,yaxis?:string,className?:string,height?:string,width?:string,title?:string,showTooltip?:boolean,y1title?:string,showLegend?:boolean,options?:Function}){
  const chartRef = useRef<ChartJS>(null);
  const { state } = useContext(ThemeContext);
  let optionsFunction = (props.options != undefined)?props.options:manyLines
  //@ts-ignore //diagnostic error on options, seems to work find and matches with documentation
  return (<><Line ref={chartRef} className={props.className} width={props.width} height={props.height} options={optionsFunction(props.title,props.yaxis,props.xaxis,props.showTooltip,props.showLegend,props.y1title)} data={props.data(state.useLight)}/></>);
}
export function WakaTimePieChart(props:{data:WakaLangObj,title?:string,showLegend:boolean,className?:string}){
  const chartRef = useRef<ChartJS>(null);
  const { state } = useContext(ThemeContext);
  return (<><Pie id="WakaPieChart" className={props.className} data={WakaObjToData(props.data)} options={PieOptions(props.title,props.showLegend)}/></>)
}
export function WakaTimeBarChart(props:{data:WakaCodeObj,className?:string,title?:string,isMobile?:boolean}){
  const chartRef = useRef<ChartJS>(null);
  const { state } = useContext(ThemeContext);
  //@ts-ignore //more random diagnostics
  return <> <Bar ref={chartRef} className={" rounded-[10px] p-4"+props.className}  options={histogramOptions(props.title,undefined,undefined,!props.isMobile,false,true,false,0,0,true,!props.isMobile)} data={WakaCodeObjToData(props.data)} /> </>
}
export type multiLineData = {
labels: any[],
datasets: [
{
  label?: string,
  data: number[],
  backgroundColor: [ string ],
  borderColor: [ string ],
  borderWidth: number
},
{
  label?: string,
  data: number[],
  backgroundColor: [ string ],
  borderColor: [ string ],
  borderWidth: number
},
]
};
export type lineData = {
labels: any[],
datasets: [{
  label?: string,
  data: number[],
  backgroundColor: [ string ],
  borderColor: [ string ],
  borderWidth: number
}]
};
export type histData = {
labels: any[],
datasets: [{
  label?: string,
  data: number[],
  backgroundColor: [ string ],
  borderColor: [ string ],
  borderWidth: number
}]
};
