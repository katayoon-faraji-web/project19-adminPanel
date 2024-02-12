import NotificationsIcon from '@mui/icons-material/Notifications';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import SettingsIcon from '@mui/icons-material/Settings';
const FirstLine = () =>{
    return(
        <div className="w-full h-[250px] bg-[#24292d] rounded-lg">
             <div>
                <input type="search" />
            </div>
            <div>
                <ul>
                    <li><NotificationsIcon/></li>
                    <li><MarkunreadIcon/></li>
                    <li><SettingsIcon/></li>
                </ul>
            </div>
            <div>
                <span>hello,katy</span>
            </div>
        </div>
    )
}
export default FirstLine