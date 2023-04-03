import { Grid, Link } from '@mui/material';
import { GitHub, LinkedIn, Mail } from '@mui/icons-material'
export default function Footer() {
let styleString = "h-1/2 w-1/2 transition ease-in-out duration-[700ms] fill-none stroke-black dark:stroke-white hover:rotate-[20deg] hover:stroke-purple dark:hover:stroke-yellow"
return (
<>
<br />
<div className="mobile:grid mobile:grid-cols-3 flex justify-center">
<div className="max-w-[100px] place-self-center text-right"> <a target="_blank" href="https://github.com/DavidCincotta" ><GitHub className={styleString}/></a> </div>
<div className="max-w-[100px] place-self-center text-center"> <a target="_blank" href="https://www.linkedin.com/in/david-cincotta-a20384171/"><LinkedIn className={styleString}/></a> </div>
<div className="max-w-[100px] place-self-center text-left"> <a target="_blank" href="mailto:decincotta@gmail.com"><Mail className={styleString}/></a> </div>
</div>
<br />
</>
);
}
