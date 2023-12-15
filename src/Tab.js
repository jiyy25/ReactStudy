import React, { useState } from 'react'
import db from './data/db.json'

function Tab() {
    const [tabnum, setTabnum] = useState(0);


    return (
        <section id='tabsection'>
            <div className='d-flex'>
                {
                    db.tab.map((v, i) => {
                        const colorvar = tabnum === i ? "red" : null;
                        //i를 활용해야하기 때문에 이 안에다 써야함
                        //삼항연산식 i 이면 나머지는 null을 반환하겠다.

                        // const colorChange = () => {
                        //     setTabnum(i)
                        //     //인덱스를 사용해서 구분가능..!
                        // }
                        return (
                            <>
                                <h3 style={{ color: colorvar }}
                                    onClick={() => { setTabnum(i) }}>
                                    {v.tabtext}</h3>
                                <ul>
                                    {
                                        tabnum === i &&
                                        v.tabul.map((vv, ii) => {
                                            return <li><a href={vv.href}>{vv.atext}</a></li>
                                        })
                                    }
                                </ul>
                            </>
                        )

                    })

                }

            </div>
        </section >
    )
}

export default Tab
