import React, { useState } from 'react'
import useScreenSize from '../components/useScreenSize';
import { Bars3Icon } from '@heroicons/react/24/solid'

const Menu = () => {
    const [menuToggle, setMenuToggle] = useState()
    const screenSize = useScreenSize()


    return (
        <>
            {screenSize.width > 1024 &&

                <nav className='flex justify-between p-10 mx-4 text-3xl'>
                    <p id='logoFont'>Gilson Jeremias</p>
                    <div className='flex gap-10'>
                        <div className='flex gap-5'>
                            <a href='#projects' id='logoFont' ><p className='hover:text-[#415A77]'>Projects</p></a>
                        </div>
                    </div>
                </nav>
            }
        </>
    )
}

export default Menu