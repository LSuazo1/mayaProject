import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { IconMenu2 } from '@tabler/icons'

const SidebarDemo = () => {
    const [visibleLeft, setVisibleLeft] = useState(false);

    return (
        <div>
            <div className="card">
                <Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
                    <h3>Left Sidebar</h3>
                    <ul>
                        <li>12.lorem</li>
                        <li>13.lorem</li>
                        <li>14.1lorem</li>
                        <li>15.1lorem</li>
                        <li>16.1lorem</li>
                    </ul>
                </Sidebar>

                <Button icon={IconMenu2} onClick={() => setVisibleLeft(true)} className="mr-2" />
            </div>
        </div>
    )
}

export default SidebarDemo