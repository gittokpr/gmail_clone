import { Button, IconButton } from '@material-ui/core'
import { AccessTime, Duo, ExpandMore, Inbox, LabelImportant, NearMe, Note, Person, Phone, Star } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add'
import React from 'react'
import SidebarOption from '../SidebarOption/SidebarOption';
import './Sidebar.css'

function Sidebar() {
    return (
        <div className='sidebar'>
            <Button startIcon={<AddIcon />} className='sidebar__compose'>Compose</Button>
            <SidebarOption title="Inbox" Icon={Inbox} number={54} selected={true} />
            <SidebarOption title="Starred" Icon={Star} number={34} />
            <SidebarOption title="Snoozed" Icon={AccessTime} number={14} />
            <SidebarOption title="Important" Icon={LabelImportant} number={54} />
            <SidebarOption title="Sent" Icon={NearMe} number={54} />
            <SidebarOption title="Drafts" Icon={Note} number={54} />
            <SidebarOption title="More" Icon={ExpandMore} number={54} />
            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <Person />
                    </IconButton>
                    <IconButton>
                        <Duo />
                    </IconButton>
                    <IconButton>
                        <Phone />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
