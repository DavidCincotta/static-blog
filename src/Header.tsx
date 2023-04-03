import StyledSwitch from '../src/StyledSwitch';
import Menu from '../src/Menu';
import GlobalScripts from '../src/GlobalScripts'
export default function Header(){
	return(
			<>
			<GlobalScripts />
			<div className="group grid grid-cols-2 gap-0">
			<div className="m-2"> <Menu /> </div>
			<div className="place-self-end m-2"> <StyledSwitch /> </div>
			</div>
			</>
		  )
}
