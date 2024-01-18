import React, { useState } from 'react'
import './style.scss'

const SwitchTab = ({ data, onTabChange }) => {

    let tabDetails = ['caraouselTab activeTab', 'caraouselTab']

    let [tabStatus, setTabStatus] = useState(tabDetails)

    const handleSwitchTab = (e) => {
        if (e.target.className === 'caraouselTab') {
            let temp = tabStatus.reverse()
            tabStatus = [...temp]
            setTabStatus(tabStatus)

            onTabChange()
        }

    }

    return (
        <span className="caraouselTabs">
            {
                data.map((item, idx) => {
                    return (
                        <span
                            key={idx}
                            className={tabStatus[idx]}
                            onClick={handleSwitchTab}
                        >{item}</span>
                    )
                })
            }
        </span>
    )
}

export default SwitchTab
