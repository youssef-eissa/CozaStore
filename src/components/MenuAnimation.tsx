import { Twirl as Hamburger } from 'hamburger-react'
import {  Drawer } from 'antd';
type TMenu = {
    open: boolean,
    setOpen: (open: boolean) => any
}
function MenuAnimation({open, setOpen}: TMenu) {


    const showDrawer = () => {
    setOpen(true);
};

    const onClose = () => {
    setOpen(false);
};
    return (
    <div className='menuu'>
        <Hamburger onToggle={showDrawer}  toggled={open} distance="sm" size={25} />
    <Drawer className='ind' title="Menu" style={{ position: 'relative',zIndex: 3,}} onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        </Drawer>
    </div>
)
}

export default MenuAnimation
