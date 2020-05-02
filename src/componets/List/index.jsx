import React from 'react';
import './list.scss';
import classNames from 'classnames';

import Badge from '../Badge/'


const List = ({items, isRemoveble, click  }) => {
    // console.log(isRemoveble);
    return (
     <ul onClick={click} className="list">
         {
            items.map((item,index) => 
            // <li key={index}  className={item.active ? 'active' : ''}>
            <li key={index}  className={classNames(item.className, {'active' : item.active})}>
                <i>
                    {item.icons ? item.icons :  <Badge color={item.color} />}
                </i>
                <span>{item.name}</span>
            </li>
            )
         }
        
     </ul>
    )
}

export default List


